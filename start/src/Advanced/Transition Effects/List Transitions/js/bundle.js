/**
 * Created by Pwcong on 2017/1/10.
 */

var list_demo = new Vue({
    el: '#list-demo',
    data: {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nextNum: 10
    },
    methods: {
        randomIndex: function() {
            return Math.floor(Math.random() * this.items.length)
        },
        add: function() {
            this.items.splice(this.randomIndex(), 0, this.nextNum++)
        },
        remove: function() {
            this.items.splice(this.randomIndex(), 1)
        },
    }
});

var flip_list_demo = new Vue({
    el: '#flip-list-demo',
    data: {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    methods: {
        shuffle: function() {
            this.items = _.shuffle(this.items)
        }
    }
});

var list_complete_demo = new Vue({
    el: '#list-complete-demo',
    data: {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nextNum: 10
    },
    methods: {
        randomIndex: function() {
            return Math.floor(Math.random() * this.items.length)
        },
        add: function() {
            this.items.splice(this.randomIndex(), 0, this.nextNum++)
        },
        remove: function() {
            this.items.splice(this.randomIndex(), 1)
        },
        shuffle: function() {
            this.items = _.shuffle(this.items)
        }
    }
});


var sudoku_demo = new Vue({
    el: '#sudoku-demo',
    data: {
        cells: Array.apply(null, {
                length: 81
            })
            .map(function(_, index) {
                return {
                    id: index,
                    number: index % 9 + 1
                }
            })
    },
    methods: {
        shuffle: function() {
            this.cells = _.shuffle(this.cells)
        }
    }
});

var staggered_list_demo = new Vue({
    el: '#staggered-list-demo',
    data: {
        query: '',
        list: [{
            msg: 'Bruce Lee'
        }, {
            msg: 'Jackie Chan'
        }, {
            msg: 'Chuck Norris'
        }, {
            msg: 'Jet Li'
        }, {
            msg: 'Kung Fury'
        }]
    },
    computed: {
        computedList: function() {
            var vm = this
            return this.list.filter(function(item) {
                return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
            })
        }
    },
    methods: {
        beforeEnter: function(el) {
            el.style.opacity = 0
            el.style.height = 0
        },
        enter: function(el, done) {
            var delay = el.dataset.index * 150
            setTimeout(function() {
                Velocity(
                    el, {
                        opacity: 1,
                        height: '1.6em'
                    }, {
                        complete: done
                    }
                )
            }, delay)
        },
        leave: function(el, done) {
            var delay = el.dataset.index * 150
            setTimeout(function() {
                Velocity(
                    el, {
                        opacity: 0,
                        height: 0
                    }, {
                        complete: done
                    }
                )
            }, delay)
        }
    }
});