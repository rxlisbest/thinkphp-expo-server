import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '*',
            redirect: '/set-up'
        },
        {
            path: '/set-up',
            name: 'set-up-index',
            component: require('@/views/set-up/index').default
        },
        // 电气自动化
        {
            path: '/electric-automation',
            name: 'electric-automation-index',
            component: require('@/views/electric-automation/index').default
        },
        {
            path: '/electric-automation/product',
            name: 'electric-automation-product',
            component: require('@/views/electric-automation/product').default
        },
        {
            path: '/electric-automation/productDetail',
            name: 'electric-automation-productDetail',
            component: require('@/views/electric-automation/productDetail').default
        },
        {
            path: '/electric-automation/220kv',
            name: 'electric-automation-220kv',
            component: require('@/views/electric-automation/220kv').default
        },
        // 智慧水务
        {
            path: '/wisdom-water',
            name: 'wisdom-water-index',
            component: require('@/views/wisdom-water/index').default
        },
        // 低压智能配电
        {
            path: '/low-voltage',
            name: 'low-voltage-index',
            component: require('@/views/low-voltage/index').default
        },
        {
            path: '/low-voltage/product',
            name: 'low-voltage-product',
            component: require('@/views/low-voltage/product').default
        },
        {
            path: '/low-voltage/productDetail',
            name: 'low-voltage-productDetail',
            component: require('@/views/low-voltage/productDetail').default
        },
        {
            path: '/low-voltage/solution',
            name: 'low-voltage-solution',
            component: require('@/views/low-voltage/solution').default
        },
        {
            path: '/low-voltage/solutionDetail',
            name: 'low-voltage-solutionDetail',
            component: require('@/views/low-voltage/solutionDetail').default
        },
        // 智慧水务
        {
            path: '/new-china',
            name: 'new-china-index',
            component: require('@/views/new-china/index').default
        }
    ]
})
