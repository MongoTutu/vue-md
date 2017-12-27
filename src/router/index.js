import Vue from 'vue'
import Router from 'vue-router'
import Life from '../pages/life/life.vue'
import home from '../pages/home/home.vue';
import about from '../pages/about/about.vue';
import news from '../pages/news/news.vue';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/about',
            name: 'about',
            component: about
        },
        {
            path: '/news',
            name: 'news',
            component: news
        },
        {
            path: '/life',
            name: 'Life',
            component: Life
        }
    ]
});
