<template>
    <div id="synctalk">
        <h2>{{ title }}</h2>
        <input type="text" v-model="word">
        <button class="synctalk-button" @click="syncTalk">Talk</button>
        <p id="synctalk-show">{{ syncWord }}</p>
    </div>
</template>
<style>

    #synctalk{
        width: 50%;
        border: 1px solid red;
        margin: 5px;
        padding: 10px;
        text-align: center;
    }
    .synctalk-button{
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

    .synctalk-button:hover{
        background-color: #FFC400;
    }
    .synctalk-button:active{
        background-color: #FF6B00;
    }

    #synctalk-show{
        font-size: 24px;
    }

</style>
<script>
    import store from '../store/synctalk.store.js'

    export default{
        data(){
            return{
                title: 'SyncTalk',
                word: ''
            }
        },
        computed: {
            syncWord(){
                return store.state.word
            }
        },
        methods: {

            /*
            前提是根节点注入 store

            ...mapActions([
                'syncTalk' // 映射 this.syncTalk() 为 this.$store.dispatch('syncTalk')
            ]),

            ...mapActions([
                talk: 'syncTalk' // 映射 this.talk() 为 this.$store.dispatch('syncTalk')
            ])

            */

            syncTalk(){
                /*
                store.dispatch('syncTalk',{
                    word: this.word
                })
                */

                store.dispatch('syncTalk',{
                    word: this.word
                }).then((word) => {
                    alert(word)
                })
            }
        }
    }
</script>
