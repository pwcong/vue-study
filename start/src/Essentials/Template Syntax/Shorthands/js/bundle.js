/**
 * Created by Pwcong on 2017/1/7.
 */

var vm = new Vue({
	el: '#vm',
	data: {
		className: "active"
	},
	methods: {
		onClick: function() {
			
			alert(this.className);
		}
	}

});
