/**
 * Created by Pwcong on 2017/1/11.
 */

/*
// @returns {VNode}
createElement(
    // {String | Object | Function}
    // 一个 HTML 标签，组件选项，或一个函数
    // 必须 Return 上述其中一个
    'div',
    // {Object}
    // 一个对应属性的数据对象
    // 您可以在 template 中使用.可选项.
    {
        // 和`v-bind:class`一样的 API
        'class': {
            foo: true,
            bar: false
        },
        // 和`v-bind:style`一样的 API
        style: {
            color: 'red',
            fontSize: '14px'
        },
        // 正常的 HTML 特性
        attrs: {
            id: 'foo'
        },
        // 组件 props
        props: {
            myProp: 'bar'
        },
        // DOM 属性
        domProps: {
            innerHTML: 'baz'
        },
        // 事件监听器基于 "on"
        // 所以不再支持如 v-on:keyup.enter 修饰器
        // 需要手动匹配 keyCode。
        on: {
            click: this.clickHandler
        },
        // 仅对于组件，用于监听原生事件，而不是组件使用 vm.$emit 触发的事件。
        nativeOn: {
            click: this.nativeClickHandler
        },
        // 自定义指令. 注意事项：不能对绑定的旧值设值
        // Vue 会为您持续追踨
        directives: [{
            name: 'my-custom-directive',
            value: '2'
            expression: '1 + 1',
            arg: 'foo',
            modifiers: {
                bar: true
            }
        }],
        // Scoped slots in the form of
        // { name: props => VNode | Array<VNode> }
        scopedSlots: {
            default: props => h('span', props.text)
        },
        // 如果子组件有定义 slot 的名称
        slot: 'name-of-slot'
            // 其他特殊顶层属性
        key: 'myKey',
        ref: 'myRef'
    },
    // {String | Array}
    // 子节点(VNodes). 可选项.
    [
        createElement('h1', 'hello world'),
        createElement(MyComponent, {
            props: {
                someProp: 'foo'
            }
        }),
        'bar'
    ]
)
*/

var getChildrenTextContent = function(children) {
    return children.map(function(node) {
        return node.children ?
            getChildrenTextContent(node.children) :
            node.text
    }).join('')
}

var anchored_heading = {
    render: function(createElement) {
        // create kebabCase id
        var headingId = getChildrenTextContent(this.$slots.default)
            .toLowerCase()
            .replace(/\W+/g, '-')
            .replace(/(^\-|\-$)/g, '')
        return createElement(
            'h' + this.level, [
                createElement('a', {
                    attrs: {
                        name: headingId,
                        href: '#' + headingId
                    }
                }, this.$slots.default)
            ]
        )
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
};

var my_anchored_heading = {
    render: function(createElement){
        var headingId = getChildrenTextContent(this.$slots.default)
            .toLowerCase()
            .replace(/\W+/g,"-")
            .replace(/(^\-|\-$)/g,"");
        return createElement(
            'h' + this.level, 
            [
                createElement('i',{
                    attrs: {
                        name: headingId
                    }
                },this.$slots.default),
                createElement('a',{
                    attrs: {
                        href: "#"
                    }
                },this.$slots.default)
            ]);

    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
}

var my_list = {

    render: function(createElement){

        // 所有组件树中的 VNodes 必须唯一。
        //这意味着，下面的 render function 是无效的：
        // var myNode = createElement('p',this.content);
        // return createElement('div', [myNode,myNode,myNode]);

        var myNodeList = Array.apply(
            null,
            {length: 5}
            ).map(function(){
                return createElement('p','Hi');
            });

        return createElement(
            'div',
            myNodeList
            );


    }

}


var vm = new Vue({

    el: '#vm',
    data: {
    },
    components: {
        "anchored-heading": anchored_heading,
        "my-anchored-heading": my_anchored_heading,
        "my-list": my_list
    }

});