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
        add(state,n){
            state.count+=n
        }
    },
    getters: {
        tenfoldCount: state => state.count*10
    }

})

export default store