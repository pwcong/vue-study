/**
 * Created by Pwcong on 2017/1/5.
 */

var App = Vue.extend({

	template: '<p>{{word}} {{name}}</p>',
	data: function(){
		return {
			word: 'Hello',
			name: 'Pwcong'
		}
	}

});

new App().$mount("#vm");