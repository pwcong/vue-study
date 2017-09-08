/**
 * Created by Pwcong on 2017/1/8.
 */

var items = ['abc','bbb','abd','ccc','asd','vds'];

var vm = new Vue({
    el: '#vm',
    data: {

        items: items

    }
});

/*
Vue 包含一组观察数组的变异方法，所以它们也将会触发视图更新。

这些方法如下：

push()
pop()
shift()
unshift()
splice()
sort()
reverse()

*/