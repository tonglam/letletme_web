import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/index.vue')
    },
    {
        path: '/404',
        component: () => import('@/views/web/error.vue'),
        meta: {
            title: 'error'
        }
    },
    {
        path: '/',
        component: () => import('@/layout/layout.vue'),
        children: [
            {
                path: '/group',
                name: 'group',
                component: () => import('@/views/group/index.vue'),
                children: [
                    {
                        path: 'scout',
                        name: 'Scout',
                        component: () => import('@/views/group/scout.vue'),
                        meta: {
                            title: '推荐',
                        }
                    }
                ]
            }
        ]
    },
]

export const asyncRoutes = []

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
