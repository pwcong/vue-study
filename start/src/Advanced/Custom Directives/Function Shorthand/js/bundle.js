/**
 * Created by Pwcong on 2017/1/11.
 */

//大多数情况下，我们可能想在 bind 和 update 钩子上做重复动作，并且不想关心其它的钩子函数。可以这样写:
Vue.directive('background-color', function(el,binding) {
	el.style.backgroundColor = binding.value
});

var vm = new Vue({
	el: '#vm',
	data: {
		color: 'red'
	}
})