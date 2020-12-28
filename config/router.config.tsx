export default [
  {
    path: '/login',
    component: '@/pages/login/index',
  },
  {
    path: '/timeout',
    component: '@/pages/Timeout/Timeout',
  },
  {
    path: '/500',
    name: 'not-find',
    component: './Exception/500',
  },
  {
    path: '/404',
    name: 'not-find',
    component: './Exception/404',
  },
  {
    exact: false,
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/', redirect: '/test' },
      {
        path: '/demo',
        component: '@/pages/demo/index',
      },
        {
            path: '/demojs',
            component: '@/pages/demojs/index',

        },
      {
        path: '/test',
        component: '@/pages/test',

      },
      {
        path: '/djsecharts',
        component: '@/pages/dsjecharts/index',

      },
      {
        path: '/demo2',
        component: '@/pages/demo2/index',

      },
      {
        path: '/messageform',
        component: '@/pages/MessageForm/index',

      },
        {
            path: '/echarts',
            component: '@/pages/echarts/index',
        },

      { path: '/*', redirect: '/404' },
    ],
  },
];
