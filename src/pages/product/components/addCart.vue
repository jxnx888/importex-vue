<template>
    <div class="addCart">
      <div class="col-xs-2 text-center">
        <div class="col-xs-12">
          <span class="iconfont wishlist"></span>
        </div>
        <div class="addCart_other col-xs-12">Wishlist</div>
      </div>
      <div class="col-xs-4 text-center">
        <a href="https://www.import-express.com/mapa/dropshippingdescription.html">
        <div class="col-xs-12">
        <span class="iconfont resellList"></span>
        </div>
        <div class="addCart_other col-xs-12">Add to Resell List</div>
        </a>
      </div>
      <div class="col-xs-6 text-center">
        <div class="addCart_toCart">ADD TO CART</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "addCart"
    }
</script>

<style scoped lang="stylus">
.addCart
  height .51rem
  line-height .51rem
  font-size .1rem
  font-weight bold
  text-align: center
  border-top 1px solid #DADADA
  border-bottom 1px solid #DADADA
  background-color #fff
  .col-xs-12
    line-height .15rem
  .col-xs-6
    padding 0
  .col-xs-2, .col-xs-4
    height .52rem
  .col-xs-2, .col-xs-4, .col-xs-12
    padding .02rem 0 0 0
  .col-xs-2 .iconfont, .col-xs-4 .iconfont, .col-xs-6 .iconfont
    display: inline-block
    height .23rem
    line-height .23rem
    width .23rem
    font-size .15rem
    border 1px solid #000
    -webkit-border-radius: .13rem
    -moz-border-radius: .13rem
    border-radius: .13rem
    opacity: .7;
  .addCart_other
    width 100%
    height .21rem
    color #666
    font-weight bold
    line-height .21rem
    padding 0 0
  .wishlist
    text-align center
    background-image: url('../../../../static/images/heart.png')
    background-size 50%
    background-repeat no-repeat
    background-position center
    opacity: .7;
  .resellList
    text-align center
    background-image: url('../../../../static/images/parachute.png')
    background-size 50%
    background-repeat no-repeat
    background-position center
    opacity: .7
  .addCart_toCart
    height .5rem
    line-height: .5rem
    color #fff
    background #000
    font-size .14rem
    font-weight bold

</style>
