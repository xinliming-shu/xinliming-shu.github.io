<template>
    <div class="header" >
        <a href="http://localhost:8080/#Banner"> <el-image
                :src="require('@/assets/logo7.jpg')"

                style="margin-top: 30px;margin-left: 130px;width:auto;height: 50%">
        </el-image>
        </a>
                    <el-menu
                        :default-active="this.$route.path"
                        class="el-menu-demo"
                        style="height: 101px;margin-left: 40px"
                        mode="horizontal"
                        @select="handleSelect"
                         router
                        background-color="#ffffff"
                        text-color="#303133"

                        active-text-color="#0084ff">
                    <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name"
                                  style="margin-left:70px;
                                  margin-top:40px;
                                  margin-right: 30px;
                                  font-size: 23px;
                                  font-family: 华文细黑">
                    <template slot="title" style="height: 10%;">
                    <span > {{ item.navItem }}</span>
                     </template>
                    </el-menu-item>

                     </el-menu>




    </div>

</template>

<script>
    export default {
        data() {
            return {
                navList:[
                    {name:'/#Banner', navItem:'首页'},
                    {name:'/news',navItem:'学术动态'},
                    {name:'/group',navItem:'团队风采'},
                    {name:'/contact',navItem:'联系我们'},
                ]

            }
        },
        methods: {
            handleSelect(key, keyPath) {
            }
        }
    }
</script>

<style scoped>
    .el-menu-item{

        font-size: 25px;
        font-family: 华光仿宋_CNKI;
        text-align: center;
    }
    .el-menu-item.is-active {
        color: #ea5b2c !important;
        font-size: 25px ;
    }
    .el-menu--horizontal>.el-menu-item.is-active {
        border-bottom: 2px solid #ea5b2c !important;
    }
    .header {
        display: flex;
        width: auto;
    }
    .col {
        padding: 1rem;
    }

    .avatar {
        display: block;
        height: 50%;
        width: auto;

    }
</style>