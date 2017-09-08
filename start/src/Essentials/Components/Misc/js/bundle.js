/**
 * Created by Pwcong on 2017/1/9.
 */

var my_component_1 = {
    props: ['items'],
    template: '\
        <div>\
            <slot name="header">\
                <h2>No Header</h2>\
            </slot>\
            <ul>\
                <li v-for="item in items">{{item.text}}</li>\
            </ul>\
            <slot name="footer" :footer-text="footerText">No Footer</slot>\
        <div>',
    data: function() {
        return {
            footerText: "I'm Footer !"
        }
    }

};

var my_component_2 = {
    template: '<h3>添加了ref属性，可 $refs.xxx 获得对象</h3>'
};

Vue.component("my-component-3",function(resolve,reject){

    
    setTimeout(function(){
        resolve({
            template: '<p>Sync Load Component</p>'
        });
        //reject("加载失败");
    },2000);

});

var my_component_4 = {
    template: '<p>在 HTML 模版中，请使用 kebab-case 形式。当使用字符串模式时，可以使用 camelCase 、 TitleCase 或者 kebab-case 来引用</p>'
};

var my_component_5 = {
    name: 'my-component',
    props: ['enable'],
    template: '\
        <div>\
            <span>OK</span>\
            <my-component v-if="enable" :enable="false"></my-component>\
        </div>'

}

var tree_folder_contents = {
    name: 'tree-folder',
    props: ['folder'],
    template: '\
        <ul>\
            <li v-for="child in folder.children">\
                <tree-folder v-if="child.children" :folder="child"/>\
                <span v-else>{{child.name}}</span>\
            </li>\
        </ul>'

};

var inline_component = {

};

Vue.component('hello-world', {
  template: '#hello-world-template'
});

Vue.component('terms-of-service', {
  template: '\
    <div v-once>\
      尽管在 Vue 中渲染 HTML 很快，不过当组件中包含大量静态内容时，可以考虑使用 v-once 将渲染结果缓存起来\
    </div>\
  '
})


var vm = new Vue({
    el: '#vm',
    data: {
        items: [
            {text: 'one'},
            {text: 'two'},
            {text: 'three'},
        ],

        folder: {
            name: 'Top',
            children: [
                { 
                    name: 'A',
                    children: [
                        { name: 'A1' },
                        {
                            name: 'A2',
                            children:[
                                { name: 'A2_1' },
                                { name: 'A2_2' },
                                { name: 'A2_3' }
                            ]
                        },
                        { name: 'A3' }
                    ]
                },
                {
                    name: 'B',
                    children: [
                        { name: 'B1'},
                        { name: 'B2'},
                        { name: 'B3'}
                    ]
                }

            ]
        }

    },
    methods: {
    },
    components: {
        "my-component-1": my_component_1,
        "my-component-2": my_component_2,
        "myComponent4": my_component_4,
        //"MyComponent4": my_component_4,
        //"my-component-4": my_component_4,
        "my-component-5": my_component_5,
        "tree-folder-contents": tree_folder_contents,
        "inline-component": inline_component,

    }
});

