
<template >
    <div style="margin-top: -30px;">
    <el-carousel   loop="true" interval="15000" trigger="click" height="34.5vw">
        <el-carousel__container style="background: #000000;">
            <el-carousel-item v-for="item in images" :key="item">
            <img   style="width: 100%;height: auto;" :src="item.url" @load="imgLoad"/>
            </el-carousel-item>
        </el-carousel__container>
    </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "Carousel",
        methods:{
          imgLoad(){
              this.$nextTick(()=>{
              this.bannerHeight=this.$refs.bannerHeight[0].height

              })
          }
        },
        // mounted(){
        //     this.init();
        //   this.imgLoad();
        //   window.addEventListener('resize',()=>{
        //       this.bannerHeight=this.$refs.bannerHeight[0].height
        //       this.imgLoad();
        //   },false)
        // },
        data() {
            return {
                // bannerHeight:"",
                images: [

                    {url:require("../assets/cancer.png")},
                    {url:require("../assets/shu_view.jpg")},
                    {url:require("../assets/shu_view2.jpg")},
                    {url:require("../assets/shu_view3.jpg")},



                ],
            };
        },
    };
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
    }
    .home-middle-top {
        display: block;
        width: 100%;
        height: 100%;
    }
    .bannerImg{
        position: relative;
        left: 50%;
        transform: translate(-50%);
    }

</style>