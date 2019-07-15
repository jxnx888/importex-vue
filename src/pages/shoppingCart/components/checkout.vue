<template>
  <div class="finalPrice_bottom_checkout col-xs-12">
    <div class="col-xs-7">
      Grand Total:
      <span >$0</span>
    </div>
    <div class="col-xs-5 text-center">
      Proceed To Checkout
    </div>
  </div>
</template>

<script>
    export default {
        name: "checkout"
    }
</script>

<style scoped lang="stylus">
  .finalPrice_bottom_checkout
    position: fixed;
    bottom 0
    height .5rem
    line-height .5rem
    font-size .13rem
    background-color #fff
    padding 0
    -webkit-box-shadow: 0 -0.06rem 0.1rem rgba(28,28,28,.2)
    -moz-box-shadow: 0 -0.06rem 0.1rem rgba(28,28,28,.2)
    box-shadow: 0 -0.06rem 0.1rem rgba(28,28,28,.2)
    z-index 9
    .col-xs-7 span
      color #FF0101
      font-weight bold
    .col-xs-5
      background-color #000
      color #fff
      @media screen and (max-width: 320px)
        font-size .11rem
        padding 0 .05rem
</style>
