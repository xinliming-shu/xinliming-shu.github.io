<template lang="html">
    <body>
    <ul id='timeline' >
        <li class='work'>
            <input class='radio' id='work5' name='works' type='radio' checked>
            <div class="relative">
                <label for='work5'> </label>
                <span class='date'>2022年12月24日</span>
                <span class='circle'></span>
            </div>
            <div class='content'>
                <p>
                       辛立明教授入选国家海外高层次人才青年项目
                </p>
            </div>
        </li>

        <li class='work'>
            <input class='radio' id='work2' name='works' type='radio'>
            <div class="relative">
                <label for='work2'></label>
                <span class='date'>2021年12月14日</span>
                <span class='circle'></span>
            </div>
            <div class='content'>
                <p>
                    辛立明教授入选上海市领军人才
                </p>
            </div>
        </li>
    </ul>

    </body>
</template>

<script>
    export default {
        name: "News"
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

    h2 {
        margin: 3em 0 0 0;
        font-size: 1.5em;
        letter-spacing: 2px;
        text-transform: uppercase;

    }

    /* -------------------------------------
     * timeline
     * ------------------------------------- */
    #timeline {
        list-style: none;
        /*上右下左*/
        margin: 50px 0 150px 120px;
        padding-left: 30px;
        border-left: 8px solid #eee9dc;
    }
    #timeline li {
        margin-top: 130px;
        position: relative;
    }
    #timeline p {
        margin: 0 0 15px;
    }

    .date {
        margin-top: -15px;
        margin-left: -35px;
        top: 50%;
        left: -158px;
        font-size: 1.4em;
        line-height: 20px;
        position: absolute;
    }

    .circle {
        margin-top: -10px;
        top: 50%;
        left: -39px;
        width: 10px;
        height: 10px;
        background: #000000;
        border: 5px solid #3771ad;
        border-radius: 50%;
        display: block;
        position: absolute;
    }

    .content {
        max-height: 20px;
        padding: 50px 20px 0;
        border-color: transparent;
        border-width: 2px;
        border-style: solid;
        border-radius: 0.5em;
        position: relative;
        font-size: 15px;
    }
    .content:before, .content:after {
        content: "";
        width: 0;
        height: 0;
        border: solid transparent;
        position: absolute;
        right: 100%;
    }
    .content:before {
        border-right-color: inherit;
        border-width: 20px;
        top: 50%;
        margin-top: -20px;
    }
    .content:after {
        border-right-color: #000000;
        border-width: 17px;
        top: 50%;
        margin-top: -17px;
    }
    .content p {
        color: #000000;
        max-height: 0;
        text-align: justify;
    }

    label {
        font-size: 2.3em;
        position: absolute;
        z-index: 100;
        cursor: pointer;
        top: 20px;
        transition: transform 0.2s linear;
    }

    .radio {
        display: none;
        border-color: #4413af;
    }

    .radio:checked + .relative label {
        cursor: auto;
        transform: translateX(42px);

    }
    .radio:checked + .relative .circle {
        background: #f98262;
    }
    .radio:checked ~ .content {
        max-height: 180px;
        border-color: #85ee12;
        margin-right: 20px;
        transform: translateX(20px);
        transition: max-height 0s linear, border-color 0.5s linear, transform 0s linear;
    }
    .radio:checked ~ .content p {
        max-height: 200px;
        color: #000000;
        transition: color 0.3s linear 0.3s;
    }

    /* -------------------------------------
     * mobile phones (vertical version only)
     * ------------------------------------- */
    @media screen and (max-width: 767px) {
        #timeline {
            margin-left: 0;
            padding-left: 0;
            border-left: none;
        }
        #timeline li {
            margin: 50px 0;
        }

        label {
            width: 85%;
            font-size: 1.1em;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            display: block;
            transform: translateX(18px);
        }

        .content {
            padding-top: 45px;
            border-color: #eee9dc;
        }
        .content:before, .content:after {
            border: solid transparent;
            bottom: 100%;
        }
        .content:before {
            border-bottom-color: inherit;
            border-width: 17px;
            top: -16px;
            left: 50px;
            margin-left: -17px;
        }
        .content:after {
            border-bottom-color: #000000;
            border-width: 20px;
            top: -20px;
            left: 50px;
            margin-left: -20px;
        }
        .content p {
            font-size: 0.9em;
            line-height: 1.4;
        }

        .circle, .date {
            display: none;
        }
    }

</style>