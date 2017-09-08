/**
 * Created by Pwcong on 2017/1/12.
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--
    },
    getters: {
        doubleCount: state => 2*state.count
    }
})

export default store