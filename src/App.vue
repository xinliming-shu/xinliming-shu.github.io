<template>
    <div id="app">
        <!-- 顶部导航-->
        <div>
            <Topmenu></Topmenu>
            <router-view></router-view>
            <Footer></Footer>
        </div>

    </div>
</template>
<!--<script>-->
<!--    import Topmenu from './components/TopNavi/Topmenu'-->
<!--    export default {-->
<!--        name:app,-->
<!--        comments:{Topmenu},-->
<!--        data(){-->
<!--            return {}-->
<!--        },-->
<!--    };-->
<!--</script>-->
<style lang="scss">
    #app {
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
<script >

    import Topmenu from "./components/TopNavi/Topmenu.vue";
    import Footer from "./components/Footer";


    export default {
        components: {
            Footer,
            Topmenu
        }
    }
</script>