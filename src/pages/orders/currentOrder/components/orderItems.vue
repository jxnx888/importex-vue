<template>
    <div class="orderItems">
      <div class="row">
        <div class="col-xs-6 shipping_days_btn ">
<!--          <button class="btn">Add Back To Cart</button>-->
        </div>
        <div class="col-xs-6 text-right shipping_days"><span class="iconfont">&#xe60c;</span>  {{dataInfo.shipDays}} Days</div>
      </div>
      <div
        class="row items"
        v-for="(item, index) in orderDetail">

        <div class="col-xs-3 item_img">
          <img :src="item.goodsImg" alt="">
        </div>
        <div class="col-xs-9">
          <div class="row">
            <div class="col-xs-12 itemName">
             {{item.goodsName}}
            </div>
            <div class="col-xs-12 itemType">
              Item ID: {{item.goodId}}
              {{item.types}}
            </div>
            <div class="col-xs-12 itemPrice">
              <span class="price">${{item.goodsPrice}}</span>
              <span class="number">/{{item.goodsUnit}} x {{item.yourOrder}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "orderItems",
      props:{
        dataInfo:Object,
        orderDetail:Array,
      }
    }
</script>

<style scoped lang="stylus">
.orderItems
  .shipping_days_btn,.shipping_days
    color #666
    font-size .13rem
    line-height .4rem
    .btn
      height .28rem
      background: #c1c1c1;
      color #fff
      padding 0 12px
    .iconfont
      color #01a4ef
  .items
    background-color #f9f9f9
    padding .05rem 0 .1rem 0
    .item_check
      line-height .80rem
    .item_img
      position: relative;
      width .8rem
      height .8rem
    .item_img img
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      max-width: 100%;
      max-height: 100%;
    .itemName
      color #333
      line-height .15rem
      font-size .13rem
      overflow: hidden
      display: -webkit-box
      -ms-text-overflow: ellipsis
      text-overflow: ellipsis
      -webkit-line-clamp: 2
      line-clamp: 2
      -webkit-box-orient vertical
      white-space normal
    .itemType
      color #999
      font-size .11rem
      line-height .15rem
      margin-top .1rem
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    .itemPrice
      font-size .13rem
      line-height .28rem
      color #999
      .price
        color #FF0101

</style>
