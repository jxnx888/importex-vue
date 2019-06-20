<template >
  <div class="topNav">
    <div
      class="topNav_Normal "
      v-show="!topNavBarFixed">
      <div class="topNav_back col-xs-6" @click="handleGoBackClick()">
        <div class="iconWrapper">
          <span class="iconfont">&#xe73d;</span>
        </div>
      </div>

      <router-link
        tag="div"
        to="/searchDetail/"
        class="topNav_Search col-xs-2 text-right">
        <span class="iconfont">&#xe736;</span>
      </router-link>

      <router-link
        tag="div"
        to="/shoppingCart/"
        class="topNav_ShoppingCar col-xs-2 text-right">
        <span class="iconfont">&#xe63b;</span>
      </router-link>

      <div class="topNav_Menu col-xs-2 text-center" @click="showSmallNav = ! showSmallNav">
        <span class="iconfont">&#xe7a6;</span>
      </div>

    </div>

    <!--右上角小导航-->
    <small-nav v-if="showSmallNav"></small-nav>

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

      <router-link tag="div" to="/searchDetail/" class="topNav_Search col-xs-2 text-right">
        <span class="iconfont">&#xe736;</span>
      </router-link>

      <router-link tag="div" to="/shoppingCart/" class="topNav_ShoppingCar col-xs-2 text-right">
        <span class="iconfont">&#xe63b;</span>
      </router-link>

      <div class="topNav_Menu col-xs-2 text-center" @click="showSmallNav = ! showSmallNav">
        <span class="iconfont">&#xe7a6;</span>
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
      var _this =this
      window.addEventListener('scroll', this.handleScroll);
      // document.addEventListener('click', function(e){
      //   console.log(_this.$refs.smallNav)
      //   // if(e.target.id !== 'smallNav' || e.target.className !== 'smallNav'  ){
      //   if(! _this.$refs.smallNav.contains(e.target)){
      //     _this.showSmallNav=false;
      //   }
      //
      // })
    },
    watch: {

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
    .topNav_ShoppingCar
      .iconfont
        padding-right .08rem
        @media screen and (max-width: 320px)
          padding-right .01rem
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
    .topNav_ShoppingCar
      .iconfont
        padding-right .08rem
        @media screen and (max-width: 320px)
          padding-right .01rem
    .topNav_back span, .topNav_Menu span, .topNav_Search span, .topNav_ShoppingCar span
      font-size .3rem
/*.smallNavWrapper*/
  /*height 100%*/
  /*width 100%*/
  /*opacity .1*/
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
