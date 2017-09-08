/**
 * Created by Pwcong on 2017/1/13.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../view/HomePage.vue'
import VuexExample from '../view/VuexExample.vue'
import UserList from '../view/UserList.vue'
import UserInfo from '../view/UserInfo.vue'
import UserInfoSummary from '../view/UserInfoSummary.vue'
import UserInfoDetails from '../view/UserInfoDetails.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: HomePage },
    { path: '/vuex-example', component: VuexExample },
    { path: '/user-list', component: UserList },
    { path: '/user-info/:username', component: UserInfo,
        children:[
            { path: '', component: UserInfoSummary },
            { path: 'details', component: UserInfoDetails },
        ]
    },
]

const  router = new VueRouter({
    // （缩写）相当于 routes: routes
    routes,
    // 配置为 HTML5 History 模式，若这样配置，则浏览器 url 显示为正常的 url
    // mode: 'history'
})

export default router