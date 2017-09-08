/**
 * Created by Pwcong on 2017/1/13.
 */


export const ADD_USER = 'userlist/ADD_USER'

export const DEFAULT_USER = {
    to: '/user-info/' + 'username',
    username: 'username',
    avatar: 'http://pwcong.me/uploads/avatar.jpg',
    details: {
        name: 'User',
        birthday: '1970-1-1',
        sex: '男',
        email: 'user@user.com'
    }
}

const store = {

    state: {
        userList: [

        ]
    },
    mutations: {

        [ADD_USER](state,user){
            state.userList.push(user)
        }

    },
    actions: {

        [ADD_USER]({commit}){

            setTimeout(() => {

                let username =  'pwcong' + Math.round(Math.random()*1000)

                commit(ADD_USER,{

                    to: '/user-info/' + username,
                    username: username,
                    avatar: 'http://pwcong.me/uploads/avatar.jpg',
                    details: {
                        name: '彭伟聪',
                        birthday: '1996-2-1',
                        sex: '男',
                        email: 'pwcong@foxmail.com'
                    }

                })

            },1000)

        }

    }


}

export default store