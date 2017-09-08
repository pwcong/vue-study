/**
 * Created by Pwcong on 2017/1/5.
 */

var app = new Vue({
    el: '#app',
    data: {
        isActive: true
    },
    methods: {
        changeColor: function () {
            this.isActive = !this.isActive;
        }
    }
});