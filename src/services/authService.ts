import { auth, authIsReady, db, provider } from '@/plugins/firebase';
import type { IUser } from '@/shared/types';
import type { IUserDTO } from '@/shared/types/firestore';
import { formatUserFirestoreData } from '@/shared/utils/adapters';
import { useAuthStore } from '@/stores/authStore';
import { signInWithPopup, type User, signOut } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';

export const signInWithGoogle = async () => {
  let user: User | null = null;
  try {
    const response = await signInWithPopup(auth, provider);
    user = response.user;
    if (user) {
      await initFirstLoginUser(user);
    }
  } catch (error) {
    console.error('Lỗi đăng nhập:', error);
    console.log(error);
  }

  return user;
};

export const getLoginUser = async () => {
  await authIsReady;
  const { currentUser } = auth;

  const { setLoginUser, needFireStoreData, loginUser, setNeedFireStoreData } = useAuthStore();
  if (!currentUser) {
    setLoginUser(null);
    return null;
  }
  const user: IUser = {
    uid: currentUser.uid,
    displayName: currentUser.displayName ?? '',
    photoURL: currentUser.photoURL ?? '',
    email: currentUser.email ?? '',
    role: loginUser?.role ?? 'member',
    createdAt: loginUser?.createdAt ?? new Date()
  };
  if (needFireStoreData) {
    // const firestoreUser = await getUserFromFireStore(currentUser?.uid);
    // if (firestoreUser) {
    //   user.createdAt = firestoreUser.createdAt;
    //   user.role = firestoreUser.role;
    //   setNeedFireStoreData(false);
    // }
    setLoginUser(user);
  }

  return currentUser;
};

export const logout = async () => {
  await signOut(auth);

  window.location.reload();
};

export const initFirstLoginUser = async (user: User) => {
  if (!user) {
    return;
  }

  const docRef = doc(db, 'users', user.uid);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    await setDoc(docRef, {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      createdAt: serverTimestamp(),
      role: 'member'
    });
  }
};

export const getUserFromFireStore = async (uid: string) => {
  const docRef = doc(db, 'users', uid);

  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const user = formatUserFirestoreData(uid, docSnap.data() as IUserDTO);
    return user;
  }
  return null;
};
