import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized, type RouteLocationNormalizedLoaded } from 'vue-router'
import routesAuth from '@/router/routesAuth';
import routesOthers from '@/router/routesOthers';
import routesIndex from '@/router/routesIndex';
import routesAdmin from '@/router/routesAdmin';
import routesUser from '@/router/routesUser';

import { useAuthStore } from '@/stores/auth';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...routesIndex,
        ...routesAdmin,
        ...routesUser,
        ...routesAuth,
        ...routesOthers
    ]
})

router.beforeEach((to : RouteLocationNormalizedLoaded, from : RouteLocationNormalizedLoaded, next : NavigationGuardNext) => {
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
