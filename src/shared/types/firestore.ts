import type { Timestamp } from 'firebase/firestore';
import type { UserRole } from '.';

export type IUserDTO = {
  createdAt: Timestamp;
  displayName: string;
  email: string;
  photoURL: string;
  role: UserRole;
};
