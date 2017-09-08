/**
 * Created by Pwcong on 2017/1/7.
 */

Vue.component('my-component',{
	template: '<p class="active">my-component</p>'
});

var vm = new Vue({
	el: '#vm',
	data: {
		isActive: false,
		isBig: false,
		activeClass: 'active',
		bigClass: 'big'
	},
	computed: {
		classObject: function(){
			return {
				active: this.isActive,
				big: this.isBig
			}
		}
	},
	methods: {
		changeStyle: function() {
			this.isActive = ! this.isActive;
			this.isBig = ! this.isBig;
		}
	}
});
