<template>
    <div id="user-info-details">
        <h3>Name: {{ user.details.name }}</h3>
        <h3>Birthday: {{ user.details.birthday }}</h3>
        <h3>Sex: {{ user.details.sex }}</h3>
        <h3>Email: {{ user.details.email }}</h3>
    </div>
</template>
<style>
    #user-info-details{
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
