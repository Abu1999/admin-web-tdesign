import { type RouteRecordRaw } from 'vue-router'

export const fixedRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),

    meta: {
      title: '首页',
      level: 0,
      menu: true,
      icon: 'home',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      hideLayout: true,
      hideMenu: true,
    },
  },

  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404.vue'),
    meta: {
      title: '404',
      hideMenu: true,
      // hideLayout: true,
    },
  },
]
