/**
 * Created by Pwcong on 2017/1/8.
 */

var vm = new Vue({
    el: '#vm',
    methods: {
        say: function(word,event) {
            alert(word);
            alert(event.target.innerHTML);
        }
    }
});