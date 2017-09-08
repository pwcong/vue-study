/**
 * Created by Pwcong on 2017/1/11.
 */

// 当组件和混合对象含有同名选项时，这些选项将以恰当的方式混合。
// 比如，同名钩子函数将混合为一个数组，因此都将被调用。
// 另外，混合对象的 钩子将在组件自身钩子之前调用 。
var mixin_1 = {
    created: function() {
        console.log('混合对象的钩子被调用')
    }
}

new Vue({
        mixins: [mixin_1],
        created: function() {
            console.log('组件钩子被调用')
        }
    })
    // -> "混合对象的钩子被调用"
    // -> "组件钩子被调用"

//////////////////////

var mixin_2 = {
    methods: {
        foo: function() {
            console.log('foo')
        },
        conflicting: function() {
            console.log('from mixin')
        }
    }
}
var vm = new Vue({
    mixins: [mixin_2],
    methods: {
        bar: function() {
            console.log('bar')
        },
        conflicting: function() {
            console.log('from self')
        }
    }
})
vm.foo() // -> "foo"
vm.bar() // -> "bar"
vm.conflicting() // -> "from self"