/**
 * Created by Pwcong on 2017/1/11.
 */

var anchored_heading = {
    props: {
        level: {
            type: Number,
            required: true
        }
    },
    template: '#anchored-heading-template'
};

var new_anchored_heading = {
    render: function(createElement) {
        return createElement('h' + this.level,this.$slots.default);
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
}

var vm = new Vue({

    el: '#vm',
    data: {

    },
    components: {
        "anchored-heading": anchored_heading,
        "new-anchored-heading": new_anchored_heading
    }

});