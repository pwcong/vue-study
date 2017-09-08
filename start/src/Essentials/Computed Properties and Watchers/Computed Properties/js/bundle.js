/**
 * Created by Pwcong on 2017/1/7.
 */

var today = new Date();

var vm = new Vue({
	el: '#vm',
	data: {
		message: 'Hello Pwcong',
		firstName: 'Weicong',
		lastName: 'Peng'
	},
	computed: {
		computedReversedMessage: function() {
			return this.message.split("").reverse().join("");
		},
		computedTime: function(){
			return today.getSeconds();
		},
		fullName: {
			get: function(){
				return this.lastName + " " + this.firstName;
			},
			set: function(newValue){

				var names = newValue.split(" ");
				this.lastName = names[0];
				this.firstName = names[1];

			}
		}
	},
	methods: {
		methodsReversedMessage: function(){
			return this.message.split("").reverse().join("");
		},
		methodsTime: function(){
			return today.getSeconds();
		}
	},
	watch: {
		firstName: function(val){
			this.fullName = this.lastName + " " + val;
		},
		lastName: function(val){
			this.fullName = val + " " + this.firstName;
		}
	}
});
