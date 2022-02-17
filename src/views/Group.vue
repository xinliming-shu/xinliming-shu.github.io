<!--团队风采界面-->
<template>
    <a-layout class="global">
        <table class="group">
            <tr class="hang">
                <td class="lie">
                    <img src="../assets/Chushijie.jpg" style="height: 300px;">
                    <br><br>2021级硕士: 楚士杰<br>研究方向：智能机器人<br>csj2021@126.com
                </td>
                <td class="lie">
                    <img src="../assets/HuJiangTao.jpg" style="height: 300px;">
                    <br><br>2021级硕士: 胡江涛<br>研究方向：智能诊疗<br>Hjt1999@shu.edu.cn

                </td>

            </tr>
            <tr class="hang">
                <td class="lie">
                    <img src="../assets/JinChen.jpg" style="height: 300px;">
                    <br><br>2021级硕士: 金澄<br>研究方向： 智能机器人<br>邮箱
                </td>
                <td class="lie">
                    <img src="../assets/LiTong.jpg" style="height: 300px;">
                    <br><br>2021级硕士: 李通<br>研究方向：具身智能<br>lt_sdjn@163.com
                </td>
            </tr>
            <tr class="hang">
                <td class="lie">
                    <img src="../assets/WangYanYing.jpg" style="height: 300px;">
                    <br><br>2021级硕士: 王艳英<br>研究方向：具身智能<br>wyy_shu@163.com
                </td>
                <td class="lie">
                    <img src="../assets/Zhouxin.jpg" style="height: 300px;">
                    <br><br>2021级硕士: 周鑫<br>研究方向：智能机器人<br>zhou_xin@shu.edu.cn
                </td>
            </tr>
        </table>
    </a-layout>
</template>

<script>
    import Footer from "../components/Footer";
    import ALayoutSider from "ant-design-vue/es/layout/Sider";
    export default {
        components: {ALayoutSider, Footer},
        data() {
            return {};
        },
    };
</script>

<style>
    .global{
        margin-top: 25px;
        margin-bottom: 140px;
    }
    .group{
        /*border: 1px solid #3a8ee6;*/
        text-align: center;
        align-self: center;
        width: 80%;
        margin-bottom: 25px;
        margin-top: 25px;
        justify-content: center;
        border-collapse: separate;
        border-spacing: 10px 50px;
    }
    .hang{
        /*border: 1px solid #3a8ee6;*/
        margin-top: 20px;
        margin-bottom: 30px;
        text-align: center;
        font-size:20px;
        font-family: 微软雅黑;

    }
</style>