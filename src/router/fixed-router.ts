export const fixedRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/index.vue'),
    meta: {
      title: '首页',
      menu: true,
      level: 0,
      icon: 'home',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue'),
    meta: {
      title: '登录',
      hideLayout: true,
    },
  },
]
