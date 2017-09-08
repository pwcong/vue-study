/**
 * Created by Pwcong on 2017/1/5.
 */

Vue.component("todo-item",{
	props: ['todo'],
	template: '<li todo>{{ todo.text}}</li>'
})

Vue.component("my-title",{
	props: ['title'],
	template: '<h1>{{title}}</h1>'
})

var vm = new Vue({
	el: '#vm',
	data:{
		myTitle: 'Hello Pwcong',
		list: [
			{text: 'one'},
			{text: 'two'},
			{text: 'three'},

		]
	}
})