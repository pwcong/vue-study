/**
 * Created by Pwcong on 2017/1/5.
 */

var vm = new Vue({
    el: '#vm',
    data: {
        message: 'Hello Pwcong'
    },
    methods: {
        reverseMessage: function() {
            
            this.message = this.message.split("").reverse().join("");

        }
    }
});