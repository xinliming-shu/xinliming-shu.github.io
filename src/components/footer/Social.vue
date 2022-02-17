<!-- 社交 -->

<template>
    <div >
        <a :style="{color: color} " :href="social['linkedin'] || 'https://www.shu.edu.cn/'" target="_blank"><el-image :src="require('@/assets/logo-white.png')"></el-image></a>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {mapGetters} from 'vuex';

    @Component({
        components: {
        },
        props: {
            color: String,
            size: Number,
        },
        computed: {
            ...mapGetters(['social']),
        },


    })

    export default class Social extends Vue {

    }
</script>

<style scoped lang="scss">
    .social {
        &>* {
            margin: 0.5em;
        }
    }
</style>

