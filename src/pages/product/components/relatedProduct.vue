<template>
  <div class="relatedProduct">

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
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 15,
          loop: true
        }
      }
    },
    methods:{
      getRelatedProduct(res) {
        let url = 'http://192.168.1.163:8085/getHotSale';
        var data =   this.goodsInfo;
        console.log(JSON.stringify(this.oriData))
        var keyword = '';
        var shopID = data.goodsBean.sID;
        var productID = data.goodsBean.pid;
        var catname = data.goodsBean.category;
        var productName = data.goodsBean.pName;
        var uuid = data.goodsUuid;
        var pImg = data.coverPictureUrl;
        var catid= data.goodsBean.catid1;

        this.$ajax.post(url,
          //pid 为传值的key
          this.$qs.stringify({shopid:shopID, catid:catid})
        )
          .then(this.getRelatedProductSucc)
          .catch(function (res) {
            console.log("Error, no data")
          })
      },

      getRelatedProductSucc(res) {
        const data = res.data;
        console.log(JSON.stringify(data))
      },
    },
    mounted(){
      this.$nextTick(function() {
        this.getRelatedProduct();
      })
    },
    watch: {
      oriData:function(newVal,oldVal){
        // console.log(newVal)
        this.goodsInfo = newVal;
        console.log(  this.goodsInfo)
        let url = 'http://192.168.1.163:8085/getHotSale';
        var data =  this.goodsInfo;
        // console.log(JSON.stringify(this.oriData))
        var keyword = '';
        var shopID = data.goodsBean.sID;
        var productID = data.goodsBean.pid;
        var catname = data.goodsBean.category;
        var productName = data.goodsBean.pName;
        var uuid = data.goodsUuid;
        var pImg = data.coverPictureUrl;
        var catid= data.goodsBean.catid1;

        this.$ajax.post(url,
          //pid 为传值的key
          this.$qs.stringify({shopid:shopID, catid:catid})
        )
          .then(this.getRelatedProductSucc)
          .catch(function (res) {
            console.log("Error, no data")
          })
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
