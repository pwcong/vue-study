<template>
    <div id="counter">
        <h2>{{ title }}</h2>
        <button class="counter-button" @click="increment">+</button>
        <button class="counter-button" @click="decrement">-</button>
        <p id="counter-show">Count: {{ count }}</p>
    </div>
</template>
<style>

    #counter{
        width: 50%;
        border: 1px solid red;
        margin: 5px;
        padding: 10px;
        text-align: center;
    }

    .counter-button{
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

    .counter-button:hover{
        background-color: #FFC400;
    }
    .counter-button:active{
        background-color: #FF6B00;
    }

    #counter-show{
        font-size: 24px;
    }


</style>
<script>
    import store from '../store/counter.store.js'

    export default {
        data(){
            return {
                title: 'Counter'
            }
        },
        computed: {
            count(){
                return store.state.count
            }
        },
        methods: {

            /*
            前提是根节点注入 store

            ...mapMutations([
                'increment' // 映射 this.increment() 为 this.$store.commit('increment')
            ]),

            ...mapMutations([
                add: 'increment' // 映射 this.add() 为 this.$store.commit('increment')
            ])

            */


            increment(){
                store.commit('increment')
            },
            decrement(){
                store.commit('decrement')
            }
        }
    }

</script>
