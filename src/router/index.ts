import { createRouter, createWebHistory } from 'vue-router';
import { authenticateUser } from './guards';
import HomeLayout from '@/layouts/HomeLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import LoginView from '@/views/auth/LoginView.vue';
import { homeRoutes } from './routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeLayout,
      children: homeRoutes,
      meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/home/AboutView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      component: AuthLayout,
      children: [
        {
          path: '',
          name: 'Login',
          component: LoginView
        }
      ]
    }
  ]
});

// Authentication
router.beforeEach(authenticateUser);

// Authorization
router.beforeEach((_to, _from, next) => {
  next();
});
export default router;
