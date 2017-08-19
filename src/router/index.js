import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';

const Hotter = () => import(/* webpackChunkName: "Hotter" */'@/components/Hotter');
const Colder = () => import(/* webpackChunkName: "Colder" */'@/components/Colder');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/hotter',
      name: 'Hotter',
      component: Hotter,
    },
    {
      path: '/colder',
      name: 'Colder',
      component: Colder,
    },
  ],
});
