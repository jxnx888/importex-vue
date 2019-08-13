<template>
    <div class="recharge container">
      <div class="recharge_back">
        <div @click="handleGoBackClick">
          <span class="iconfont ">&#xe79b;</span>
          <p class="text-center">recharge(USD)</p>
        </div>
      </div>
      <div class="col-xs-12 recharge_balance">
        Present Balance: USD <span>{{}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "recharge",
      methods:{
        handleGoBackClick() {
          this.$router.go(-1);
        },
      }
    }
</script>

<style scoped lang="stylus">
.recharge
  .recharge_back
    height .45rem
    line-height .45rem
    background-color #01A4EF
    position: fixed
    top 0
    left 0
    right 0
    z-index 5

  .recharge_back span
    position: absolute;
    left .15rem
    font-size .2rem
    color #fff

  .recharge_back a, .recharge_back p
    color #fff
    font-size .15rem
  .recharge_balance
    padding-top .45rem
    font-size .13rem
    line-height .25rem
    margin .3rem 0
  .recharge_balance span
    font-weight bold
</style>
