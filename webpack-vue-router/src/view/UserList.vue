<template>
    <div id="user-list-root">
        <transition appear appear-active-class="animated fadeIn">
            <button @click="addUser" class="user-list-button">Add User</button>
        </transition>
        <transition appear appear-active-class="animated fadeIn">
            <div id="user-list">
                <user-item v-for="user in userList" :user="user" :key="user.username"></user-item>
            </div>
        </transition>
    </div>
</template>
<style>

    #user-list-root{
        text-align: center;
        width: 100%;
    }
    #user-list{
        display: flex;
        justify-content: center;
        flex-flow: row wrap;
        width: 100%;
    }
    .user-list-button{
        border-style: none;
        border-radius: 5px;
        outline-style: none;
        width: 80px;
        height: 30px;
        color: white;
        margin: 10px;
        background-color: #FF9E00;
        transition: background-color 0.3s;
    }
    .user-list-button:hover{
        background-color: #FFC400;
    }
    .user-list-button:active{
        background-color: #FF6B00;
    }
</style>
<script>

    import { mapActions } from 'vuex'
    import UserItem from '../component/UserItem.vue'
    import { ADD_USER } from '../store/userlist.store.js'

    export default{
        computed: {
            userList(){
                return this.$store.state.userList.userList
            }
        },
        methods: mapActions({
            addUser: ADD_USER
        }),
        components:{
            UserItem
        }
    }
</script>
