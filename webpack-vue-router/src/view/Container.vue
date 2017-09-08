<template>
    <div id="container">
        <router-view></router-view>
    </div>

</template>
<style>
    #container{
        flex-flow: row wrap;
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 20px;
        margin-bottom: 40px;
    }
</style>
<script>

    export default {
        data(){
            return {
            }
        }
    }
</script>