/**
 * Created by Pwcong on 2017/1/11.
 */

// 为自定义的选项 'myOption' 注入一个处理器。 
Vue.mixin({
    created: function() {
        var myOption = this.$options.myOption
        if (myOption) {
            console.log(myOption)
        }
    }
})
new Vue({
        myOption: 'hello!'
    })
    // -> "hello!"