import HomeView from '@/views/home/HomeView.vue';
import UserView from '@/views/home/UserView.vue';
import type { RouteRecordRaw } from 'vue-router';

export const homeRoutes: RouteRecordRaw[] = [
  { path: '', name: 'Home', component: HomeView, meta: { title: 'Home' } },
  { path: 'chart', name: 'Chart', component: UserView, meta: { title: 'Chart' } },
  { path: 'dashboard', name: 'Dashboard', component: UserView, meta: { title: 'Dashboard' } },
  { path: 'user', name: 'User', component: UserView, meta: { title: 'User' } }
];
