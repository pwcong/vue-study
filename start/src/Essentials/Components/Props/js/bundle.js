/**
 * Created by Pwcong on 2017/1/8.
 */

var my_component_1 = {
    props: ['title'],
    template: '<h1>{{ title }}</h1>'
};

var my_component_2 = {
    props: ['mySimpleTitle'],
    template: '<h2>{{ mySimpleTitle }}</h2>'
};

var my_component_3 = {
    props: ['msg'],
    template: '<p>Msg: {{ msg }}</p>'
};

var my_component_4 = {
    props: ['initialcount','word'],
    data: function(){
        return {
            count: this.initialcount || 0
        }
    },
    template: '<p>Count: {{ count }} | Lower Word: {{ lowerWord }}</p>',
    computed: {
        lowerWord: function() {
            return this.word.toLowerCase();
        }
    }
};

var my_component_5 = {

    props: {
        propA: Number,
        propB: [String,Number],
        propC: {
            type: String,
            required: true

            /*
                type 可以是下面原生构造器：
                String
                Number
                Boolean
                Function
                Object
                Array
            */
        },
        propD: {
            type: Number,
            default: 100
        },
        propE: {
            type: Object,
            default: function(){
                return {
                    message: 'Hello'
                }
            }
        },
        propF: {
            type: Number,
            required: true,
            validator: function(value){
                //如果验证失败，会抛出警告信息。
                return value > 10
            }
        }

    },
    template: '<p>Please see what have been log in Console</p>'
};

var vm = new Vue({
    el: '#vm',
    data: {
        title: 'Hello Pwcong',
        msg: '',
    },
    components: {
        'my-component-1': my_component_1,
        'my-component-2': my_component_2,
        'my-component-3': my_component_3,
        'my-component-4': my_component_4,
        'my-component-5': my_component_5,
    }
});
