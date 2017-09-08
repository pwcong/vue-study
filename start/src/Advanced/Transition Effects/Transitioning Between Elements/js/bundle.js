/**
 * Created by Pwcong on 2017/1/9.
 */

var my_li = {
	props: ['item'],
	template: '\
		<li>\
			<transition appear appear-active-class="animated fadeIn">\
				<p>{{item}}</p>\
			</transition>\
		</li>'
};

var vm = new Vue({
	el: '#vm',
	data: {
		items: [],
		show: true
	},
	components: {
		'my-li': my_li
	}
});
