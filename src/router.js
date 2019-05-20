import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/tittle-tattle',
          name: 'TittleTattle',
          component: () => import('./views/tittle-tattle.vue'),
        },
        {
          path: '/apple',
          name: 'apple',
          component: () => import('./views/apple.vue'),
        },
        {
          path: '/path',
          name: 'path',
          component: () => import('./views/path.vue'),
        },
        {
          path: '/ghost-market',
          name: 'GhostMarket',
          component: () => import('./views/ghost-market.vue'),
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },

  ],
});
