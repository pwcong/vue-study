/**
 * Created by Pwcong on 2017/1/8.
 */

 Vue.component("value-item",{
    props: ['title'],
    template: '<li> {{ title }} <button @click="$emit(\'remove\')">X</button></li>'
 });



var vm = new Vue({
    el: '#vm',
    data: {
    	todos: [
    		{text: 'one'},
            {text: 'two'},
    		{text: 'three'}

    	],
        msgs: [
            {text: 'hi', name: 'Pwcong'},
            {text: 'hello', name: 'Plping'},
            {text: 'hehe', name: 'Maxcon'}

        ],
        object: {
            name: 'Pwcong',
            age: 18,
            sex: 'boy'
        },
        items: [
            'A',
            'B',
            'C'
        ],
        valueList: [],
        value: ''
    },
    methods: {
        addValue: function() {
            this.valueList.push(this.value);
            this.value="";
        }
    }
});