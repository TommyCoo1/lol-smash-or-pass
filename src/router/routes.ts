import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'game', component: () => import('pages/GamePage.vue') },
    ],
  },
  {
    path: '/test',
    name:'game',
    component: () => import('pages/GamePage.vue'),
  },
  {
    path: '/congrats',
    name:'congrats',
    component: () => import('pages/CongratsPage.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
