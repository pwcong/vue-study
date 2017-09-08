/**
 * Created by Pwcong on 2017/1/10.
 */

// 这种复杂的补间动画逻辑可以被复用
// 任何整数都可以执行动画
// 组件化使我们的界面十分清晰
// 可以支持更多更复杂的动态过渡
// strategies.
Vue.component('animated-integer', {
        template: '<span>{{ tweeningValue }}</span>',
        props: {
            value: {
                type: Number,
                required: true
            }
        },
        data: function() {
            return {
                tweeningValue: 0
            }
        },
        watch: {
            value: function(newValue, oldValue) {
                this.tween(oldValue, newValue)
            }
        },
        mounted: function() {
            this.tween(0, this.value)
        },
        methods: {
            tween: function(startValue, endValue) {
                var vm = this

                function animate(time) {
                    requestAnimationFrame(animate)
                    TWEEN.update(time)
                }
                new TWEEN.Tween({
                        tweeningValue: startValue
                    })
                    .to({
                        tweeningValue: endValue
                    }, 500)
                    .onUpdate(function() {
                        vm.tweeningValue = this.tweeningValue.toFixed(0)
                    })
                    .start()
                animate()
            }
        }
    })
    // All complexity has now been removed from the main Vue instance!
new Vue({
    el: '#vm',
    data: {
        firstNumber: 20,
        secondNumber: 40
    },
    computed: {
        result: function() {
            return this.firstNumber + this.secondNumber
        }
    }
})