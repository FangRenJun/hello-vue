<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper" >
                <div v-for="url in carouselUrl.wheel_images" class="swiper-slide" :key="url">
                    <img :src="url" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="item">
            <p>{{carouselUrl.cloth_name}}</p>
            <p><span>原价：{{carouselUrl.price/100}}</span><span>售价：{{carouselUrl.sale_price/100}}</span></p>
        </div>
        <div class="main">
            <p>详情</p>
            <div class="de">
                <div v-html="carouselUrl.instructions"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import swiper from 'swiper'

    export default {
        name: "Clothes",
        data(){
            return {
                carouselUrl: [],
            }
        },
        created () {
            this.getCarouselUrl();
        },
        methods: {
          getCarouselUrl() {
              axios.post( '/wxapi/measure_wxbk/cloth/get', { id: parseInt(this.$route.params.id) })
                  .then( res => {
                      if ( res.data.success ) {
                          this.carouselUrl = res.data.data;
                          this.$nextTick( () => this.initSwiper())
                      }
                  })
                  .catch( err => console.log(err))
          },
            initSwiper(){
                new swiper ('.swiper-container', {
                    autoplay: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true,
                    },
                })
            },
        },
    }
</script>

<style scoped lang="less">
    .swiper-wrapper{
        img{
            width: 100%;
        }
    }
    .item{
        p:first-child{
            text-align: center;
        }
        p{
            span:last-child{
                color: #a4925a;
            }
        }
    }
    .main{
        padding: 20px;
    }
    .de{
        width: 100%;
    }
    p{
        img{
            width: 100%;
        }
    }
</style>