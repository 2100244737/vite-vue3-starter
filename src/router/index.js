import {createRouter,createWebHashHistory} from 'vue-router'
/* Layout */
import Layout from '@/layout/index.vue'

export const constantRoutes =[{
    path: '/',
    redirect: '/login',
    hidden: true
},{
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
},{
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/index',
    children: [{
        path: 'index',
        name: 'Dashboard',
        meta: {
            title: '首页',
            icon: 'el-icon-house',
            affix: true
        },
        component: () => import('@/views/dashboard/index.vue')
    }]
}]
export const asyncRoutes = []
const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
    scrollBehavior: () => ({
        y: 0
    }),
})
export function resetRouter() {
    const newRouter = router
    router.matcher = newRouter.matcher // reset router
}
export default router
