import { createRouter, createWebHistory } from 'vue-router'
import routesAuth from '@/router/routesAuth';
import routesOthers from '@/router/routesOthers';
import routesIndex from '@/router/routesIndex';

import { useAuthStore } from '@/stores/auth';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...routesIndex,
        ...routesAuth,
        ...routesOthers
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        const authStore = useAuthStore();
        let isAuthenticated = authStore.isAuthenticated;
        if (!isAuthenticated) {
            next({
                name: 'register',
                query: { redirect: to.fullPath },
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
});

export default router
