/**
 * Created by Pwcong on 2017/1/7.
 */

var vm = new Vue({
	el: '#vm',
	data: {
		show: true,
		showDiv: true
	},
	methods: {
		onClick: function() {
			this.show = !this.show;
			this.showDiv = !this.showDiv;
		}
	}
});
