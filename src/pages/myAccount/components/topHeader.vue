<template>
    <div class="topHeader">
      <div class="container">
        <div class="row topFix ">
          <router-link
            tag="div"
            class="goHome col-xs-3"
            to="/">
              Home
          </router-link>
          <div class="title col-xs-6 text-center">
            My Account
          </div>
          <router-link
            tag="div"
            class="search iconfont col-xs-3 text-right"
            to="/searchDetail">
            &#xe649;
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "topHeader"
    }
</script>

<style scoped lang="stylus">
.topHeader
  height .44rem
  line-height .44rem
  .container
    .topFix
      position: fixed;
      top 0
      width 100%
      height .44rem
      line-height .44rem
      color #fff
      background linear-gradient(to right,#BC985B,#E5C585)

</style>
