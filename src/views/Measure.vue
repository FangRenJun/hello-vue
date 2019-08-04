<template>
    <div>
        <p>快来预约您的专属测量！</p>
        <p class="location">
            <i class="iconfont icon-xingzhuanggongnengtubiao"></i>
            <span>深圳市华强北九方购物中心三楼</span>
            <span>距您0.0m</span>
        </p>
        <div class="ad">
          <img src="../assets/store-img.6c228892.png" alt="">
          <div class="contact">
            <p>预约热线：4008000626</p>
            <p>或直接在公众号回复“量体”预约</p>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Measure"
    }
</script>

<style scoped lang="less">
    div{
        font-size: 14px;
        p{
            padding: .3rem 1rem;
        }
        .location{
            font-size: 1rem;
            position: relative;
            margin-bottom: 0.7rem;
            span:last-child{
                color: #999999;
                position: absolute;
                right: 5px;
            }
            i{
                color: blue;
            }
        }
        .ad{
            position: relative;
            margin-bottom: 6rem;
            img{
                width: 100%;
            }
            .contact{
                position: absolute;
                bottom: 2rem;
                left: 0;
                right: 0;
                text-align: center;
            }
        }

    }
    
</style>