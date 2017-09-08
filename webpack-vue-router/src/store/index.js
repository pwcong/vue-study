/**
 * Created by Pwcong on 2017/1/12.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import plugin from '../plugin'

import ReverserStore from './reverser.store'
import UserListStore from './userlist.store'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        reverser: ReverserStore,
        userList: UserListStore
    },
    plugins: [
        plugin
    ]


})

export default store

