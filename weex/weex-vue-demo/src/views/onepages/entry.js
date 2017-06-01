import indexView from './page.vue'
import mixins from '../../mixins'
import router from './router'
import * as filters from 'filters/index'

// register global utility filters.
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
// register global mixins.
Vue.mixin(mixins)

// 注册全局 component
// Vue.component('osc-root', require('components/osc-root'))
Vue.component('osc-navpage', require('components/osc-navpage'))
// Vue.component('osc-navbar', require('components/osc-navbar'))
// Vue.component('osc-tabbar', require('components/osc-tabbar'))
// Vue.component('osc-list', require('components/osc-list'))
// Vue.component('osc-scroller', require('components/osc-scroller'))
// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
new Vue(Vue.util.extend({ el: '#root',router }, indexView));

router.push('/')
