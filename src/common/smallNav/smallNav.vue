<template>

      <!--右上角小导航-->
      <div class="smallNav"
           ref="smallNav"
      >
        <router-link to="/" tag="div" class="goHome">
          <span class="iconfont">&#xe637;</span>
          <span>Home</span>
        </router-link>
        <router-link to="/myAccount" tag="div" class="goAccount">
          <span class="iconfont">&#xe614;</span>
          <span>Account</span>
        </router-link>
        <div class="goWishList">
          <span class="iconfont">&#xe651;</span>
          <span>Wish List</span>
        </div>
      </div>
</template>

<script>
    export default {
        name: "smallNav"
    }
</script>

<style scoped lang="stylus">
  .smallNav
    position: fixed;
    width 1.25rem
    right .1rem
    top .47rem
    background-color #fff
    -webkit-border-radius: .1rem
    -moz-border-radius: .1rem
    border-radius: .1rem
    box-shadow: 0 0 3px 3px #ccc;
    z-index: 11
    opacity 1
    .goHome, .goAccount, .goWishList
      height .37rem
      line-height .37rem
      padding-left .05rem
      .iconfont
        padding 0 .1rem
  .smallNav::before
    content ''
    position: absolute;
    width 0
    height 0
    top -10px
    right .12rem
    border-left .1rem solid transparent
    border-right .1rem solid transparent
    border-bottom .1rem solid #ccc
</style>
