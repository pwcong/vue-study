/**
 * Created by Pwcong on 2017/1/7.
 */

var vm = new Vue({
	el: '#vm',
	data: {
		name: 'Pwcong'
	},
	beforeCreate: function() {
		console.log('beforeCreate');	
	},
	created: function(){
		console.log("created");
	},
	beforeMount: function(){
		console.log("beforeMount");
	},
	mounted: function(){
		console.log("mounted");
	},
	beforeUpdate: function(){
		console.log("beforeUpdate");
	},
	updated: function(){
		console.log("updated");
	},
	beforeDestroy: function(){
		console.log("beforeDestroy");
	},
	destroyed: function(){
		console.log("destroyed");
	}


});