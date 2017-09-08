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

import store from './store'
import router from './router'

new Vue({

    el: '#app',
    render: h => h(App),
    // 根节点注入 store
    store,
    // 根节点注入 router
    router

})

