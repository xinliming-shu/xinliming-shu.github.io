<!-- 首屏banner -->

<template>
<!--    <div class="banner" id="banner">-->
<!--        &lt;!&ndash; 加载层 &ndash;&gt;-->
<!--        <div class="bg back"><h1>加载中...</h1></div>-->
<!--        &lt;!&ndash; 脚贴 &ndash;&gt;-->
<!--&lt;!&ndash;        <div class="fork-me">&ndash;&gt;-->
<!--&lt;!&ndash;            <a class="fork-me-link" href="https://github.com/manerfan/vuesume/wiki" target="_blank">&ndash;&gt;-->
<!--&lt;!&ndash;                <span class="fork-me-text">Docs On GitHub</span>&ndash;&gt;-->
<!--&lt;!&ndash;            </a>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--        &lt;!&ndash; 背景层 &ndash;&gt;-->
<!--        <div data-aos="fade-in" class="bg"></div>-->
<!--        &lt;!&ndash; 内容层 &ndash;&gt;-->
<!--        <div data-aos="fade-in" class="desc">-->
<!--            <span class="avatar ant-avatar ant-avatar-circle ant-avatar-image">-->
<!--                <img draggable="false" src="../assets/avatar.jpg">-->
<!--            </span>-->
<!--            <div>-->
<!--                <h1>{{banner.title}}</h1>-->
<!--                <h3 class="typer white">-->

<!--                    <vue-typer :text="banner.desc" :type-delay='200' eraseStyle='select-all'></vue-typer>-->
<!--                </h3>-->
<!--            </div>-->
<!--        </div>-->

    <el-main >
        <Carousel>
        </Carousel>
    </el-main>


</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {mapGetters} from 'vuex';

    // tslint:disable-next-line:no-var-requires
    import {VueTyper} from 'vue-typer';
    import Carousel from "@/components/Carousel.vue";

    @Component({
        components: {
            Carousel,
        }
    })
    export default class Banner extends Vue {
    }
</script>

<style scoped lang="scss">
    @import '../styles/variable';
    @import '../styles/fork';

</style>
