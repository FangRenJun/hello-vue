<template>
    <div>
        <header>
            <div class="img-box">
                <img src="../assets/logo.png" alt="">
            </div>
            <p>我</p>
        </header>
        <section class="main-bg">
            <div class="my-list">
                <span>我的订单</span><span>全部订单</span>
                <div class="flex">
                    <div class="list-item" v-for="(i, index) of 3" :key="index">
                        <img src="../assets/logo.png" alt="">
                        <p>未支付{{i}}</p>
                    </div>
                </div>
            </div>
            <div class="else">
                <div class="flex">
                    <div class="item" v-for="i in 5" :key="i+6">
                        <img src="../assets/logo.png" alt="">
                        <p>手机号{{i}}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Me"
    }
</script>

<style scoped lang="less">
    header{
        background: url(http://h5.measure.cloudream.com/img/me_bg.1df864a9.png) no-repeat;
        background-size: cover;
        height: 34vh;
        overflow: auto;
        vertical-align: center;
        text-align: center;
        p{
            color: white;
        }
    }
    .img-box{
        width: 15vh;
        height: 15vh;
        overflow: hidden;
        text-align: center;
        margin: auto;
        margin-top: 10vh;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    .main-bg{
        background: #f3f3f3;
        overflow: auto;
    }
    .my-list{
        margin-top: 10px;
        position: relative;
        background: white;
        span:first-child{
            padding:0  15px;
        }
        span:nth-of-type(2){
            position: absolute;
            right: 15px;
        }
    }
    .else{
        margin-top: 10px;
    }
    .flex{
        display: flex;
        margin-top: 7px;
        flex-wrap: wrap;
        background: white;
        img{
            width: 60%;
        }
        p{
                padding-bottom: 10px;
        }
        .list-item{
            width: 33.3%;
            box-sizing: border-box;
            text-align: center;
            position: relative;
            padding-bottom: 10px;
            &:after{
                content:' ';
                position: absolute;
                width: 1px;
                top: -60px;
                height: 200%;
                right: 0;
                background: #f3f3f3;
                transform: scaleY(.4);
            }
            &:last-child:after{
                display: none;
            }
        }
        .item{
            position: relative;
            width: 33.3%;
            box-sizing: border-box;
            text-align: center;
            &:before, &:after{
                content: ' ';
                position: absolute;
                transform: scale(.5);
                background: #f3f3f3;
                transform-origin: 0 0;
            }
            &:before{
                bottom: 0;
                width: 200%;
                height: 1px;
                left: 0;

            }
            &:after{
                right: 0;
                top: 0;
                width: 1px;
                height: 200%;

            }
        }

    }
</style>