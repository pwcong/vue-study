/**
 * Created by Pwcong on 2017/1/7.
 */

var vm = new Vue({
	el: '#vm',
	data: {
		color: 'orange',
		fontSize: 30,
		styleObject: {
			color: 'blue',
			fontSize: '24px'
		},
		fontStyle: {
			fontSize: '26px'
		},
		colorStyle: {
			color: 'green'
		},
		transform: 'rotate(90deg)'
	}
});
