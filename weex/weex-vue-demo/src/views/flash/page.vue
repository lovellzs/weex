<style src="./style.css" scoped></style>

<template src="./template.html"></template>

<script>
    import start from './page'
    import weexModules from 'utils/WeexModules'
    export default {
        data () {
            return {
                appbg: start.getBgImage(),
                title:"欢迎使用weex-vue"
            }
        },

        mounted () {

        },

        methods: {
            gotoHome(){
                weexModules.gotoPage('js://onepages_page.js');
            }
        }
    }
</script>