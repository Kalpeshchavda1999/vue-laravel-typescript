const routesIndex = [
    {
        name: 'Homepage',
        path: '/',
        component: () => import('@/views/HomePage.vue'),
        meta: {
            requiresAuth: true,
        },
    },
    {
        name: 'ContactUs',
        path: '/contact-us',
        component: () => import('@/views/ContactUs.vue'),
        meta: {
            requiresAuth: true,
        },
    },
]

export default routesIndex
