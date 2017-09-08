/**
 * Created by Pwcong on 2017/1/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'

export const DEFAULT_WORD = '...'

Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        word: DEFAULT_WORD
    },
    mutations: {
        talk(state,payload){
            state.word = payload.word
        }
    },
    actions: {
       syncTalk({commit,state},payload){

           /*
           commit('talk',{
               word: DEFAULT_WORD
           })

           setTimeout(() => {
                commit('talk',payload)
           },1000)
           */

           /*
           返回 Promise 对象可以处理异步流程，可以自由组合触发其他 action
            */
           return new Promise((resolve, reject) => {
               commit('talk',{
                   word: DEFAULT_WORD
               })

               setTimeout(() => {
                   commit('talk',payload)
                   resolve(state.word)
               },1000)
           })

           /*
           下面是组合触发 action 示例

            actionA ({ commit }) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        commit('someMutation')
                        resolve()
                    }, 1000)
                })
            },
            actionB ({ dispatch, commit }) {
                return dispatch('actionA').then(() => {
                    commit('someOtherMutation')
                })
            }

            */

       }

    }

})

export default store