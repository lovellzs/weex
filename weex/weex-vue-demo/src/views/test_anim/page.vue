<style src="./style.css" scoped></style>

<template src="./template.html"></template>

<script>
    const animation = weex.requireModule('animation')
    const modal = weex.requireModule('modal')

    export default {
        data(){
            return {
                rotate:"0deg",
                isRing : false
            }
        },
        mounted(){

        },
        methods: {
            ringStart(){
                this.move();
            },
            move () {
                this.isRing=true;
                var self = this;
                var testEl = this.$refs.test;
                modal.toast( "testEl====="  );
                this.rotate = this.rotate === '-45deg' ? '45deg' : '-45deg';
                animation.transition(testEl, {
                    styles: {
                        color: '#FF0000',
                        transform: 'rotate(' + this.rotate + ')',
                        transformOrigin: 'center top'
                    },
                    duration: 1000, //ms
                    timingFunction: 'ease',
                    delay: 0 //ms
                }, ()=> {
                    if(this.isRing){
                        this.move();
                    }else{
                        this.stop();
                    }
                })
            },
            ringStop(){
                this.isRing=false;
            },
            stop(){

                var self = this;
                var testEl = this.$refs.test;

                animation.transition(testEl, {
                    styles: {
                        color: '#FF0000',
                        transform: 'rotate( 0deg )',
                        transformOrigin: 'center top'
                    },
                    duration: 500, //ms
                    timingFunction: 'ease',
                    delay: 0 //ms
                }, ()=> {
                })
            }
        }
    }
</script>
