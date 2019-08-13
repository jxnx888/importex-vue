<template>
    <div class="addressDetail">
      <div class="col-xs-12 chengeAddress_back">
        <div @click="handleGoBackClick">
          <span class="iconfont ">&#xe79b;</span>
          <p class="text-center">Delivery Address</p>
        </div>
      </div>
      <div class="changeAddress ">
        <div class="col-xs-12 header text-center">
          Please provide your shipping address
        </div>
        <div class="col-xs-3 title">Recipients:</div>
        <div class="col-xs-9 addressInput">
          <input class="input" type="text" name="" id="recipients">
        </div>
        <div class="col-xs-3 title">Street:</div>
        <div class="col-xs-9 addressInput">
          <input class="input" type="text" name="" id="street1">
          <input class="input" type="text" name="" id="street2">
        </div>
        <div class="col-xs-3 title">City:</div>
        <div class="col-xs-9 addressInput">
          <input class="input" type="text" name="" id="city">
        </div>
        <div class="col-xs-3 title">State:</div>
        <div class="col-xs-9 addressInput">
          <input class="input" type="text" name="" id="state">
        </div>
        <div class="col-xs-3 title">Country:</div>
        <div class="col-xs-9 addressInput">
          <select name="country" id="country" class="input">
            <option :value="item.id"
                    v-for="(item, index) in countryList"
                    :key="index"
                    class="input col-xs-8"
            >{{item.country}}</option>
          </select>
        </div>
        <div class="col-xs-3 title zipCode">Zip Code:</div>
        <div class="col-xs-9 addressInput">
          <input class="input" type="text" name="" id="zipcode">
        </div><div class="col-xs-3 title">Phone:</div>
        <div class="col-xs-9 addressInput">
          <input class="input" type="text" name="" id="phone">
        </div>
        <div class="cancelAndSave" style="clear: both;">
          <div class="cancel col-xs-6 text-center" @click="cancel">Cancel</div>
          <div class="save col-xs-6 text-center" @click="save">Save</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "addressDetail"
    }
</script>

<style scoped lang="stylus">
  .chengeAddress_back
    height .45rem
    line-height .45rem
    background-color #01A4EF
    position: fixed
    top 0
    left 0
    right 0
    z-index 5

  .chengeAddress_back span
    position: absolute;
    /*left 0.3rem*/
    font-size .2rem
    color #fff

  .chengeAddress_back a, .chengeAddress_back p
    color #fff
    font-size .15rem
  .changeAddress
    position: fixed
    top .45rem
    left 0
    bottom 0
    right 0
    background-color #fff
    .header
      font-size .14rem
      color #9FA3A7
      line-height .3rem
    .title
      font-size .14rem
      line-height .33rem
      margin-top .1rem
      @media screen and (max-width: 320px)
        font-size .12rem
    .zipCode
      padding-right .1rem
    .addressInput
      line-height .33rem
      margin-top .1rem
      .input
        width 100%
        height: 0.3rem;
        border-radius: 6px;
        border: 1px solid #e6e6e6;
        padding-left: 4%;
        background: #FAFAFA;
    .cancelAndSave
      line-height .5rem
      height .5rem
      color #fff
      padding-top .5rem
      .cancel
        background-color #b9b9b9
      .save
        background-color #F5A72C
</style>
