<template>
<div class="qualityControl">
  <div class="qualityControl_title col-xs-12">
      <input type="checkbox" id="checkAll" class="checkAll">
      <label for="checkAll">Quality control</label>
  </div>
  <div class="qualityControl_content col-xs-12">
    We check for quality issues and discrepancy and inform you
    before product leave China to save you time and money.
    Cost: 7% of product cast = $ 16.57 USD
  </div>

  <div class="qualityControl_saveLater col-xs-12">
    Save for Later
    <span class="iconfont">&#xe620;</span>
    <span>2</span>
  </div>
  <div style="clear: both;"></div>
  <div class="qualityControl_coupon col-xs-12" >
    Select coupon
    <span class="iconfont">&#xe620;</span>
    <span>1 coupons are selected</span>
  </div>
  <div style="clear: both;"></div>
</div>
</template>

<script>
    export default {
        name: "qualityControl"
    }
</script>

<style scoped lang="stylus">
  input[type='checkbox']{
    width: 20px;
    height: 20px;
    background-color: #fff;
    -webkit-appearance:none;
    border: 1px solid #c9c9c9;
    border-radius: 2px;
    outline: none;
    margin 0
  }
  input[type='checkbox']:checked{
    background-color: #000;
    color: #fff;
    font-size .1rem
  }
  input[type='checkbox']:checked::before{
    display: block;
    content: "\2714";
    text-align: center;
    font-size: 10px;
    color: white;
  }
  .qualityControl_title
    padding-left: 0.1rem;
    font-size .14rem
    line-height .28rem
    height .28rem
    background #FFF
    margin-top .1rem
  .qualityControl_title label
    margin-bottom: 0
  .qualityControl_content
    font-size .11rem
    color #666666
    line-height .15rem
    height .65rem
    padding .1rem .15rem .1rem .1rem
    background #FFF
  .qualityControl_saveLater, .qualityControl_coupon
    line-height .36rem
    height .36rem
    font-size .15rem
    padding-left 0.1rem
    margin-top .1rem
    background #FFF

  .qualityControl_saveLater span,  .qualityControl_coupon span
    float right
    padding 0 .03rem
  .qualityControl_coupon
    margin-bottom .1rem
</style>
