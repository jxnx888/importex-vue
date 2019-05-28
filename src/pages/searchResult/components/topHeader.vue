<template>
  <div class="searchResult">
    <div class="searchResult_Nav">
      <router-link to="/" >
        <span class="iconfont ">&#xe669;</span>
      </router-link>
      <router-link to="/searchDetail">
        <span class="iconfont ">&#xe615;</span>
      </router-link>
      <router-link to="/shoppingCar">
        <span class="iconfont ">&#xe64c;</span>
      </router-link>
    </div>
    <div class="searchResult_Filter">
      Filter
      <span class="iconfont">&#xe6b5;</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: "topHeader"
  }
</script>

<style scoped lang="stylus">
  .searchResult
    height .5rem
    width 100%
    line-height .5rem
    z-index 9
    position: fixed
    top 0rem
    background-color #fff
    .searchResult_Nav
      float: left
      height .5rem
      line-height .5rem
      background-color #fff
    .searchResult_Nav span
      /*position: absolute;*/
      left .15rem
      font-size .2rem
      color #999999
    .searchResult_Nav a
      display: inline-block
      height .5rem
      line-height .5rem
      color #fff
      font-size .15rem
      margin 0 .13rem
    .searchResult_Nav p
      color #fff
      font-size .15rem
    .searchResult_Filter
      float: right
      height .5rem
      line-height .5rem
      font-size: .13rem
      margin-right .3rem
    .searchResult_Filter span
      font-size .13rem
</style>
