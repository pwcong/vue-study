/**
 * Created by Pwcong on 2017/1/8.
 */

var my_component_1 = {
    template: '<p>Hello World!</p>'
};

var my_component_2 = {
    props: ['value'],
    template: '<li>{{ value }}</li>'
};

var my_component_3 = {
    template: '<p>{{ count }} <button @click="addCount">Add</button></p>',
    data: function() {
        return {
            count: 0
        }
    },
    methods: {
        addCount: function(){
            this.count++;
        }
    }
};

var vm = new Vue({
    el: '#vm',
    data: {
        items: ['one','two','three']
    },
    components: {
        'my-component-1': my_component_1,
        'my-component-2': my_component_2,
        'my-component-3': my_component_3
    }
});
