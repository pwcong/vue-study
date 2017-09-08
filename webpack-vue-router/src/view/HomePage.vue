<template>
    <div id="home-page">
        <transition appear appear-active-class="animated fadeIn">
            <p>Hello Pwcong</p>
        </transition>
    </div>
</template>
<style>
    #home-page{
        flex-flow: row wrap;
        display: flex;
        justify-content: center;
        width: 100%;
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
