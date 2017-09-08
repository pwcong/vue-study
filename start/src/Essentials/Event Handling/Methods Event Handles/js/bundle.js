/**
 * Created by Pwcong on 2017/1/8.
 */

var vm = new Vue({
    el: '#vm',
    data: {
        count: 0
    },
    methods: {
        addCount: function() {
            this.count++;
        },
        showDialog: function(event){
        	alert(event.target.tagName);
        	alert(event.target.innerHTML);
        }
    }
});