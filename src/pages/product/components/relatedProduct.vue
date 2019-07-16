<template>
  <div class="relatedProduct" v-if="storesale.length >3">

      <div class="relatedProduct_Header">
        <span class="col-xs-8">Related Products From This Seller</span>
        <router-link
          tag="span"
          to="/searchDetail"
          class="col-xs-4 relatedProductViewMore">
          View more
          <span class="iconfont ">&#xe6b7;</span>
        </router-link>
      </div>

    <div style="clear: both;"></div>
    <div class="relatedProduct_slides">
      <swiper :options="swiperOption">
        <swiper-slide
         v-for="(item, index) in this.storesale"
         :key="index"
        >
          <router-link
          :to="/product/+item.goods_pid">
          <img class="swiper_img"
               v-lazy="item.goods_image">
          <p class="relatedProductName">{{item.goods_name}}</p>
          <div class="swiper_price">
            <span>$0.91</span>-<span>$1.18</span>
          </div>
          </router-link>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
<!--
        <swiper-slide>
          <img class="swiper_img"
               src="https://img.import-express.com/importcsvimg/coreimg/529011675740/2888284836_149379895.220x220.jpg">
          <p class="relatedProductName">Exclusive Child Hair Belt Baby Drill Flower Headband Bright Pink Baby Hair
            Belt</p>
          <div class="swiper_price">
            <span>$0.91</span>-<span>$1.18</span>
          </div>
        </swiper-slide>

        <swiper-slide>
          <img class="swiper_img"
               src="https://img.import-express.com/importcsvimg/coreimg/529011675740/2888284836_149379895.220x220.jpg">
          <p class="relatedProductName">Exclusive Child Hair Belt Baby Drill Flower Headband Bright Pink Baby Hair
            Belt</p>
          <div class="swiper_price">
            <span>$0.91</span>-<span>$1.18</span>
          </div>
        </swiper-slide>

        <swiper-slide>
          <img class="swiper_img"
               src="https://img.import-express.com/importcsvimg/coreimg/529011675740/2888284836_149379895.220x220.jpg">
          <p class="relatedProductName">Exclusive Child Hair Belt Baby Drill Flower Headband Bright Pink Baby Hair
            Belt</p>
          <div class="swiper_price">
            <span>$0.91</span>-<span>$1.18</span>
          </div>
        </swiper-slide>

        <swiper-slide>
          <img class="swiper_img"
               src="https://img.import-express.com/importcsvimg/coreimg/529011675740/2888284836_149379895.220x220.jpg">
          <p class="relatedProductName">Exclusive Child Hair Belt Baby Drill Flower Headband Bright Pink Baby Hair
            Belt</p>
          <div class="swiper_price">
            <span>$0.91</span>-<span>$1.18</span>
          </div>
        </swiper-slide>

        <swiper-slide>
          <img class="swiper_img"
               src="https://img.import-express.com/importcsvimg/coreimg/529011675740/2888284836_149379895.220x220.jpg">
          <p class="relatedProductName">Exclusive Child Hair Belt Baby Drill Flower Headband Bright Pink Baby Hair
            Belt</p>
          <div class="swiper_price">
            <span>$0.91</span>-<span>$1.18</span>
          </div>
        </swiper-slide>-->

      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: "relatedProduct",
    props:{
      oriData: {
        type: Object,
        default() {
        }
      }
    },
    data() {
      return {
        goodsInfo: {},
        storesale:[],
        swiperOption: {
          spaceBetween: 30,
          }
      }
    },
    methods:{
      getRelatedProduct(res) {
        let url = 'http://192.168.1.163:8085/getHotSale';
        var data = this.goodsInfo;
        // console.log(JSON.stringify(this.goodsInfo))
        var keyword = data.catNameMin;
        var shopID = data.sID;
        var productID = data.pid;
        var catname = data.category;
        var productName = data.pName;
        var uuid = data.goodsUuid;
        var pImg = data.coverPictureUrl;
        var catid= data.catid1;
        var pSprice=data.pSprice;
        var minorder =data.minOrder;
        this.$ajax.post(url,
          //pid 为传值的key
          this.$qs.stringify({shopid:shopID, catid:catid,pid:productID,catname:catname,pname:productName, uuid:uuid,pimage:pImg,pSprice:pSprice,minorder:minorder })
        )
          .then(this.getRelatedProductSucc)
          .catch(function (res) {
            console.log("Error, no data")
          })
      },

      getRelatedProductSucc(res) {
        const data = res.data;
        this.storesale = data.storesale;
      },
    },
    mounted(){
      // this.$nextTick(function() {
      //   this.getRelatedProduct();
      // })
    },
    watch: {
      oriData:function(newVal,oldVal){
        // console.log(newVal)
        this.goodsInfo = newVal;
        // console.log(JSON.stringify(this.goodsInfo));
        this.getRelatedProduct();
      }
    },
  }
</script>

<style scoped lang="stylus">
  .relatedProduct
    margin-top .1rem
    height 2.32rem
    background-color #fff
    .relatedProduct_Header
      padding-left 15px
      .col-xs-8
        padding:0
      .col-xs-4
        padding-right 0
    .relatedProduct_Header span
      line-height .41rem
      font-size .13rem
    /*.relatedProduct_Header span:last-child*/
    /*  line-height .41rem*/
    /*  font-size .07rem*/
    .relatedProductViewMore
      font-size .13rem
      font-weight bold
    .relatedProduct_slides
      background-color #fff
      .swiper-slide
        width 1.25rem !important
        /*height 1.25rem!important*/

        .swiper_img
          width 100%
          height: 100%

        .relatedProductName
          margin .05rem 0
          font-size .12rem
          overflow hidden
          white-space normal
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;

        .swiper_price
          color #c60f18
          font-size .15rem
</style>
