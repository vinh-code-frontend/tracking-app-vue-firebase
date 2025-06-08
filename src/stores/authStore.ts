import type { User } from 'firebase/auth';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state() {
    return {
      loginUser: null as User | null
    };
  },
  actions: {
    setLoginUser(user: User | null) {
      this.loginUser = user;
    }
  }
});
