/**
 * Created by Pwcong on 2017/1/10.
 */

var my_transition_group_demo = new Vue({
    el: '#my-transition-group-demo',
    data: {
        items: []
    }
});

var my_special_transition = {
    template: '\
    <transition\
      name="very-special-transition"\
      mode="out-in"\
      enter-active-class="animated fadeIn"\
      leave-active-class="animated fadeOut"\
      v-on:before-enter="beforeEnter"\
      v-on:after-enter="afterEnter"\
    >\
      <slot></slot>\
    </transition>\
  ',
    methods: {
        beforeEnter: function(el) {
            // ...
        },
        afterEnter: function(el) {
            // ...
        }
    }
};


var template_transition_demo = new Vue({
    el: '#template-transition-demo',
    data: {
        show: true
    },
    components: {
        "my-special-transition": my_special_transition
    }
});

