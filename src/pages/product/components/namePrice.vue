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
      <div class="col-xs-12">
        <div class="col-xs-4 productPricePiece">
          <div v-if="this.fullData.firstIntervalPrice"  class="productPrice">
            ${{this.fullData.firstIntervalPrice}}</div>
          <div v-if="this.fullData.firstIntervalQuantity" class="productPiece">
            {{this.fullData.firstIntervalQuantity}} pieces</div>
        </div>
        <div class="col-xs-4">
          <div v-if="this.fullData.secondIntervalPrice"  class="productPrice">
            ${{this.fullData.secondIntervalPrice}}</div>
          <div v-if="this.fullData.secondIntervalQuantity" class="productPiece">
            {{this.fullData.secondIntervalQuantity}} pieces</div>
        </div>
        <div class="col-xs-4">
          <div v-if="this.fullData.thirdIntervalPrice"  class="productPrice">
            ${{this.fullData.thirdIntervalPrice}}</div>
          <div v-if="this.fullData.thirdIntervalQuantity" class="productPiece">
            {{this.fullData.thirdIntervalQuantity}} pieces</div>
        </div>
      </div>
      <!--<div
        class="col-xs-4"
        v-for="(item, index) in productPriceList">
        <div class="productPrice">
          ${{item.price}}
        </div>
        <div class="productPiece">
          {{item.quantity}} pieces
        </div>
      </div>-->
      <div class="productPriceList_bottom">
        <div class="col-xs-4">
          Sold:{{productSold}}
        </div>
        <div class="col-xs-4">
          MOQ:{{productMOQ}}
        </div>
        <div class="col-xs-4">
          <p>&nbsp;</p>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: "namePrice",
    props: {
      productName: String,
      productPriceList: Array,
      productSold: String,
      productMOQ: String,
      fullData:Object
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped lang="stylus">
  .namePrice
    background-color: #fff
    /*padding-bottom 40%*/
    position: relative
    .freeShipping
      position: absolute
      bottom 100%
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
      padding-bottom: 25%
      background-color: #fff
      .productName_title
        font-size .15rem
        font-weight 400
        color #333
        padding: .1rem 0
        background-color: #fff
      .productSKU
        font-size .12rem
        color #999
        padding: 0 0 .1rem 0
        background-color: #fff
      .productShare
        padding-top .12rem
        background-color: #fff
      .productShare p
        font-size .13rem
        padding .12rem 0
        background-color: #fff
      .productShare
        .iconfont
          font-size .3rem


    .productPriceList
      padding-bottom 15%
      background-color #fff
      .productPricePiece
        padding 0
      .productPrice
        font-size .19rem
        font-weight bold
        color #333
        line-height .18rem
        padding: 0.05rem 0
      .productPiece
        font-size .12rem
        color #999
        line-height .13rem
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;

  .productPriceList_bottom
        .col-xs-4
          font-size .12rem
          line-height .12rem
          color #999
          padding .05rem .15rem
          background-color: #fff

</style>
