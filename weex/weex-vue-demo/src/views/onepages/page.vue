<style src="./style.css" scoped></style>

<template src="./template.html"></template>

<script>
    export default {
        data () {
            return {
                itemIndex: 0,
                path: ['/one', '/two']
            }
        },
        mounted () {
        },
        methods: {
            itemClick(index){
                this.itemIndex = index;
                this.jump(this.path[index]);
            }
        }
    }
</script>