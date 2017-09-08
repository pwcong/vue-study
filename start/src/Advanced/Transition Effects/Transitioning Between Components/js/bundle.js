/**
 * Created by Pwcong on 2017/1/10.
 */

var vm = new Vue({
  	el: '#vm',
  	data: {
    	view: 'v-a'
  	},
	components: {
    	'v-a': {
    		template: '<div>Component A</div>'
    	},
		'v-b': {
    		template: '<div>Component B</div>'
		}
	}
})