<template>
    <div class="content" id="papers">
        <!-- 标题-->
        <ModuleHeader :title="papers.header.title"/>
        <a-timeline>
            <a-timeline-item data-aos="fade-in" v-for="card in papers.cards" v-bind:key="card.title">
                <a-card class="papers-card" :bordered="true" style="width: 100%">
                    <template slot="title">


                    </template>
                    <vue-markdown data-aos="fade-in" style="font-family: 'Times New Roman';font-size:18px;line-height: 35px">{{card.md}}</vue-markdown>
                </a-card>
            </a-timeline-item>
        </a-timeline>

</div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import ModuleHeader from '@/components/module/ModuleHeader.vue';
    import {Module} from '@/api/user_interface';
    // tslint:disable-next-line:no-var-requires
    import VueMarkdown from 'vue-markdown';
    @Component({
        components: {
            ModuleHeader,
            VueMarkdown,
        },
        computed: {
            papers(): Module {
                return this.$store.getters.getModule('papers');
            },
        },
    })
    export default class About extends Vue {
    }
</script>

<style scoped lang="scss">
    @import '../styles/variable';

    .papers-card {
        .title {
            width: 100%;
            height: 10%;
            font-size: 25px;
            overflow: scroll;
            text-align: center;
            margin-bottom: 0px;
            font-family:微软雅黑;

        }
    }
</style>