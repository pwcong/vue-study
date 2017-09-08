/**
 * Created by Pwcong on 2017/1/8.
 */

var vm = new Vue({
    el: '#vm',
    data: {
    	text: '',
    	multilineText: '',
    	isChecked: false,
    	checkedNames: [],
    	pickedName: '',
    	selectedName: '',
    	multilineSelectedNames: [],
    	selectedOption: '',
    	options: [
    		1,
    		2,
    		3,
    		4,
    		5
    	]
    }
});
