/**
 * Created by Pwcong on 2017/1/7.
 */

var data = {
	name: 'Pwcong',
	age: 18
}

var vm = new Vue({
	el: '#vm',
	data: data
});

vm.$watch('name',function(newVal,oldVal) {
	console.log("New = " + newVal +", Old = " + oldVal);
})