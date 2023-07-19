import groupAccess from '@/middleware/groupAccess'
import { useAuthStore } from '@/stores/auth';
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

const routesUser = [
    {
        name: 'Admin',
        path: '/admin',
        component: () => import('@/views/AdminView.vue'),
        meta: {
            requiresAuth: true,
            title: 'Admin',
        },
        beforeEnter: isUser,
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

function isUser(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
    const authStore = useAuthStore();
    const user = authStore.userRole;
    if (user == 'user') {
        next()
    } else {
        next('/') // Redirect to home page or another route
    }
}

export default routesUser
