/**
 * Created by Lucas on 2020/7/22.
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL, // 部署在服务器子路径上时需要
    routes: [
        {
            path: '/',
            name: 'hello',
            component: () => import('./components/DefaultLayout.vue'),
            redirect: 'hello',
            children: [
                {
                    path: '/hello',
                    name: 'hello',
                    component: () => import('./views/HelloWorld.vue')
                }
            ]
        },
        {
            path: '/404',
            name: '404',
            component: () => import('./views/404.vue')
        },
        {
            path: '*',
            name: 'all',
            redirect: '/404'
        }
    ]
});

export default router;
