<template>
    <div id="container">
        <counter></counter>
        <adder></adder>
        <sync-talk></sync-talk>
        <reverser></reverser>
    </div>

</template>
<style>
    #container{
        flex-flow: row wrap;
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 20px;
        background-color: #dedede;
    }
</style>
<script>

    import Counter from '../component/Counter.vue'
    import Adder from '../component/Adder.vue'
    import SyncTalk from '../component/SyncTalk.vue'
    import Reverser from '../component/Reverser.vue'
    export default {
        data(){
            return {
            }
        },
        components: {
            Counter,
            Adder,
            SyncTalk,
            Reverser
        }
    }
</script>