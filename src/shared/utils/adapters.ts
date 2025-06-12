import type { IUser } from '../types';
import type { IUserDTO } from '../types/firestore';

export const formatUserFirestoreData = (uid: string, userDTO: IUserDTO): IUser => {
  return {
    uid,
    displayName: userDTO.displayName,
    email: userDTO.email,
    createdAt: userDTO.createdAt.toDate(),
    role: userDTO.role
  };
};
