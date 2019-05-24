<template>
  <div class="top">
    <div class="home_top">
      <div>
        <div class="home_top_news col-xs-6">
          <span>$50</span> coupons for new clients!
        </div>
        <div class="home_top_news col-xs-6">
          Get <span>$3</span> off for your initial order!
        </div>
      </div>
    </div>

    <div class="home_bottom">
          <div class="nav_left col-xs-4">
            <router-link to="/" >
              <img class="nav_logo" src="https://www.import-express.com/img/m-index/logo.png">
            </router-link>
          </div>
          <div class="nav_right col-xs-8">
            <router-link to="/searchDetail">
              <div class="input_search iconfont">Search by keywords or SKU...<span class="iconfont">&#xe615;</span>
              </div>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "news"
  }
</script>

<style scoped lang="stylus">
  .top
    position fixed
    width 100%
    /*line-height .6rem*/
    z-index 9
    .home_top
      height .3rem
      background #01a4ef
      .home_top_news
        color #fff
        font-size .12rem
        height .3rem
        line-height .3rem
       /*padding 0 .1rem*/
      .col-xs-6
        padding-left .1rem
        padding-right .1rem
        span
          color #FCFF05
    .home_bottom
      background #fff
      width 100%
      height .53rem
      box-shadow: 0 0.06rem 0.1rem rgba(28, 28, 28, 0.2);
      -webkit-box-shadow: 0 0.06rem 0.1rem rgba(28, 28, 28, 0.2);
      .nav_left
        .nav_logo
          width 100%
          position absolute
          margin .12rem 0
      .nav_right
        padding-left .08rem
        padding-right .08rem
        margin .05rem 0
        .input_search
          float: right
          border 2px solid #01A4EF
          line-height 0.32rem
          background-color #fff
          -webkit-border-radius .1rem
          -moz-border-radius .1rem
          border-radius .1rem
          color #999999
          font-size 0.11rem
          text-align left
          padding-left 10px
          white-space: nowrap
          overflow: hidden
          text-overflow: ellipsis
        .input_search span
          /*position: absolute*/
          float right
          font-size .3rem
          color #01A4EF
          font-weight bold


</style>
