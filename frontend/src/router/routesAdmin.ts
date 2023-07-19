import groupAccess from '@/middleware/groupAccess'
import { useAuthStore } from '@/stores/auth'
import type { NavigationGuardNext, RouteLocationNormalizedLoaded } from 'vue-router';

const routesAdmin = [
    {
        name: 'Admin',
        path: '/admin',
        component: () => import('@/views/AdminView.vue'),
        meta: {
            requiresAuth: true,
            title: 'Admin',
        },
        beforeEnter: isAdmin,
        children: [
            {
                name: 'Dashboard',
                path: '/admin/dashboard',
                component: () => import(/* webpackChunkName: "chunks/dashboard" */ '@/views/Admin/DashboardPage.vue'),
                meta: {
                    requiresAuth: true,
                    title: 'dashboard',
                },
                beforeEnter: groupAccess('orders'),
            },
        ]
    }
]

function isAdmin(to : RouteLocationNormalizedLoaded, from : RouteLocationNormalizedLoaded, next : NavigationGuardNext) {
    const authStore = useAuthStore();
    const user = authStore.userRole;
    if (user == 'admin') {
        next()
    } else {
        next('/') // Redirect to home page or another route
    }
}

export default routesAdmin
