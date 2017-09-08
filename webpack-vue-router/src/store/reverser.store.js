/**
 * Created by Pwcong on 2017/1/12.
 */

export const DEFAULT_MSG = '* * *'

export default {

    state: {
        title: 'Reverser',
        msg: ''
    },
    mutations: {
        setMsg(state,payload){
            state.msg=payload.msg
        }
    },
    getters: {
        reverseMsg: state => state.msg.split("").reverse().join("")
    },
    actions: {
        setMsg({commit,getters}, payload){

            return new Promise((resolve,reject) => {
                commit('setMsg',{
                    msg: DEFAULT_MSG
                })
                setTimeout(() => {
                    commit('setMsg',payload)
                    resolve(getters.reverseMsg)
                },1000)

            })

        }
    }

}