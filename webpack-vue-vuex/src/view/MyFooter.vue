<template>
    <div id="footer">
        <p>{{ something }}</p>
    </div>
</template>
<style>
    #footer{
        background-color: #303030;
        text-align: center;
        width: 100%;

    }
    #footer p{
        margin-top: 0;
        color: white;
        padding: 10px;
        margin-bottom: 0
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