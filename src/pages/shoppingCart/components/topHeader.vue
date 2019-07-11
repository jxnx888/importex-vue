<template>
<div class="topHeader">
  <div class="col-xs-3" @click="handleGoBackClick">
    <span class="iconfont">&#xe643;</span>
    <span>My cart</span>
  </div>
  <div class="col-xs-9">
    <span>9-15 Days</span>
    <span>
      <img src="https://img1.import-express.com/importcsvimg/webpic/newindex/img/country.png"
           style="background-repeat: no-repeat;width: 22px;height: 14px;background-position: -220px -112px;">
    </span>
    <span>ARGENTINA</span>
    <span class="btn ">Change</span>
  </div>

</div>
</template>

<script>
    export default {
        name: "topHeader",
      methods: {
        handleGoBackClick() {
          this.$router.go(-1);
        },
      }
    }
</script>

<style scoped lang="stylus">
.topHeader
  position fixed
  top 0
  width 100%
  height .5rem
  line-height .5rem
  background-color #fff
  border-bottom 1px solid #eee
  z-index 10
  .col-xs-3
    font-size .15rem
    font-weight bold
    padding 0 8px
    @media screen and (max-width: 320px)
      padding 0
  .col-xs-9
    text-align right
    padding 0 8px 0 0
    font-size .12rem
    .btn
      height .25rem
      line-height .25rem
      width .6rem
      padding 0
      font-size .12rem
      color #fff
      background-color #000
</style>
