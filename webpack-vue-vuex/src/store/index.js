/**
 * Created by Pwcong on 2017/1/12.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import ReverserStore from './reverser.store'
import plugin from '../plugin'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        reverser: ReverserStore
    },
    plugins: [
        plugin
    ]

})

export default store

