// src/router.ts
import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/auth/Login.vue';
import Dashboard from '@/components/dashboard/Dashboard.vue';

const routes = [
  {
    path: '/',
    redirect: '/login', // Redirect from root to /login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  // Add other routes here...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
