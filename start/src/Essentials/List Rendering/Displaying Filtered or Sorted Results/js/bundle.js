/**
 * Created by Pwcong on 2017/1/8.
 */

var items = [1,4,5,6,8,12,13,14];

var vm = new Vue({
    el: '#vm',
    data: {

        items: items

    },
    computed: {

    	resultItems: function() {
    		return items.filter(function(item){
    			return item%2==0;
    		});
    	}
    	
    },
    methods: {
    	checkItems: function(items){
    		return items.filter(function(item){
    			return item%2==0;
    		});
    	}
    }
});
