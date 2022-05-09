import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewWeibo from "../views/NewWeibo";
import MyWeibo from "../views/MyWeibo";
import Follows from "../views/Follows";
import Fans from "../views/Fans";
import OtherWeibo from "../views/OtherWeibo";
import OtherFollows from "../views/OtherFollows";
import OtherFans from "../views/OtherFans";
import SingleWeibo from "../views/SingleWeibo";

Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location) {
//     return originalPush.call(this, location).catch(err => err)
// }

const routes = [
    {
        path: '/',
        name: 'CloudMap',
        component: () => import("../views/CloudMap")
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import("../views/Test")
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/NewWeibo',
        name: 'NewWeibo',
        component: NewWeibo
    },
    {
        path: '/MyWeibo',
        name: 'MyWeibo',
        component: MyWeibo
    },
    {
        path: '/Follows',
        name: 'Follows',
        component: Follows
    },
    {
        path: '/Fans',
        name: 'Fans',
        component: Fans
    },
    {
        path: '/OtherWeibo',
        name: 'OtherWeibo',
        component: OtherWeibo
    },
    {
        path: '/OtherFollows',
        name: 'OtherFollows',
        component: OtherFollows
    },
    {
        path: '/OtherFans',
        name: 'OtherFans',
        component: OtherFans
    },
    {
        path: '/SingleWeibo',
        name: 'SingleWeibo',
        component: SingleWeibo
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
