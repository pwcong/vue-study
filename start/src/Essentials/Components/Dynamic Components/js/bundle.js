/**
 * Created by Pwcong on 2017/1/9.
 */

var my_component_1 = {
    template: '\
        <div>\
            <input type="text" v-model="value">\
            <p>{{value}}</p>\
        </div>',
    data: function() {
        return {
            value: ''
        };
    }
};

var my_component_2 = {
    props: ['item'],
    template: '<li><a href="#">{{item.text}}</a></li>'
};

var my_component_3 = {
    template: '<h1>Hello Pwcong</h1>'
};

var my_component_4 = {
    template: '<h1>Hello World</h1>'
};

var vm = new Vue({
    el: '#vm',
    data: {
        items: [
            {text: 'one'},
            {text: 'two'},
            {text: 'three'},
        ],
        // 下面两个效果一样
        currentView_1: 'my-component-3',
        currentView_2: my_component_3,
        currentView: 'my-component-3'
    },
    methods: {
        onClick: function(){
            this.currentView = this.currentView == 'my-component-3' ? 
                'my-component-4' : 'my-component-3';
        }
    },
    components: {
        "my-component-1": my_component_1,
        "my-component-2": my_component_2,
        "my-component-3": my_component_3,
        "my-component-4": my_component_4,
        

    }
});

