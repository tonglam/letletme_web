import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/group',
        name: 'Group',
        component: () => import('@/views/group/Group.vue'),
        meta: {
            title: '公众号',
        },
        children: [
            {
                path: 'scout',
                name: 'Scout',
                component: () => import('@/views/group/Scout.vue'),
                meta: {
                    title: '推荐',
                }
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    let title: string = '';
    if (typeof to.meta.title === "string") {
        title = to.meta.title;
    }
    document.title = title
    next()
})

export default router
