/*
 * @Author: Miya
 * @Date: 2021-03-15 12:16:25
 * @LastEditTime: 2022-03-20 21:24:18
 * @LastEditors: Miya
 * @Description: Router
 * @FilePath: \Kagura-Image\front\src\router\router.ts
 * @Version: 1.0
 */

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home';

const routes = [
  {
    path: '/',
    component: Home,
  },
  // {
  //   path: '/test',
  //   component: () => import('../pages/test'),
  // },
  // {
  //   path: '/manager',
  //   component: () => import('../pages/Manager'),
  // },
  // {
  //   path: '/install',
  //   component: () => import('../pages/Install'),
  // },
  // {
  //   path: '/admin',
  //   component: () => import('../pages/Admin'),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
