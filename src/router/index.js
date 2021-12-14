import {createRouter,createWebHashHistory} from 'vue-router'
export const constantRoutes =[{
    path: '/',
    redirect: '/login',
    hidden: true
},{
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
},]
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
