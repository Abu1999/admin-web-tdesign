export const userRoutes = [
  {
    path: '/doctor',
    name: 'doctor',
    redirect: '/doctor',
    children: [
      {
        name: 'doctorList',
        path: '',
        component: () => import('@/views/doctor/list/index/index.vue'),
        meta: {
          title: '人员列表',
          menu: true,
          level: 1,
        },
        children: [
          {
            name: 'doctorListDetail',
            path: 'detail',
            component: () => import('@/views/doctor/list/detail/index.vue'),
            meta: {
              title: '人员详情',
              level: 2,
            },
          },
        ],
      },
      {
        name: 'doctorApprove',
        path: 'approve',
        component: () => import('@/views/doctor/approve/index/index.vue'),
        meta: {
          title: '人员审批',
          menu: true,
          level: 1,
        },
        children: [
          {
            name: 'doctorApproveDetail',
            path: 'detail',
            component: () => import('@/views/doctor/approve/detail/index.vue'),
            meta: {
              title: '人员详情',
              level: 2,
            },
          },
        ],
      },
    ],

    meta: {
      title: '人员管理',
      menu: true,
      level: 0,
      icon: 'chart-bar',
    },
  },
]
