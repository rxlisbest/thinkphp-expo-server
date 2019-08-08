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
        // 智慧水务
        {
            path: '/wisdom-water',
            name: 'wisdom-water-index',
            component: require('@/views/wisdom-water/index').default
        }
    ]
})
