<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div v-for="swiperUrl in swiperUrls" :key="swiperUrl.id" class="swiper-slide"><img  :src="swiperUrl.pitrue_url"  alt=""></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="icon" v-if="iconUrls.length > 0">
            <router-link :to="'/clothing-list?categoryBoxID=' + iconUrl.id" tag="div" v-for="iconUrl in iconUrls" :key="iconUrl.id">
                <img :src="iconUrl.icon_url" alt="">
                <p>{{iconUrl.box_name}}</p>
            </router-link>
        </div>
        <div class="recommend">
            <div class="recommend-list"  v-if="recommend.length > 0">
                <p>{{recommend[0].list_name}}</p>
                <div class="grid">
                    <div v-for="item in items" class="details"  :key="item.cloth_id">
                        <img :src="item.thumbnail1" alt="">
                        <div>
                            <p>{{item.cloth_name}}</p>
                            <p>￥{{item.sale_price/100}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Swiper from 'swiper'
    export default {
        name: "Custom",
        data() {
            return {
                swiperUrls: [],
                iconUrls: [],
                recommend: [],
                items: []
            }
        },
        created(){
            this.getSwiperUrl();
            this.getIconUrl();
            this.getRecommend();
            this.getItems()
        },
        updated(){
        },
        methods: {
            getSwiperUrl() {
                axios.post( '/wxapi/measure_wxbk/broadcast/gets', {})
                    .then( res => {
                        if(res.data.success) {
                            this.swiperUrls = res.data.data;
                            this.$nextTick( () => {
                            this.initSwiper()
                            })
                        }
                    })
                    .catch( err => console.log( err ))
            },
            initSwiper(){
                 new Swiper ('.swiper-container', {
                    autoplay: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true,
                    },
                })
            },
            getIconUrl() {
                axios.post( '/wxapi/measure_wxbk/categoriesbox/gets', {})
                .then( res => {
                    if(res.data.success) {
                        this.iconUrls = res.data.data
                    }
                })
                    .catch( err => console.log( err ))
            },
            getRecommend() {
                axios.post( '/wxapi/measure_wxbk/recommendedlist/gets', {})
                    .then( res => {
                        if( res.data.success ) {
                            this.recommend = res.data.data
                        }
                    })
                    .catch( err => console.log( err ))
            },
            getItems(){
                    axios.post( '/wxapi/measure_wxbk/recommendedlist/get', {id: 36})
                        .then( res => {
                            if( res.data.success ) {
                                this.items = res.data.data
                            }
                        })
                        .catch( err => console.log('获取items' + err))
            }
        }
    }
</script>

<style scoped lang="less">
    .swiper-wrapper{
        img{
            width: 100%;
        }
    }
    .icon {
        display: flex;
        justify-content: center;
        align-content: space-around;
        flex-wrap: wrap;
        text-align: center;
            div {
                width: 22%;
                padding: 5px 4px;
                    img {
                        width: 54px;
                        height: 54px;
                    }
                    p {
                        padding: 5px;
                        font-size: 12px;
                    }
                }
        }
    .recommend-list{
     p{
         text-align: center;
     }
        .grid{
            display: grid;
            padding: 0 10px;
            grid-template-columns: repeat(2, 48%);
            column-gap: 20px;

        }
        .details{
            p{
                text-align: start;
                padding: 2.5px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                &:last-child{
                    color: #a4925a;
                }
            }
            img{
                width: 100%;
            }
        }
    }
</style>