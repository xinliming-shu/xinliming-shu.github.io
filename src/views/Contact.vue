<template lang="html">
    <html>

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport">
        <link href="index.css" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
    </head>
    <body class="body">
    <div class="contact-page">
<!--        <h2>Get in touch</h2>-->
        <div class="contact-info">
            <div class="item">
                <i class="icon fas fa-home"></i> 通讯地址：上海市宝山区上大路99号 上海大学计算机学院200444 东区15号楼813办公室
            </div>

            <div class="item">
                <i class="icon fas fa-envelope"></i> 电子邮箱：xinliming@shu.edu.cn
            </div>
            <div>
                <p>
                    <img src="../assets/map.png">
                </p>
            </div>
        </div>
    </div>
    </body>
    </html>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped lang="css">
    body {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 5%;
        font-size: 100%;
        font-family: "Times New Roman", sans-serif;
        color: #000000;
        background: rgba(93, 138, 173, 0);
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: cover;
        /*//把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。背景图像的某些部分也许无法显示在背景定位区域中。*/
    }

    .contact-page {
        width: 100%;
        max-width: 1400px;
        padding: 25px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
    }

    h2 {
        width: 100%;
        margin-bottom: 80px;
        text-transform: uppercase;
        font-size: 40px;
    }

    .contact-info,
    .contact-form {
        flex: 1;
    }

    .item {
        margin-bottom: 40px;
        font-size: 16px;
    }

    .item .icon {
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: skyblue;
        color: #fff;
        border-radius: 50%;
        margin-right: 5px;
    }

    .contact-form {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .textb {
        width: calc(50% - 10px);
        /* 每一个textb盒子的宽度始终保持父盒子宽度一半减去10px */
        height: 40px;
        background-color: black;
        border: none;
        color: #fff;
        padding: 20px;
        margin-bottom: 20px;
    }

    textarea {
        width: 100%;
        min-height: 200px;
        max-height: 400px;
        resize: vertical;
        /*//用户可调整元素的高度。*/
        background-color: black;
        border: none;
        color: #fff;
        padding: 20px;
        margin-bottom: 20px;
    }

    .btn {
        margin-left: auto;
        width: 120px;
        height: 40px;
        text-transform: uppercase;
        background-color: skyblue;
        border: none;
        border: 2px solid skyblue;
        transition: 0.3s linear;
        cursor: pointer;
    }

    .btn:hover {
        background-color: transparent;
        color: skyblue;
    }

    @media screen and (max-width: 800px) {
        .contact-page {
            max-width: 800px;
        }

        h2 {
            font-size: 40px;
            margin-bottom: 40px;
        }

        .contact-info,
        .contact-form {
            flex: 100%
        }

        .textb {
            width: 100%;
        }
    }

</style>