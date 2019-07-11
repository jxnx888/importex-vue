<template>
  <div>
    <div class="freeShipping col-xs-12" @click="showShippingNotice()">
      Free Shipping to Canada via UPS
    </div>
    <div class="freeShipping_wrapper" v-if="showShippingTip">
      <div class="freeShipping_content">
        <span class="iconfont" @click="hideShippingNotice()">&#xe621;</span>
        <p>You may change shipping method and country in the shopping cart later.</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "freeShipping",
    data(){
      return {
        showShippingTip: false
      }
    },
    methods:{
      showShippingNotice(){
        this.showShippingTip = true;
      },
      hideShippingNotice(){
        this.showShippingTip = false;
      },
    }
  }
</script>

<style scoped lang="stylus">

  .freeShipping
    background #fff
    height .4rem
    width 100%
    line-height .4rem
    margin .1rem 0 0 0
  .freeShipping_wrapper
    position: fixed;
    top 0
    bottom 0
    left 0
    right 0
    width 100%
    height 100%
    z-index 999999999
    background rgba(0, 0, 0, .6)
    .freeShipping_content
      position fixed
      top 0
      bottom 0
      left 0
      right 0
      width 95%
      height 1rem
      margin auto
      border-radius 10px
      background #fff
      z-index 11
      .iconfont
        position: absolute;
        right .1rem
        top .1rem
        font-size .2rem
        color #999
    .freeShipping_content p
      padding: 30px 20px 0;
      font-size: 14px;
      line-height .2rem
      color: #666;
</style>
