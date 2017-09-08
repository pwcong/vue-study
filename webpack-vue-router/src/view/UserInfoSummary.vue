<template>
    <div id="user-info-summary">
        <img :src="user.avatar">
        <h2>Username: {{ user.username }}</h2>
    </div>
</template>
<style>
    #user-info-summary{
        width: 100%;
        text-align: center;
    }
</style>
<script>

    import { DEFAULT_USER } from '../store/userlist.store.js'

    export default{
        data(){
            return{

            }
        },
        computed: {
            user(){
                return this.$store.state.userList.userList.filter( (user) => {
                        return user.username === this.$route.params.username
                    })[0] || DEFAULT_USER
            }
        },
        components:{

        }
    }
</script>
