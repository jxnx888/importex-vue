<template>
  <div class="topSwiperWrapper">
    <!--    //主swiper-->
    <div class="wrapperTop text-center">
      <swiper :options="swiperOptionTop" ref="swiperTop">
        <swiper-slide
          v-for="(item, index) in productImg"
          :key="index">
          <img
            class="swiper-img"
            :src="item"
            @click="handleGalleryClick()">
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination swiper-pagination-fraction" slot="pagination"></div>
      </swiper>
    </div>
    <!--    //点击后的全页swiper-->
    <div class="wrapperBottom" @click="handleGalleryClose()" v-show="showGallery">

            <div class="wrapper">
              <swiper
                :options="swiperOptionThumbs"
                ref="swiperThumbs" class="gallery-thumbs" >
                <swiper-slide
                  v-for="(item, index) in productImg"
                  :key="index"
                >
                  <img class="gallary-img" :src="item" />
                  <!-- <p>{{index}}</p> -->
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
    </div>

    <!--    <open-gallery-->
    <!--      :index="this.index"-->
    <!--      :imgs="productImg"-->
    <!--      v-show="showGallery"-->
    <!--      :data-hash="'slide='+index"-->
    <!--      @close="handleGalleryClose"-->
    <!--    ></open-gallery>-->
  </div>
</template>

<script>
  import openGallery from '@/common/gallery/Gallery';
  import merge from 'webpack-merge';

  export default {
    name: "topSwiper",
    props: {
      // productInfo: Array,
      productImg: Array
    },
    components: {
      openGallery
    },
    data() {
      return {
        showGallery: false,
        index: '',
        swiperOptionTop: {
          //显示导航数字
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
          spaceBetween: 0,
          loop: true,
          loopedSlides: 5, //looped slides should be the same
          centeredSlides: true,
        },
        swiperOptionThumbs: {
          spaceBetween: 10,
          slidesPerView: 4,
          touchRatio: 0.2,
          loop: true,
          loopedSlides: 5, //looped slides should be the same
          centeredSlides: true,
          slideToClickedSlide: true,
        }
      }
    },
    methods: {
      handleGalleryClick() {
        this.showGallery = true;
        // this.$router.push({
        //   query:merge(this.$route.query,{'slide': index })
        // })
        // console.log(index)
      },
      handleGalleryClose() {
        this.showGallery = false;
      },


    },
    created() {
      // console.log(JSON.stringify(this.productInfo.url))
    },
    mounted() {

      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper;
        const swiperThumbs = this.$refs.swiperThumbs.swiper;
        swiperTop.controller.control = swiperThumbs;
        swiperThumbs.controller.control = swiperTop
      })
    },
    watch: {},
  }
</script>

<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background-color: #fff
  .wrapperTop >>> .swiper-pagination-fraction
    width: .4rem;
    height: .2rem
    line-height: .2rem
    font-size: .10rem
    color #fff
    background: rgba(0,0,0,1)
    border-radius: .1rem;
    opacity: .3;
    left unset
    right .2rem

  .topSwiperWrapper
    width: 100%
    height: 0
    overflow: hidden
    /*930:572*/
    padding-bottom: 100%
    background-color: #fff
    /*防止图片未加载 出现文字抖动*/

    .wrapperTop
    .swiper-slide
      position: relative;
      width: 100%
      height: 0
      padding-bottom 100%

      .swiper-img
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        max-width: 100%;
        max-height: 100%;

    .wrapperBottom
      display: flex
      flex-direction: column
      justify-content: center
      z-index: 99
      position: fixed
      left: 0
      right: 0
      top: 0
      bottom: 0
      background: #000

      .wrapper
        height: 0
        width: 100%
        padding-bottom: 100%

        .swiper-slide
          position: relative;
          width: 100% !important
          margin-right 0 !important

        .gallary-img
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          max-width: 100%;
          max-height: 100%;

        .swiper-pagination
          color: #fff
          bottom: -1rem
</style>
