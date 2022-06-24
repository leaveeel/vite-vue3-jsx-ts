import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'index',
        meta: {
            type: 'index'
        },
        component: () => import('@/views/index')
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        meta: {
            type: '404'
        },
        component: () => import('@/views/404')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach(
    (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
        if (to.meta.type === '404') {
            next({ name: 'index' })
            return
        }

        next()
    }
)

export default router
