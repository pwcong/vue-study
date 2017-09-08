/**
 * Created by Pwcong on 2017/1/7.
 */

var vm = new Vue({
	el: '#vm',
	data: {
		isActive: true,
		showDiv: true,
		type: 'C',
		loginType: 'username',
		loginType2: 'username'
	},
	methods: {
		changeStatus: function() {
			this.isActive = ! this.isActive;
			this.showDiv = ! this.showDiv;
		},
		changeLoginType: function(){
			this.loginType = this.loginType === 'username' ? 'email' : 'username';
		},
		changeLoginType2: function(){
			this.loginType2 = this.loginType2 === 'username' ? 'email' : 'username';
		}
	}
});
