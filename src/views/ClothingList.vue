<template>
    <div>
        <div class="brand">
            <router-link  tag="span"
                          class="brand-item"
                          @click.native="getClothes"
                          :to="'/clothing-list?categoryBoxID='+ $route.query.categoryBoxID + '&supplier_id=0'"
                          >
                全部
            </router-link>
            <router-link  tag="span"
                          class="brand-item"
                          v-on:click.native="getClothes(brands.supplier_id)"
                          :to="'/clothing-list?categoryBoxID='+ $route.query.categoryBoxID + '&supplier_id='+ brands.supplier_id"
                          v-for="brands in brand.brand_list"
                          :key="brands.supplier_id">
                {{brands.supplier_name}}
            </router-link>
        </div>
        <div class="clothes-list">
            <router-link tag="div" :to="'/clothes/'+cloth.id " v-for="cloth in clothes" :key="cloth.id">
                <img :src="cloth.thumbnail1" alt="">
                <div class="introduce">
                    <p>{{cloth.cloth_name}}</p>
                    <p>￥{{cloth.sale_price/100}}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "ClothingList",
        data () {
            return {
                brand: [],
                clothes: [],
            }
        },
        created () {
            this.getBrand();
            this.getClothes();
        },
        methods: {
            getBrand () {
                axios.post( '/wxapi/measure_wxbk/categoriesbox/get', { categoriesbox_id : parseInt(this.$route.query.categoryBoxID) })
                    .then( res => {
                        if( res.data.success ) {
                            this.brand = res.data.data
                        }
                    })
                    .catch( err => console.log( err ))
            },
            getClothes (id = 0) {
                id = parseInt(id);
                axios.post( '/wxapi/measure_wxbk/categoriesbox/getcloths', { categoriesbox_id : parseInt(this.$route.query.categoryBoxID), supplier_id: id })
                    .then( res => {
                        if( res.data.success ) {
                            this.clothes = res.data.data
                        }
                    })
                    .catch( err => console.log( err ))
            },
        },
    }
</script>

<style scoped lang="less">
    .router-link-exact-active{
        border-bottom: 2px solid goldenrod;
    }
     .brand{
         padding: 8px;
         padding-bottom: 16px;
         white-space: nowrap;
         overflow-y: scroll;
         .brand-item{
            display: inline-block;
             padding: 0  15px 5px;
         }
        }
    .clothes-list{
        display: grid;
        grid-template-columns: repeat(2, 48%);
        row-gap: 10px;
        column-gap: 20px;
        padding: 0 10px;
        background: #f3f3f3;
        div{
            font-size: 0;
        }
        img{
            width: 100%;
            height: 200px;
            object-fit: fill;
        }
        .introduce{
            padding: 3px 1px;
            height: 61px;
            background: white;
            p{
                font-size: 14px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                padding: 5px 0;
                &:last-child{
                    color: #a4925a;
                }
            }
        }

    }
</style>