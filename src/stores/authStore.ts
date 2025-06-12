import type { IUser } from '@/shared/types';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loginUser: null as IUser | null,
    needFireStoreData: true as boolean
  }),
  actions: {
    setLoginUser(user: IUser | null) {
      this.loginUser = user;
      console.log(this.loginUser);
    },
    setNeedFireStoreData(payload: boolean) {
      this.needFireStoreData = payload;
    }
  }
});
