const routesAuth = [
    {
        name: 'login',
        path: '/login',
        component: () =>
            import('@/views/Auth/LoginPage.vue'),
        meta: {
            requiresAuth: false,
        },
    },
    {
        name: 'register',
        path: '/register',
        component: () =>
            import('@/views/Auth/RegisterPage.vue'),
        meta: {
            requiresAuth: false,
        },
    },

]

export default routesAuth
