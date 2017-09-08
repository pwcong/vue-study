<template>
    <div id="vuex-example">
        <transition appear appear-active-class="animated fadeIn">
            <counter key="counter"></counter>
        </transition>
        <transition appear appear-active-class="animated fadeIn">
            <adder key="adder"></adder>
        </transition>
        <transition appear appear-active-class="animated fadeIn">
            <reverser key="reverser"></reverser>
        </transition>
        <transition appear appear-active-class="animated fadeIn">
            <sync-talk key="sync-talk"></sync-talk>
        </transition>
    </div>

</template>
<style>
    #vuex-example{
        flex-flow: row wrap;
        display: flex;
        justify-content: center;
        width: 100%;
    }
</style>
<script>
    import Counter from '../component/Counter.vue'
    import Adder from '../component/Adder.vue'
    import SyncTalk from '../component/SyncTalk.vue'
    import Reverser from '../component/Reverser.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
            Counter,
            Adder,
            SyncTalk,
            Reverser
        }
    }
</script>
