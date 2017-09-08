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
    template: '\
        <div>\
            <h2>我是子组件的标题</h2>\
            <slot>\
                只有在没有要分发的内容时才会显示。\
            </slot>\
        </div>'
}

var my_component_3 = {
    template: '\
        <div class="container">\
            <header>\
                <slot name="header"></slot>\
            </header>\
            <main>\
                <slot></slot>\
            </main>\
            <footer>\
                <slot name="footer"></slot>\
            </footer>\
        </div>'
}


var my_component_4 = {
    template: '\
        <div class="child">\
            <slot text="hello from child"></slot>\
        </div>'
}

var my_component_5 = {
    props: ['items'],
    template: '\
        <ul>\
            <slot name="item"\
                v-for="item in items"\
                :text="item.text">\
                <!-- fallback content here -->\
            </slot>\
        </ul>'
}

var vm = new Vue({
    el: '#vm',
    data: {
        items: [
            {text: 'one'},
            {text: 'two'},
            {text: 'three'},
        ]
    },
    components: {
        "my-component-1": my_component_1,
        "my-component-2": my_component_2,
        "my-component-3": my_component_3,
        "my-component-4": my_component_4,
        "my-component-5": my_component_5,
    }
});

