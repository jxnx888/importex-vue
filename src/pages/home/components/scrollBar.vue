<template>
  <div class="scrollBarSwiper">

    <!-- swiper -->
    <div class="wrapper">
      <swiper :options="swiperOption" v-if="showSwiper">
        <swiper-slide
          v-for="item of list"
          :key="item.id">
          <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>

        <!-- Optional controls -->
        <!--<div class="swiper-pagination" slot="pagination"></div>-->
        <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
        <!--<div class="swiper-button-next" slot="button-next"></div>-->
        <div class="swiper-scrollbar"   slot="scrollbar"></div>

      </swiper>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'scrollBar',
    props: {
      list: Array
    },
    data() {
      return {
        swiperOption: {
          scrollbar: {
            el: '.swiper-scrollbar',
            clickable: true
          },
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
            spaceBetween: 30,
            speed: 1000,
            centeredSlides: true,
          }
        }
    },
    computed:{
      showSwiper(){
        return this.list.length
      }
    }
  }
</script>

<style scoped lang="stylus">
  .wrapper >>> .swiper-scrollbar-drag //穿透到原组件修改样式，直接修改会被覆盖
    background rgba(245,167,44,1)
    height 50%

  .scrollBarSwiper
    padding-top .83rem
    .wrapper
      width: 100%
      height: 0
      overflow: hidden
      /*930:572*/
      padding-bottom: 50%
      background-color: #fff
      .swiper-slide
        position: relative;
        width: 100%
        height: 0
        padding-bottom 50%
        .swiper-img
          width 100%
          /*height 1.8rem*/
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: 0 auto;
          max-width: 100%;
          max-height: 100%;
      .swiper-scrollbar
        left 0
        bottom 10px
</style>
