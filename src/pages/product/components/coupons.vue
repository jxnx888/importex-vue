<template>
    <div class="coupons ">
      <img  src="../../../../static/images/coupons.png">
    </div>
</template>

<script>
  export default {
    name: "coupons"
  }
</script>

<style scoped lang="stylus">
  .coupons
    height .4rem
    width 100%
    line-height .4rem
    margin .1rem 0 0  0
    /*background-color #fff*/
    position: relative;
    @media screen and (max-width: 320px)
      height .35rem
  .coupons img
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    max-width: 100%;
    max-height: 100%;


</style>
