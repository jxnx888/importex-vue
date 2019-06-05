<template>
  <div class="relatedProduct">
    <div class="wrapper">
      <div class="relatedProduct_Header">
        <span class="col-xs-8">Related Products From This Seller</span>
        <router-link
          tag="span"
          to="/"
          class="iconfont col-xs-4 relatedProductViewMore">
          View more
         &#xe6b7;
        </router-link>
      </div>

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
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 15,
          loop: true
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .relatedProduct
    margin-top .1rem
    height 2.32rem
    background-color #fff
    .wrapper
      .relatedProduct_Header
        padding-left 15px
        .col-xs-8
          padding:0
      .relatedProduct_Header span
        line-height .41rem
        font-size .13rem
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
