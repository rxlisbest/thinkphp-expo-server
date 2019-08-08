import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '*',
            redirect: '/'
        },
        {
            path: '/',
            name: 'index',
            component: require('@/components/HelloWorld').default
        },
        {
            path: '/test',
            name: 'test',
            component: require('@/views/set-up/index').default
        },
        {
            path: '/electric-automation/index',
            name: 'electric-automation-index',
            component: require('@/views/electric-automation/index').default
        }
    ]
})
