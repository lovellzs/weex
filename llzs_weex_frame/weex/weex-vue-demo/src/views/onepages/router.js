// import Vue from 'vue'
import Router from 'vue-router'
import OneView from './one/page.vue'
import TwoView from './two/page.vue'


Vue.use(Router)


export default new Router({
    routes: [
        {path: '/one', component: OneView},
        {path: '/two', component: TwoView},
        {path: '/', redirect: '/one'}
    ]
})
