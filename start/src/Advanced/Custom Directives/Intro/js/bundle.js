/**
 * Created by Pwcong on 2017/1/11.
 */

Vue.directive('focus', {
    inserted: function(el) {
        el.focus();
    }
});

var vm = new Vue({

    el: '#vm',
    data: {

    },
    components: {
    },
    directives: {
        "my-focus": {
            inserted: function(el){
                el.focus();
            }
        }
    }

});