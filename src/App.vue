<template>
    <div id="app">
        <!-- 顶部导航-->
        <div>
            <Topmenu></Topmenu>
            <router-view></router-view>
<!--            <banner></banner>-->
<!--            <Home></Home>-->
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
    import Home from "./views/Home.vue";
    import banner from "./components/Banner.vue";
    export default {
        components: {
            Footer,
            Topmenu,
            Home,
            banner
        }
    }
</script>