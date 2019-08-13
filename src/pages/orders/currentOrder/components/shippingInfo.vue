<template>
    <div class="shippingInfo row">
      <div class="col-xs-5 shippingInfo_title">
        Contact Name:
      </div>
      <div class="col-xs-7 shippingInfo_Detail">
        {{shippingInfo.recipients}}
      </div>

      <div class="col-xs-5 shippingInfo_title">
        Phone:
      </div>
      <div class="col-xs-7 shippingInfo_Detail">
        {{shippingInfo.phone_number}}
      </div>

      <div class="col-xs-5 shippingInfo_title">
        Shipping Method:
      </div>
      <div class="col-xs-7 shippingInfo_Detail">
      {{dataInfo.shipMethod}}
      </div>

      <div class="col-xs-5 shippingInfo_title">
        Address:
      </div>
      <div class="col-xs-7 shippingInfo_Detail">
        {{shippingInfo.address}}
        <span v-if="shippingInfo.street">, {{shippingInfo.street}}</span>
        <span v-if="shippingInfo.address2">, {{shippingInfo.address2}}</span>
        <span v-if="shippingInfo.statename">, {{shippingInfo.statename}}</span>
        <span v-if="shippingInfo.country">, {{shippingInfo.country}}</span>
        <span v-if="shippingInfo.zip_code">, {{shippingInfo.zip_code}}</span>
      </div>
      <div class="col-xs-5 shippingInfo_title">
        Order Remark:
      </div>
      <div class="col-xs-7 shippingInfo_Detail">
        {{orderInfo.orderRemark}}
      </div>
      <div class="break_line">
        <img src="https://www.kidsproductwholesale.com/img/m-account/border-ten.png" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        name: "shippingInfo",
      props:{
        shippingInfo:Object,
        orderInfo:Object,
        dataInfo:Object,
      }
    }
</script>

<style scoped lang="stylus">
.shippingInfo
  .shippingInfo_title,.shippingInfo_Detail
    color #666
    line-height .18rem
    font-size .13rem
    min-height .18rem
    margin .05rem 0 0 0
  .shippingInfo_Detail:nth-of-type(1)
    color #333
    font-weight bold
  .break_line img
    width 100%
    height .05rem


</style>
