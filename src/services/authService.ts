import { auth, authIsReady, db, provider } from '@/plugins/firebase';
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

  const { setLoginUser } = useAuthStore();
  setLoginUser(currentUser);
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

  const userDocRef = doc(db, 'users', user.uid);
  const docSnap = await getDoc(userDocRef);
  if (!docSnap.exists()) {
    await setDoc(userDocRef, {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      createdAt: serverTimestamp(),
      role: 'member'
    });
  }
};
