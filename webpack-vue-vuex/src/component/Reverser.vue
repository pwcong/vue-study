<template>
    <div id="reverser">
        <h2>{{ title }}</h2>
        <input type="text" v-model="msg">
        <button class="reverser-button" @click="showReverseMsg">Show</button>
        <p id="reverser-show">{{ reverseMsg }}</p>
    </div>
</template>
<style>

    #reverser{
        width: 50%;
        border: 1px solid red;
        margin: 5px;
        padding: 10px;
        text-align: center;
    }

    .reverser-button{
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

    .reverser-button:hover{
        background-color: #FFC400;
    }
    .reverser-button:active{
        background-color: #FF6B00;
    }

    #reverser-show{
        font-size: 24px;
    }


</style>
<script>
    import {mapGetters} from 'vuex'

    export default {
        data(){
            return {
                msg: '',
                title: this.$store.state.reverser.title
            }
        },
        computed: mapGetters([
            'reverseMsg'
        ]),
        methods: {
            showReverseMsg(){
                this.$store.dispatch('setMsg',{
                    msg: this.msg
                }).then((reverseMsg) => {

                    alert(reverseMsg)

                })
            }

        }


    }


</script>
