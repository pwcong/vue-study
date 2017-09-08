<template>
    <div id="root">
        <my-header :menu-list="menuList" :brand="brand"></my-header>
        <container></container>
        <my-footer :something="something"></my-footer>
    </div>
</template>
<style>
    #root{
        font-family: 'Microsoft YaHei', sans-serif;
    }
</style>
<script>
    import MyHeader from './MyHeader.vue'
    import Container from './Container.vue'
    import MyFooter from './MyFooter.vue'
    export default {
        data(){
            return {
                menuList: [
                    { url: '#', text: 'Java'},
                    { url: '#', text: 'Android'},
                    { url: '#', text: 'Node.js'},
                    { url: '#', text: 'Unity3D'}
                ],
                brand: {
                    text: 'Pwcong',
                    url: '#'
                },
                something: 'Yeah! I\'m Pwcong.'
            }
        },
        components: {
            MyHeader,
            Container,
            MyFooter
        }
    }
</script>