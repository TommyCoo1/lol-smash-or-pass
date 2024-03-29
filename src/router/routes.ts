import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'index', component: () => import('pages/IndexPage.vue') },
      { path: 'game', component: () => import('pages/GamePage.vue') },
    ],
  },
  {
    path: '/test',
    component: () => import('pages/GamePage.vue'),
    // children: [{path: '', component: () => import('pages/IndexPage.vue')}],
  },
  {
    path: '/swipe',
    component: () => import('pages/SwipeExample.vue'),
    // children: [{path: '', component: () => import('pages/IndexPage.vue')}],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
