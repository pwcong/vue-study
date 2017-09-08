<template>
    <div id="footer">
        <span>{{ something }}</span>
    </div>
</template>
<style>
    #footer{
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 0;
        left: 0;
        background-color: #303030;
        width: 100%;
        height: 40px;

    }
    #footer span{
        color: white;
    }
</style>
<script>
    export default {
        props: {
            something: {
                type: String,
                require: true
            }
        }
    }
</script>