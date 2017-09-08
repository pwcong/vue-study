<template>
    <div id="adder">
        <h2>{{ title }}</h2>
        <input type="text" v-model.number="number">
        <button class="adder-button" @click="add">+</button>
        <p id="adder-show">Count x 10: {{ tenfoldCount }}</p>

    </div>
</template>
<style>
    #adder{
        width: 50%;
        border: 1px solid red;
        margin: 5px;
        padding: 10px;
        text-align: center;
    }
    .adder-button{
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

    .adder-button:hover{
        background-color: #FFC400;
    }
    .adder-button:active{
        background-color: #FF6B00;
    }

    #adder-show{
        font-size: 24px;
    }
</style>
<script>

    import store from '../store/adder.store.js'

    export default {
        data(){
            return {
                number: 0,
                title: 'Adder'
            }
        },
        computed: {

            /*
            前提是根节点注入 store

            使用对象展开运算符将 getters 混入 computed 对象中

            ...mapGetters([
                'tenfoldCount' //
            ]),
            ...mapGetters({
                countX10: 'tenfoldCount'
            })

            */

            tenfoldCount(){
                return store.getters.tenfoldCount
            }

        },
        methods: {
            add(){
                store.commit('add', this.number)
            }
        }



    }

</script>
