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
        <div>
            <p>{{carouselUrl.cloth_name}}</p>
            <p><span>{{carouselUrl.price}}</span><span>{{carouselUrl.sale_price}}</span></p>
        </div>
        <div>
            <p>详情</p>
            <div v-html="carouselUrl.instructions">
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
    div{
        img{
            width: 100%;
        }
    }
</style>