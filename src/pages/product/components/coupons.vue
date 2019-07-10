<template>
    <div class="coupons ">
      <img  src="../../../../static/images/coupons.png" @click="showCoupons()">

      <div class="coupons_wrapper" v-if="showCoupon">
        <div class="coupons_content">
          <span class="iconfont" @click="hideCoupons()">&#xe621;</span>
          <img class="coupons_title" src="https://img.import-express.com/importcsvimg/webpic/img/m-index/coupons-01.png">
          <div class="coupons_20">
            <p class="coupons_notice1">$20 off on order over $200. ONE time only, coupon is valid by August 31 2019</p>
          </div>
          <div class="coupons_30">
            <p class="coupons_notice2">10% off coupon if you order from us again (maximum $30 off). Need to be two weeks after initial purchase. ONE time only</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "coupons",
    data(){
      return {
        showCoupon: false
      }
    },
    methods:{
      showCoupons(){
        this.showCoupon = true;
      },
      hideCoupons(){
        this.showCoupon = false;
      }
    }
  }
</script>

<style scoped lang="stylus">
  .coupons
    height .4rem
    width 100%
    line-height .4rem
    margin .1rem 0 0  0
    /*background-color #fff*/
    position: relative;
    @media screen and (max-width: 320px)
      height .35rem
  .coupons img
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
  .coupons_wrapper
    position: fixed;
    top 0
    bottom 0
    left 0
    right 0
    width 100%
    height 100%
    z-index 10
    background rgba(0, 0, 0, .6)
    .coupons_content
      position fixed
      top 0
      bottom 0
      left 0
      right 0
      width 95%
      height 3.1rem
      margin auto
      border-radius 10px
      background #fff
      z-index 11
      .iconfont
        position: absolute;
        right .1rem
        top 0
        font-size .25rem
        color #999
      .coupons_title
        position: absolute
        width 1rem
        height .51rem
        top -3.15rem
      .coupons_20,.coupons_30
        width 90%
        height 1.15rem
        margin 9% 5%
        background-size 100% 100%
        .coupons_notice1, .coupons_notice2
          width 70%
          color #fff
          font-size .14rem
          line-height .2rem
        .coupons_notice1
          padding .28rem 0 0 .15rem
        .coupons_notice2
          padding .15rem 0 0 .15rem
      .coupons_20
        background-image url('https://img.import-express.com/importcsvimg/webpic/img/m-index/coupons-430.png')
      .coupons_30
        background-image url('https://img.import-express.com/importcsvimg/webpic/img/m-index/coupons-03.png')

</style>
