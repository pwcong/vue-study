/**
 * Created by Pwcong on 2017/1/9.
 */

var vm = new Vue({
	el: '#vm',
	data: {
	    isActive: true,
	    isShown: true,
	    isEnable: true,
	    isOn: true,
	    isMe: true,
	    isOK: true
	},
	methods: {
		// beforeEnter: function(el) {
		// 	console.log("beforeEnter***"+el.innerHTML);
		// },
		// enter: function(el,done) {
		// 	console.log("enter***"+el.innerHTML);
		// 	//立即完成过度
		// 	done();
		// },
		// afterEnter: function(el) {
		// 	console.log("afterEnter***"+el.innerHTML);
		// },
		// enterCancelled: function(el) {
		// 	console.log("enterCancelled***"+el.innerHTML);
		// },
		// beforeLeave: function(el) {
		// 	console.log("beforeLeave***"+el.innerHTML);
		// },
		// leave: function(el,done) {
		// 	console.log("leave***"+el.innerHTML);
		// 	//done();
		// },
		// afterLeave: function(el) {
		// 	console.log("afterLeave***"+el.innerHTML);
		// },
		// leaveCancelled: function(el) {
		// 	console.log("leaveCancelled***"+el.innerHTML);
		// },
		beforeEnter: function (el) {
		    el.style.opacity = 0
		    el.style.transformOrigin = 'left'
	    },
	    enter: function (el, done) {
	    	Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
	     	Velocity(el, { fontSize: '1em' }, { complete: done })
	    },
	    leave: function (el, done) {
	     	Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
	    	Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
	    	Velocity(el, {
		        rotateZ: '45deg',
		        translateY: '30px',
		        translateX: '30px',
		        opacity: 0
		    },{complete: done })
	    }
	}
});
