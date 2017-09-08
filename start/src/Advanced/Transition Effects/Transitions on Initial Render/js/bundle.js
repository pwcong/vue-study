/**
 * Created by Pwcong on 2017/1/9.
 */

var my_component = {
	props: ['items'],
	template: '\
		<div>\
			<div v-for="item in items">\
				<transition\
					appear\
					appear-active-class="animated fadeIn">\
					<p>{{ item }}</p>\
				</transition>\
			</div>\
		</div>'
}

var items = (function(){
	var array = [];
	for(var i=0;i<30;i++){
		array.push("Hello "+i);
	}
	return array;
})();


var vm = new Vue({
	el: '#vm',
	data: {
		myComponent: "my-component",
		items: items
	},
	methods: {
		beforeAppear: function(el) {
			console.log("beforeAppear***"+el.innerHTML);
		},
		appear: function(el){
			console.log("appear***"+el.innerHTML);
		},
		afterAppear: function(el){
			console.log("afterAppear***"+el.innerHTML);
		}
	},
	components: {
		"my-component": my_component
	}
});
