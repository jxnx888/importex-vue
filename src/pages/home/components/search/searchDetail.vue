<template>
  <div class="searchDetail">

    <div class="searchDetail_back">
      <router-link to="/">
        <span class="iconfont ">&#xe79b;</span>
                  <p class="text-center">Search</p>
      </router-link>
    </div>
    <div class="searchDetail_searchBox" >
      <div class="wrapper">
        <label class="iconfont search_Icon">&#xe615;</label>
        <input
          class="searchDetail_input"
          id="searchDetail"
          v-model="keyword"
          placeholder="Search by keywords or SKU..."/>

        <i @click="()=>{keyword=''}" class="iconfont icon-close1">&#xe616;</i>
<!--        <button class="searchSubmit">Cancel</button>-->
        <div ref="cancleBtn" @click="searchSubmit" class="searchSubmit">
          {{keyword.length>0?'Search':'Cancel'}}
        </div>
      </div>
    </div>

<!--    search list -->
    <search-list v-if="listHide"></search-list>
  <div v-if="showRecommand">
    <div class="searchDetail_Categories" >
      <div class="searchDetail_Categories_top">
        Categories
      </div>
      <div class="searchDetail_Categories_bottom">
          <button class="btn CategoriesBtn" onclick="Pajamas&home()">Pajamas & Home Wear & ... </button>
          <button class="btn CategoriesBtn" onclick="allCategories()">in All Categories</button>

      </div>
    </div>

    <div style="clear: both"></div>

    <div class="searchDetail_Hot">
      <div class="searchDetail_Hot_top">
        Recent Searches
      </div>
      <div class="searchDetail_Hot_bottom">
        <button class="btn" onclick="search()">Women's Clothing</button>
        <button class="btn" onclick="search()">Clothing</button>
        <button class="btn" onclick="search()">Dresses</button>
        <button class="btn" onclick="search()">Wedding dresses bridal gown dress</button>
      </div>
    </div>

    <div style="clear: both"></div>

    <router-link to="/" class="searchDetail_close">
      点击任意空白关闭搜索页
    </router-link>

  </div>
  </div>
</template>

<script>
import searchList from './searchList'

  export default {
    name: "searchDetail",
    components: {
      searchList
      },

    data() {
      return {
        listHide: false,
        keyword:"",
        showCancle:false,
        showRecommand: true
      }
    },

    methods:{
      searchSubmit() {
        var _this = this;
        //当keyword>0, 显示Search，
        if (this.keyword.length > 0) {
          //方法：跳转到默认搜索结果页

        } else {
          // 当Keyword<0, 显示cancel，点击可返回主页
            _this.$router.push({path: './'});
        }
      },
    },
    watch: {
       keyword(curVal) {
        var inputVal = curVal;
        // console.log(inputVal);
        if (curVal == '' || inputVal.length < 3) {
          this.listHide = false;
           this.showRecommand = true
        } else {
          this.listHide = true;
          this.showRecommand = false
        }
      }
    },
  }
</script>

<style scoped lang="stylus">
  .searchDetail
    .searchDetail_back
      height .45rem
      line-height .45rem
      background-color #000
    .searchDetail_back span
      position: absolute;
      left .15rem
      font-size .2rem
      color #fff
    .searchDetail_back a
      color #fff
      font-size .15rem
    .searchDetail_back p
      color #fff
      font-size .15rem
    .searchDetail_searchBox
      /*background-color: #eee*/
      height: .45rem
      line-height: .45rem
      width: 100%
      position: relative;
      .wrapper
        display: flex
        width: 95%
        height: .45rem
        line-height: .45rem
        margin: 0 auto
      .search_Icon, .searchDetail_input, .searchSubmit
        height .32rem
        line-height .32rem
        margin-top .07rem
      .search_Icon
        display: block
        float: left
        margin-left .1rem
        padding-left .1rem
        -webkit-border-radius .1rem 0 0 0.1rem
        -moz-border-radius .1rem 0 0 0.1rem
        border-radius .1rem 0 0 0.1rem
        background #f2f2f2
        font-size .25rem
        color #999
      .searchDetail_input
        display: block
        width: 100%
        -webkit-border-radius: 0 .1rem 0.1rem 0
        -moz-border-radius: 0 .1rem 0.1rem 0
        border-radius: 0 .1rem 0.1rem 0
        padding-left: .1rem;
        background: #f2f2f2
        font-size .14rem
      .searchSubmit
        float right
        background #fff
        font-size .15rem
        font-weight: 400
        padding 0 .1rem
    .searchDetail_Categories, .searchDetail_Hot
      width: 90%
      margin: 0 auto

      .searchDetail_Categories_top, .searchDetail_Hot_top
        font-size .13rem
        line-height: .3rem
        /*border-bottom: 1px solid #c9c9c9*/
        color: #848484
        margin-bottom: .1rem
        text-align: left
      .searchDetail_Categories_bottom, .searchDetail_Hot_bottom
        height: .3rem;
        line-height .3rem
        .btn
          height: .3rem;
          line-height .3rem
          margin: 0rem .05rem .1rem 0rem;
          float: left;
          background: #E8EBEF;
          color: #333;
          font-size: 0.13rem;
          padding: 0 .1rem;
          border-radius: 4px;
        .CategoriesBtn
          border 1px solid #01A4EF
          color #01A4EF
          background: #fff;
          font-size: 0.12rem;
    .searchDetail_close
      display: block;
      text-align: center
      line-height: 2rem
      padding-bottom: 7rem
      color: #c9c9c9
      font-size .15rem
</style>
