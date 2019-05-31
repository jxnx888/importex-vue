<template>
  <div class="relatedProduct" style="clear: both;">
    <div class="relatedProduct_Header">
      <span>Related Products From This Seller</span>
      <router-link
        tag="span"
        to="/"
        class="relatedProductViewMore">
        View more
        <span class="iconfont">&#xe6b7;</span>
      </router-link>
    </div>
    <swiper :options="swiperOption">
      <swiper-slide >
        <img class="swiper_img" src="https://img.import-express.com/importcsvimg/coreimg/529011675740/2888284836_149379895.220x220.jpg">
        <p class="relatedProductName">Exclusive Child Hair Belt Baby Drill Flower Headband Bright Pink Baby Hair Belt</p>
        <div class="swiper_price">
          <span >$0.91</span>-<span>$1.18</span>
        </div>
      </swiper-slide>

      <swiper-slide >
        <img class="swiper_img" src="https://img.import-express.com/importcsvimg/coreimg/529011675740/2888284836_149379895.220x220.jpg">
        <p class="relatedProductName">Exclusive Child Hair Belt Baby Drill Flower Headband Bright Pink Baby Hair Belt</p>
        <div class="swiper_price">
          <span >$0.91</span>-<span>$1.18</span>
        </div>
      </swiper-slide>

      <swiper-slide >
        <img class="swiper_img" src="https://img.import-express.com/importcsvimg/coreimg/529011675740/2888284836_149379895.220x220.jpg">
        <p class="relatedProductName">Exclusive Child Hair Belt Baby Drill Flower Headband Bright Pink Baby Hair Belt</p>
        <div class="swiper_price">
          <span >$0.91</span>-<span>$1.18</span>
        </div>
      </swiper-slide>

      <swiper-slide >
        <img class="swiper_img" src="https://img.import-express.com/importcsvimg/coreimg/529011675740/2888284836_149379895.220x220.jpg">
        <p class="relatedProductName">Exclusive Child Hair Belt Baby Drill Flower Headband Bright Pink Baby Hair Belt</p>
        <div class="swiper_price">
          <span >$0.91</span>-<span>$1.18</span>
        </div>
      </swiper-slide>

      <swiper-slide >
        <img class="swiper_img" src="https://img.import-express.com/importcsvimg/coreimg/529011675740/2888284836_149379895.220x220.jpg">
        <p class="relatedProductName">Exclusive Child Hair Belt Baby Drill Flower Headband Bright Pink Baby Hair Belt</p>
        <div class="swiper_price">
          <span >$0.91</span>-<span>$1.18</span>
        </div>
      </swiper-slide>

      <swiper-slide >
        <img class="swiper_img" src="https://img.import-express.com/importcsvimg/coreimg/529011675740/2888284836_149379895.220x220.jpg">
        <p class="relatedProductName">Exclusive Child Hair Belt Baby Drill Flower Headband Bright Pink Baby Hair Belt</p>
        <div class="swiper_price">
          <span >$0.91</span>-<span>$1.18</span>
        </div>
      </swiper-slide>

    </swiper>
  </div>
</template>

<script>
  export default {
    name: "relatedProduct",
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          // loop: true
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
.relatedProduct
  .relatedProduct_Header
    position: relative;
    .relatedProductViewMore
      position: absolute
      right 0
  .swiper-slide
    width 1.25rem!important
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
      -webkit-line-clamp:2;
      -webkit-box-orient: vertical;
    .swiper_price
      color #c60f18
      font-size .15rem
</style>
