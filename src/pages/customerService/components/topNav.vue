<template>
  <div class="topNav container">
    <!--右上角小导航-->
    <small-nav v-if="showSmallNav"></small-nav>
    <div class="row">
    <div class="iconfont col-xs-1" @click="handleGoBackClick" >
      &#xe618;
    </div>

    <router-link tag="div" to="/searchDetail" class="col-xs-9">
      <div class="iconfont input-search " style=" font-size: .2rem !important;">&#xe649;</div>
    </router-link>

    <router-link tag="div" to="/shoppingCart" class="col-xs-1 iconfont" style="padding: 0">
      &#xe680;
    </router-link>
    <div class="col-xs-1 iconfont" style="padding: 0" @click="showSmallNav = ! showSmallNav">
      &#xe60f;
    </div>
    </div>

  </div>
</template>

<script>
  import smallNav from "../../../common/smallNav/smallNav"
  export default {
    name: "topNav",
    components:{
      smallNav
    },
    data() {
      return {
        showSmallNav: false,
      }
    },
    methods: {
      handleGoBackClick() {
        this.$router.go(-1);
      },
    }
  }
</script>

<style scoped lang="stylus">

.topNav
  position: fixed
  top 0
  width 100%
  height .49rem
  line-height .49rem
  background #fff
  box-shadow 0 0.06rem 0.1rem rgba(28,28,28,.2)
  z-index 11
  .row
    .input-search
      width: 98%
      height: .3rem
      line-height: .3rem
      margin: .1rem  auto
      padding-right .1rem
      text-align: right
      background-color: #ededed
      color:#000
      opacity: 0.5
    .iconfont
      font-size .25rem
      color #bcbcbc

</style>
