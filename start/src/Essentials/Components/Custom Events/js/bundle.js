/**
 * Created by Pwcong on 2017/1/8.
 */

var button_counter = {
    template: '<button v-on:click="increment">{{ counter }}</button>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        increment: function () {
            this.counter += 1
            this.$emit('increment')
        }
    }
};

var currency_input = {
    template: '\
        <span>\
            $\
            <input\
            ref="input"\
            v-bind:value="value"\
            v-on:input="updateValue($event.target.value)"\
            >\
        </span>\
    ',
    props: ['value'],
    methods: {
        // 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
        updateValue: function (value) {
            var formattedValue = value
            // 删除两侧的空格符
            .trim()
            // 保留 2 小数位
            .slice(0, value.indexOf('.') + 3)
            // 如果值不统一，手动覆盖以保持一致
            if (formattedValue !== value) {
                this.$refs.input.value = formattedValue
            }
            // 通过 input 事件发出数值
            this.$emit('input', Number(formattedValue))
        }
    }
};

var my_component_1 = {
    template: '<h1>Native</h1>'
};

var vm = new Vue({
    el: '#vm',
    data: {
        total: 0,
        msg: '',
        word: '',
        price: 0
    },
    methods: {
        incrementTotal: function () {
          this.total += 1;
        },
        onNativeClick: function(event){
            alert(event.target.innerHTML);
        }
    },
    components: {
        "button-counter": button_counter,
        "my-component-1": my_component_1,
        "currency-input": currency_input
    }
});

var bus = new Vue();