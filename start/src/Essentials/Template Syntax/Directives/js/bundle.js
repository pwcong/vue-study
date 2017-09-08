/**
 * Created by Pwcong on 2017/1/7.
 */

var app = new Vue({
	el: '#vm',
	data: {
		active: true,
		url: 'http://www.pwcong.me'
	},
	methods: {
		showOrHide: function() {
			this.active = ! this.active;
		},
		onSubmit: function(){
			console.log("onSubmit");
		}
	}
});
