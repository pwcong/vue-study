/**
 * Created by Pwcong on 2017/1/7.
 */

var vm = new Vue({
	el: '#vm',
	data: {
		word: ""
	},
	filters: {
		decorate: function(word,param) {
			if(!word)
				return "No word here !";

			if(!param)
				return word.split("").join("_");

			return word.split("").join(param);
		},
		reverse: function(word){
			if(!word)
				return "No word here !";
			return word.split("").reverse().join("");
		}
	}
});
