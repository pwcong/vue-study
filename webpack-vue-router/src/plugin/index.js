/**
 * Created by Pwcong on 2017/1/13.
 */

// Vuex 的 store 接受 plugins 选项，这个选项暴露出每次 mutation 的钩子。
// Vuex 插件就是一个函数，它接收 store 作为唯一参数
const plugin = store => {

    store.subscribe((mutation, state) => {

        // 每次 mutation 之后调用
        // mutation 的格式为 { type, payload }
        console.log(mutation)
    })

}

export default plugin