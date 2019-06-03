<template>
  <div class="topNav">
    <div
      class="topNav_Normal "
      v-show="!topNavBarFixed">
      <div class="topNav_back col-xs-6" @click="handleGoBackClick()">
        <span class="iconfont">&#xe73d;</span>
      </div>

      <div class="topNav_Search col-xs-2 text-right">
        <span class="iconfont">&#xe736;</span>
      </div>

      <div class="topNav_ShoppingCar col-xs-2 text-right">
        <span class="iconfont">&#xe63b;</span>
      </div>

      <div class="topNav_Menu col-xs-2 text-center">
        <span class="iconfont">&#xe7a6;</span>
      </div>
    </div>
    <!--    顶部固定导航-->
    <div
      class="topNav_Fixed"
      :class="topNavBarFixed == true ? 'topNavBarFixed' :''"
      v-show="topNavBarFixed"

    >
      <!--      :style="opacityStyle"-->
      <div class="topNav_back col-xs-6" @click="handleGoBackClick()">
        <span class="iconfont">&#xe73d;</span>
      </div>

      <div class="topNav_Search col-xs-2 text-right">
        <span class="iconfont">&#xe736;</span>
      </div>

      <div class="topNav_ShoppingCar col-xs-2 text-right">
        <span class="iconfont">&#xe63b;</span>
      </div>

      <div class="topNav_Menu col-xs-2 text-center">
        <span class="iconfont">&#xe7a6;</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "topNav",
    data() {
      return {
        topNavBarFixed: false,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      handleGoBackClick() {
        this.$router.go(-1);
      },
      handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(scrollTop);
        // let offsetTop = document.querySelector('#searchBar').offsetTop
        // scrollTop > offsetTop ? this.topNavBarFixed = true : this.topNavBarFixed = false
        //  当滚动超过 50 时，实现吸顶效果
        if (scrollTop > 30) {

          this.topNavBarFixed = true
        } else {
          let opacity = top / 140;
          opacity = opacity > 1 ? 1 : opacity;
          this.opacityStyle = {opacity};
          this.topNavBarFixed = false
        }

      }
    },
    mounted() {
      // 给window添加一个滚动滚动监听事件，
      window.addEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped lang="stylus">
.topNav
  position: absolute
  z-index: 9
  width 100%
  .topNavBarFixed
    position: fixed !important
    top 0
    z-index: 9
  .topNav_Normal
    .col-xs-6
      padding 0 .15rem
      padding-top .09rem
      .iconfont
        color #999
    .col-xs-2
      padding 0 0
      padding-top .09rem
      .iconfont
        color #999
    .topNav_Search
      padding-left .35rem


    .topNav_back span, .topNav_Menu span, .topNav_Search span, .topNav_ShoppingCar span
      font-size .3rem

  .topNav_Fixed
    width 100%
    height .45rem
    background #fff
    opacity .7
    .col-xs-6
      padding 0 .15rem
      padding-top .09rem
      .iconfont
        color #999
    .col-xs-2
      padding 0 0
      padding-top .09rem
      .iconfont
        color #999
    .topNav_Search
      padding-left .35rem
    .topNav_back span, .topNav_Menu span, .topNav_Search span, .topNav_ShoppingCar span
      font-size .3rem


</style>
