/**
 * Created by Pwcong on 2017/1/12.
 */

import Vue from 'vue'
import App from './view/App.vue'

/*
 new Vue({
 el: '#app',
 render: h => h(App)
 })
 */


// 根节点注入 store
import store from './store/'
new Vue({

    el: '#app',
    render: h => h(App),
    // 此处注入 store
    store

})

