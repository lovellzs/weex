
let event = weex.requireModule('event')
export default {
    methods: {
        jump (to) {
            if (this.$router) {
                this.$router.push(to)
            }
        },
        test(){
            return 'cody =====$$$$$$$$&&&**:test 1234567890';
        },
        isIOS() {
            return  weex.config.env ? weex.config.env.platform === 'iOS' : false;
        }

    }
}
