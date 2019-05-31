<template>
  <div class="namePrice">
    <div class="freeShipping">
      <span>Free Shipping</span>
    </div>

    <div class="productName ">
      <div class="col-xs-10">
        <div class="productName_title">{{productName}}</div>
        <div class="productSKU">
          SKU:425425134
        </div>
      </div>
      <div class="col-xs-2 productShare">
        <span class="iconfont ">&#xe622;</span>
        <p>Share</p>
      </div>
    </div>

    <div class="productPriceList">
      <div
        class="col-xs-4"
        v-for="">
        <div class="productPrice">
          $19.59
        </div>
        <div class="productPiece">
          1 piece
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "namePrice",
    props: {

      productName: {
        type: String,
        default: 'No name'
      }
    },
    data() {
      return {}
    },
  }
</script>

<style scoped lang="stylus">
  .namePrice
    .freeShipping
      position: absolute
      top: 3.51rem
      z-index 9
      width .99rem
      height .24rem
      line-height: .24rem
      font-size .13rem
      text-align: center
      font-style: italic
      color rgba(255, 255, 255, 1)
      background #292929
    .productName
      .productName_title
        font-size .15rem
        font-weight 400
        color #333
        padding: .1rem 0
      .productSKU
        font-size .12rem
        color #999
        padding:  0 0 .1rem 0
      .productShare
        padding-top .12rem
      .productShare p
        font-size .13rem
        padding .12rem 0
      .productShare
        .iconfont
          font-size .3rem


</style>
