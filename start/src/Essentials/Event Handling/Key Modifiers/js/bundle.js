/**
 * Created by Pwcong on 2017/1/8.
 */

var vm = new Vue({
    el: '#vm',
    data: {
    },
    methods: {
        say: function(word) {
            alert(word);
        }
    }
});


/*

全部的按键别名：

.enter
.tab
.delete (捕获 “删除” 和 “退格” 键)
.esc
.space
.up
.down
.left
.right


可以通过全局 config.keyCodes 对象自定义按键修饰符别名：

//可以使用 v-on:keyup.f1
Vue.config.keyCodes.f1 = 112

**********************************

2.1.0 新增
可以用如下修饰符开启鼠标或键盘事件监听，使在按键按下时发生响应。
.ctrl
.alt
.shift
.meta

*/