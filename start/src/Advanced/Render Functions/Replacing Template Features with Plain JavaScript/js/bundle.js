/**
 * Created by Pwcong on 2017/1/11.
 */

var my_ul = {
    render: function(createElement) {
        if (this.items.length) {
            return createElement('ul', this.items.map(function(item) {
                return createElement('li', item)
            }))
        } else {
            return createElement('p', 'No items found.')
        }
    },
    props: {
        items: {
            type: Array,
            required: true
        }
    }
};

var my_input = {
    render: function(createElement) {
        var self = this
        return createElement('input', {
            domProps: {
                value: self.value
            },
            on: {
                input: function(event) {
                    self.value = event.target.value
                }
            }
        })
    }
};


var vm = new Vue({
    el: '#vm',
    data: {
        items: [],
        msg: 'Hello'
    },
    components: {
        "my-ul": my_ul,
        "my-input": my_input
    },
    methods: {
        showInputValue: function() {
            alert(this.$refs.myInput.value);
        }
    }

});