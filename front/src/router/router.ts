/*
 * @Author: Miya
 * @Date: 2021-03-15 12:16:25
 * @LastEditTime: 2021-03-16 14:47:00
 * @LastEditors: Miya
 * @Description: Router
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\front\src\router\router.ts
 * @Version: 1.0
 */

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/test',
    component: () => import('../pages/test')
  },
  {
    path: '/install',
    component: () => import('../pages/Install'),
  },
  {
    path: '/admin',
    component: () => import('../pages/Admin'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
