/**
 * Created by Pwcong on 2017/1/9.
 */

var vm = new Vue({
	el: '#vm',
	data: {
		//由于 Vue 不允许动态添加根级响应式属性
		//所以你必须在初始化实例前声明根级响应式属性，哪怕只是一个空值
		message: 'Hello World'
	},
	template: '<h1>{{message}}</h1>'
});
