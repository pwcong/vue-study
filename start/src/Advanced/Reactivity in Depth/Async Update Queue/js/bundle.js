/**
 * Created by Pwcong on 2017/1/9.
 */

Vue.component('example', {
  template: '<span @click="updateMessage">{{ message }}</span>',
  data: function () {
    return {
      message: 'not updated'
    }
  },
  methods: {
    updateMessage: function () {
      this.message = 'updated'
      console.log(this.$el.textContent) // => '没有更新'
      this.$nextTick(function () {
        console.log(this.$el.textContent) // => '更新完成'
      })
    }
  }
});

var vm = new Vue({
	el: '#vm',
	data: {
		message: '123'
	}
});


// vm.message = 'new message'; // 更改数据

// console.log(vm.$el.textContent); // '123'

// Vue.nextTick(function () {
// 	console.log(vm.$el.textContent); // 'new message'
// });
