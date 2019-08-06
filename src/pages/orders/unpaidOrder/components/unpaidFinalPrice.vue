<template>
  <div class="finalPrice">
    <div class="row">
      <div v-if="dataInfo.productCost > 0">
        <div class="col-xs-6 title">Product price:</div>
        <div class="col-xs-6 price text-right">{{dataInfo.productCost}} USD</div>
      </div>
      <div v-if="dataInfo.extra_freight > 0">
        <div class="col-xs-6 title">shipping upgrade:</div>
        <div class="col-xs-6 price text-right">{{dataInfo.extra_freight}} USD</div>
      </div>
      <div v-if="dataInfo.processingfee > 0">
        <div class="col-xs-6 title">processing fee:</div>
        <div class="col-xs-6 price text-right">{{dataInfo.processingfee}} USD</div>
      </div>
      <div v-if="dataInfo.insuranceFee > 0">
        <div class="col-xs-6 title">Insurance Cost:</div>
        <div class="col-xs-6 price text-right">{{dataInfo.insuranceFee}} USD</div>
      </div>
      <div v-if="dataInfo.service_fee > 0">
        <div class="col-xs-6 title">Sucharge:</div>
        <div class="col-xs-6 price text-right">{{dataInfo.service_fee}} USD</div>
      </div>
      <div v-if="dataInfo.vatbalance > 0">
        <div class="col-xs-6 title">vat price:</div>
        <div class="col-xs-6 price text-right">{{dataInfo.vatbalance}} USD</div>
      </div>
      <div  v-if="dataInfo.spCost > 0">
        <div class="col-xs-6 title">Standard shipping cost:</div>
        <div class="col-xs-6 price text-right">{{dataInfo.spCost}} USD</div>
      </div>
      <div  v-if="dataInfo.cashback > 0">
        <div class="col-xs-6 title">Cash back:</div>
        <div class="col-xs-6 price text-right">-{{dataInfo.cashback}} USD</div>
      </div>
      <div  v-if="dataInfo.couponamount > 0">
        <div class="col-xs-6 title">Discount Coupons:</div>
        <div class="col-xs-6 price text-right">-{{dataInfo.couponamount}} USD</div>
      </div>
      <div  v-if="dataInfo.coupon_discount > 0">
        <div class="col-xs-6 title">Coupon Discount:</div>
        <div class="col-xs-6 price text-right">-{{dataInfo.coupon_discount}} USD</div>
      </div>
      <div  v-if="dataInfo.firstdiscount > 0">
        <div class="col-xs-6 title">Shipping Discount:</div>
        <div class="col-xs-6 price text-right">-{{dataInfo.firstdiscount}} USD</div>
      </div>
      <div  v-if="dataInfo.grade_discount > 0">
        <div class="col-xs-6 title">Vip Discount:</div>
        <div class="col-xs-6 price text-right">-{{dataInfo.grade_discount}} USD</div>
      </div>
      <div  v-if="dataInfo.share_discount > 0">
        <div class="col-xs-6 title">Share Discount:</div>
        <div class="col-xs-6 price text-right">-{{dataInfo.share_discount}} USD</div>
      </div>
      <div>
        <div class="col-xs-6 title"></div>
        <div class="col-xs-6 price text-right"></div>
      </div>
      <div class="col-xs-12 text-right payamount">Pay Amount: <span class="payamount_price">{{dataInfo.payamount}} USD</span></div>
      <div class="col-xs-12 text-center payBtn">Pay Now {{dataInfo.payamount}} USD</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "finalPrice",
    props: {
      dataInfo: Object,
    }
  }
</script>

<style scoped lang="stylus">
.finalPrice
  .row
    height .3rem
    line-height .3rem
    .title, .price
      color #333
      font-size .14rem
  .payamount
    color #999
    font-size .13rem
    border-top 1px solid #ececec
    /*padding-bottom .1rem*/
    .payamount_price
      color #FF0000
  .payBtn
    background-color #F5A72C
    color #fff
    height .5rem
    line-height .5rem
    font-size .15rem
    font-weight bold

</style>
