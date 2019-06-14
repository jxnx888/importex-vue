<template>
<div class="personalInfo container">
  <div class="personalInfo_top ">
    <div class="row ">
    <div class="col-xs-10">
      <div class="row col-xs-12">
        {{personalInfo.email}}
      </div>
      <div class="row col-xs-12">
        Account Number: {{personalInfo.accountNumber}}
      </div>
    </div>
    <router-link
      tag="div"
      to="/myAccount/personalInfo"
      class="col-xs-2 iconfont text-right">
      &#xe65e;
    </router-link>
  </div>
  </div>
  <div class="row personalInfo_Money ">
    <div class="col-xs-6 text-center">
      <div class="">Accumulated Spending</div>
      <div class="spendMoney">0.0</div>
    </div>
    <div class="col-xs-6 text-center">
      <div class="">Balance(USD)</div>
      <div class="balanceMoney">0.0</div>
    </div>
  </div>
  <div class=" personalInfo_bottom row">
    <router-link
      tag="div"
      to="/shoppingCart"
      class="col-xs-12 margin-top">
      <div class="col-xs-10">
        <span class="iconfont">&#xe607;</span>
        Shopping Cart
      </div>
      <div class="col-xs-2 iconfont text-right">
        <span class="itemNum">3</span>&#xe620;
      </div>
    </router-link>
    <div class="col-xs-12  margin-top">
      <div class="col-xs-10">
        <span class="iconfont">&#xe65c;</span>
        Unpaid Order
      </div>
      <div class="col-xs-2 iconfont text-right">
         <span class="itemNum">3</span>&#xe620;
      </div>
    </div>
    <div class="col-xs-12">
      <div class="col-xs-10">
        <span class="iconfont">&#xe63d;</span>
        Current Order
      </div>
      <div class="col-xs-2 iconfont text-right">
         <span class="itemNum">3</span>&#xe620;
      </div>
    </div>
    <div class="col-xs-12">
      <div class="col-xs-10">
        <span class="iconfont">&#xe656;</span>
        Order History
      </div>
      <div class="col-xs-2 iconfont text-right">
         <span class="itemNum">3</span>&#xe620;
      </div>
    </div>

    <div class="col-xs-12  margin-top">
      <div class="col-xs-10">
        <span class="iconfont">&#xe68a;</span>
        My Coupons
      </div>
      <div class="col-xs-2 iconfont text-right">
         <span class="itemNum">3</span>&#xe620;
      </div>
    </div>
    <div class="col-xs-12">
      <div class="col-xs-10">
        <span class="iconfont">&#xe651;</span>
        My Favorites
      </div>
      <div class="col-xs-2 iconfont text-right">
         <span class="itemNum">3</span>&#xe620;
      </div>
    </div>

    <router-link
      tag="div"
      to="/contact"
      class="col-xs-12  margin-top margin-bottom">
      <div class="col-xs-10">
        <span class="iconfont" >&#xe699;</span>
        Customer Service
      </div>
      <div class="col-xs-2 iconfont text-right">
         &#xe620;
      </div>
    </router-link>
   </div>
</div>
</template>

<script>
    export default {
        name: "personalInfo",
      props:{
        personalInfo: Object
      },

    }
</script>

<style scoped lang="stylus">
.margin-top
  margin-top .1rem
.margin-bottom
  margin-bottom .1rem !important
.personalInfo
  color #fff
  background linear-gradient(to right,#BC985B,#E5C585)
  padding-top .2rem
  .personalInfo_top
    line-height .25rem
    font-size .13rem
    .col-xs-10
      padding-bottom .1rem
    .col-xs-2
      line-height .5rem
      padding-bottom .1rem
  .personalInfo_Money
    font-size .13rem
    color #999
    background #fff
    line-height .25rem
    .col-xs-6
      padding 0
    .col-xs-6:nth-of-type(1)
      border-right 1px solid #ececec
    .spendMoney
      color #000
      font-size .18rem
    .balanceMoney
      color #01a4ef
      font-size .18rem

  .personalInfo_bottom
    color #000
    background #eee
    .col-xs-12
      padding 0
      height .4rem
      line-height .4rem
      background #fff
      color #555
      border 1px solid #ddd
      margin-bottom -1px
      .iconfont
        color #959595
      .col-xs-2
        padding-left 0
      .itemNum
        display: inline-block;
        min-width: 10px;
        padding: 4px 7px;
        font-size: 12px;
        font-weight: 700;
        line-height: .12rem;
        color: #fff;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        background-color: #777;
        border-radius: 10px;
</style>
