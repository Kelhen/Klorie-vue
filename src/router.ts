import Vue from 'vue';
import Router from 'vue-router';
import { LoadingBar } from 'iview';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  LoadingBar.start();
  next();
});

router.afterEach((route) => {
  LoadingBar.finish();
});


export default router;
