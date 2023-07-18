const routesOthers = [
    {
        name: 'NotFound',
        path: '/:catchAll(.*)',
        component: () => import('@/views/NotFound.vue'),
        meta: {
            requiresAuth: false,
        },
    },

]

export default routesOthers
