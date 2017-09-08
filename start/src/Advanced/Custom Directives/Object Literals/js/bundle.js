/**
 * Created by Pwcong on 2017/1/11.
 */

Vue.directive('demo', function (el, binding) {
  console.log(binding.value.color) // => "white"
  console.log(binding.value.text)  // => "hello!"
})

var vm = new Vue({
	el: '#vm',
	data: {
		
	}
})