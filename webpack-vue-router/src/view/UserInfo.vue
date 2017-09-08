<template>
    <div id="user-info-root">
        <div id="user-info-toolbar">
            <router-link :to="'/user-info/' + $route.params.username"><button class="user-info-button">简介</button></router-link>
            <router-link :to="'/user-info/' + $route.params.username + '/details'"><button class="user-info-button">详情</button></router-link>
        </div>
        <div id="user-info">
            <router-view></router-view>
        </div>
    </div>
</template>
<style>
    #user-info-root{
        width: 100%;
    }

    #user-info{
        display: flex;
        width: 100%;
        justify-content: center;
    }
    #user-info-toolbar{
        width: 100%;
        text-align: center;
    }
    .user-info-button{
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

    .user-info-button:hover{
        background-color: #FFC400;
    }
    .user-info-button:active{
        background-color: #FF6B00;
    }
</style>
<script>

    export default{
        data(){
            return{

            }
        },
        components:{

        }
    }
</script>
