<template>

    <router-link :to="user.to">
        <div class="user-item">
            <img :src="user.avatar">
            <span>{{ user.username }}</span>
        </div>
    </router-link>
</template>
<style>

    a{
        text-decoration: none;
    }
    .user-item{
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        background-color: #dedede;
        border-radius: 5px;
        height: 80px;
        transition: border 0.5s;
    }
    .user-item:hover{
        border: 1px solid orange;
    }
    .user-item img{
        height: 60px;
        width: 60px;
        border-radius: 30px;
    }
    .user-item span{
        color: black;
        font-size: 24px;
        margin-left: 20px;
    }

</style>
<script>

    export default{
        props: {
            user: {
                type: Object,
                require: true
            }
        }
    }
</script>
