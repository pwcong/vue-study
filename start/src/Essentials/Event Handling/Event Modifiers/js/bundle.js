/**
 * Created by Pwcong on 2017/1/8.
 */

var vm = new Vue({
    el: '#vm',
    data: {
    	style: {
    		border: '1px solid red'
    	}
    },
    methods: {
    	say: function(word) {
    		alert(word);
    	}
    }
});

/*
在事件处理程序中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。
尽管我们可以在 methods 中轻松实现这点，但更好的方式是：

methods 只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。

为了解决这个问题， Vue.js 为 v-on 提供了 事件修饰符。
通过由点(.)表示的指令后缀来调用修饰符。
.stop
.prevent
.capture
.self
.once
*/