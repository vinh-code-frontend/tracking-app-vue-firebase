import { getLoginUser } from '@/services/authService';
import type { RouteLocationNormalizedLoadedGeneric, RouteLocationNormalizedGeneric, NavigationGuardNext } from 'vue-router';

type To = RouteLocationNormalizedGeneric;
type From = RouteLocationNormalizedLoadedGeneric;
type Next = NavigationGuardNext;

export const authenticateUser = async (to: To, from: From, next: Next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const loginUser = await getLoginUser();
  if (requiresAuth) {
    if (loginUser) {
      next();
    } else {
      next({ name: 'Login', query: { redirect: to.fullPath } });
    }
  } else {
    if (loginUser && to.name === 'Login') {
      next({ name: 'Home' });
    } else {
      next();
    }
  }
};
