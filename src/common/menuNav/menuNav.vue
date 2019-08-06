<template>
    <div class="menuNav">
      <div class="col-xs-12">
        <div class="col-xs-3 menu_single">
          <router-link to="/" tag="div">

            <div class="icon iconfont">
              &#xe646;
            </div>
            <div class="icon_text">
              Home
            </div>
          </router-link>
        </div>

        <div class="col-xs-3 menu_single">
          <router-link :to="{name:'/categories',  params:{currentCategory: 'Women\'s Clothing'}}" tag="div">
            <div class="icon iconfont">
              &#xe609;
            </div>
            <div class="icon_text">
              Categories
            </div>
          </router-link>
        </div>

        <div class="col-xs-3 menu_single">
          <router-link to="/shoppingCart" tag="div">

            <div class="icon iconfont">
              &#xe61d;
            </div>
            <div class="icon_text">
              Shopping Cart
            </div>
          </router-link>
        </div>

        <div class="col-xs-3 menu_single">
        <router-link to="/myAccount" tag="div">

          <div class="icon iconfont">
            &#xe619;
          </div>
          <div class="icon_text">
            My Account
          </div>
        </router-link>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "menuNav"
    }
</script>

<style scoped lang="stylus">
  .menuNav
    z-index: 9
    position: fixed
    bottom: 0
    height: .56rem
    width: 100%
    background-color: #01A4EF
    .col-xs-12
      padding 0
      .col-xs-3
        padding-right 0
        padding-left 0
      .menu_single
        height .56rem
        display flex
        justify-content center
        align-items center
        .icon
          color #fff
          text-align: center
          font-size .25rem
        .icon_text
          color #fff
          text-align: center
          font-size .13rem
</style>
