<template>
<div class="balance container">
  <div class="balance_back">
    <div @click="handleGoBackClick">
      <span class="iconfont ">&#xe79b;</span>
      <p class="text-center">Balance(USD)</p>
    </div>
  </div>
  <router-link tag="div" to="/myAccount/personalInfo/balance/recharge" class="row balance_content index_0">
    <div class="col-xs-6 title">
      Recharge
    </div>
    <div class="col-xs-6 text-right iconfont">&#xe620;</div>
  </router-link>
  <div class="row balance_content">
    <div class="col-xs-6 title">
      Withdraw
    </div>
    <div class="col-xs-6 text-right iconfont">&#xe620;</div>
  </div>
  <div class="row balance_content">
    <div class="col-xs-6 title">
      Commission
    </div>
    <div class="col-xs-6 text-right iconfont">&#xe620;</div>
  </div>
  <div class="row balance_content">
    <div class="col-xs-6 title">
      Transaction
    </div>
    <div class="col-xs-6 text-right iconfont">&#xe620;</div>
  </div>
  <div class="row balance_content">
    <div class="col-xs-6 title">
      Refund List
    </div>
    <div class="col-xs-6 text-right iconfont">&#xe620;</div>
  </div>
</div>
</template>

<script>
    export default {
        name: "balance",
      methods:{
        handleGoBackClick() {
          this.$router.go(-1);
        },
      }
    }
</script>

<style scoped lang="stylus">
.balance
  background-color #f7f7f7
  height 100%
  .balance_back
    height .45rem
    line-height .45rem
    background-color #01A4EF
    position: fixed
    top 0
    left 0
    right 0
    z-index 5

  .balance_back span
    position: absolute;
    left .15rem
    font-size .2rem
    color #fff

  .balance_back a, .balance_back p
    color #fff
    font-size .15rem
  .index_0
    margin-top .55rem
  .balance_content
    border-top 1px solid #ddd
    background-color #fff
    .title, .iconfont
      color #555
      font-size .16rem
      line-height .46rem
  .balance_content:last-child
    border-bottom 1px solid #ddd

</style>
