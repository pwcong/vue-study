/**
 * Created by Pwcong on 2017/1/7.
 */

var vm = new Vue({
	el: '#vm',
	data: {
		msg: '<strong>Hello World</strong>',
		msg_once: 'Hello Pwcong',
		p_class: 'active',
		isDisabled: false,
		count: 0

	},
	methods: {
		showOrHide: function() {
			this.isDisabled = ! this.isDisabled;
		}
	}
});
