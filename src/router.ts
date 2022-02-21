import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Group from './views/Group.vue';
import News from './views/News.vue';
import Contact from './views/Contact.vue'
import Resarch from './views/Research.vue'
Vue.use(Router);

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            meta: {
                title: '',
            },
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            meta: {
                title: '',
            },
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        },
        {
            path:'/group',
            name:'Group',
            component:Group
        },
        {
          path:'/news',
          name:'News',
          component:News
        },
        {
          path:'/contact',
          name:'Contact',
          component:Contact
        },
        {
            path:'/research',
            name:'Research',
            component:Resarch
        },
    ],
});
