<template>
    <div id="header">
        <h1 id="header-brand"><router-link :to="brand.to">{{ brand.text }}</router-link></h1>
        <div id="header-menu-list">
            <router-link v-for="menu in menuList" id="header-menu-item" :to="menu.to">
                <div>{{ menu.text }}</div>
            </router-link>
        </div>
    </div>
</template>
<style>
    #header{
        position: relative;
        width: 100%;
        height: 60px;
        background: #003E6C;
    }
    #header-brand{
        margin-top: 0;
        margin-left: 20px;
        line-height: 60px;
    }
    #header-brand a{
        color: white;
        text-decoration: none;
    }
    #header-menu-list{
        position: absolute;
        right: 0px;
        top: 0px;
    }
    #header-menu-item{
        text-decoration: none;
    }
    #header-menu-item div{
        float: left;
        color: white;
        padding: 20px;
        transition: color 0.3s, border-bottom 0.3s;
    }
    #header-menu-item div:hover{
        color: orange;
        border-bottom: 1px solid orange;
    }

</style>
<script>
    export default{
        props:{
            menuList: {
                type: Array,
                require: true
            },
            brand: {
                type: Object,
                require: true
            }
        }
    }
</script>