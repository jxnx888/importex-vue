<template>
<div class="notificationSwiper">
  <div class="col-xs-1">
    <img class="" src="https://img.import-express.com/importcsvimg/webpic/img/wh89/index/member_speaker.png" alt="">
  </div>
  <swiper :options="swiperOption">
    <swiper-slide class="notification_slide">
      <span class="notification_tips">Product price is further reduced storewide.
        <em>3-1-2019</em></span></swiper-slide>
    <swiper-slide class="notification_slide">
      <span class="notification_tips">Product search is improved with much better precision
        <em>4-2-2019</em></span></swiper-slide>
  </swiper>
</div>
</template>

<script>
    export default {
        name: "notificationSwiper",
      data() {
        return {
          swiperOption: {
            direction: 'vertical',
            height: 40,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            loop:true,
            autoplay(val) {
            }
          }
        }
      }
    }
</script>

<style scoped lang="stylus">
  .wrapper >>> .swiper-wrapper //穿透到原组件修改样式，直接修改会被覆盖
    height .4rem
  .container >>> .swiper-container
    height .4rem

.notificationSwiper
  height .4rem
  overflow: hidden;
  .col-xs-1
    height .4rem
    width .4rem
    line-height .4rem
  .notification_slide
    height .4rem
    line-height .4rem
    .notification_tips
      font-size .13rem
      height .4rem
    .notification_tips em
      color #F55A2A
</style>
