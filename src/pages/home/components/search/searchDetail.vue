<template>
  <div class="searchDetail">

   <!-- <div class="searchDetail_back">
      <div @click="handleGoBackClick">
        <span class="iconfont ">&#xe79b;</span>
        <p class="text-center">Search</p>
      </div>
    </div>-->
    <div class="searchDetail_searchBox">
      <div class="wrapper">
        <label class="iconfont search_Icon">&#xe615;</label>
        <input
          class="searchDetail_input"
          id="searchDetail"
          v-model="keyword "
          @keyup.enter="searchSubmit"
          placeholder="Search by keywords or SKU..."/>

        <!--        清空文本-->
        <i @click="()=>{keyword=''}" class="iconfont icon-close" v-if="showClearIcon">&#xe616;</i>
        <div ref="cancleBtn" @click="searchSubmit" class="searchSubmit">
          {{keyword.length>0?'Search':'Cancel'}}
        </div>
      </div>
    </div>

    <!-- search list -->
    <searchList v-if="listHide" ref="childSearchList" :productList="productList" :keyword="keyword"></searchList>


    <div v-if="showRecommand">
      <div class="searchDetail_Categories">
        <div class="searchDetail_Categories_top">
          Categories
        </div>
        <div class="searchDetail_Categories_bottom">
<!--          <button class="btn CategoriesBtn" onclick="Pajamas&home()">Pajamas & Home Wear & ...</button>-->
          <button class="btn CategoriesBtn" onclick="allCategories()">in All Categories</button>
          <i class="iconfont selected">&#xe63f;</i>

        </div>
      </div>

      <div style="clear: both"></div>

      <div class="searchDetail_Hot">
        <div class="searchDetail_Hot_top">
          Recent Searches
        </div>
<!--        列出搜索历史-->
        <router-link
          tag="div"
          class="searchDetail_Hot_bottom"
          v-for="(item, index) in histroyWord"
          :key="index"
          :to="{path: '/searchResult/' + item, params:{catid:'0'}}"
        >
          <div class="btn btn_content">{{item}}</div>
        </router-link>

      </div>

      <div style="clear: both"></div>

      <router-link to="/" class="searchDetail_close">

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
        keyword: "",
        showCancle: false,
        showRecommand: true,
        productList: [],
        showClearIcon:false,
      }
    },

    methods: {
      handleGoBackClick() {
        this.$router.go(-1);
      },
      searchSubmit() {
        var _this = this;
        //当keyword>0, 显示Search，
        if (this.keyword.length > 0) {
          this.searchHistory();
          // _this.$router.push({path: "./searchResult/" + this.keyword+ '&catid=0&minprice=&maxprice=&sort=default&pvid=&collection=0&newArrivalDate=&isFreeShip=1&unkey='});
          _this.$router.push({path: "../searchResult/" + this.keyword, query:{catid:'0', minprice:'',maxprice:'',sort:'default',pvid:'',collection:'0', newArrivalDate:'',isFreeShip:'1', unkey:''}})
        } else {
          // 当Keyword<0, 显示cancel，点击可返回主页
          // _this.$router.push({path: './'});
          _this.$router.go(-1)
        }

      },
      getSearchList(res) {
        // 搜索推荐词
        this.$ajax.post(
          'http://192.168.1.163:8085/searchAutocomplete',
          this.$qs.stringify({keyword: res})
        )
          .then(this.getSearchListSucc)
          .catch(function (res) {
            console.log("error")
          })
      },
      getSearchListSucc(res) {
        this.productList = res.data.keyList;

      },

      searchHistory() {
        // 获取localStorage HistoryList 记录
        this.keyword = this.keyword.trim();// 清除空格
        let HistoryList = localStorage.getItem('HistoryList');
        // 如果HistoryList不存在
        if (HistoryList == null) {
          localStorage.setItem('HistoryList', this.keyword);
        } else {
          //如果HistoryList存在
          console.log('get history: ' + HistoryList);
          console.log('get history length: ' + HistoryList.length);
          console.log('get history type ' + typeof HistoryList);
          // HistoryList类型是string，所以要分割，转化object
          let HistoryListSplit = HistoryList.split(',');
          console.log('get HistoryListSplit type ' + typeof HistoryListSplit);
          console.log('get HistoryListSplit: ' + HistoryListSplit);
          console.log('get HistoryListSplit: ' + HistoryListSplit.length);
          if (HistoryListSplit.length < 7) {
            // 如果keyword存在，移除并重新添加到第一项
            console.log('length< 6')
            if (HistoryListSplit.indexOf(this.keyword) !== -1) {

              HistoryListSplit.splice(HistoryListSplit.indexOf(this.keyword), 1);
              HistoryListSplit.unshift(this.keyword);
              // console.log('get new history: ' + HistoryList)

            } else {
              // 如果keyword不存在，直接添加到第一项
              HistoryListSplit.unshift(this.keyword);
            }
            // //储存HistoryListSplit到 historyWord中
            // this.historyWord=HistoryListSplit;
            // if(this.historyWord.length>5){
            //   this.historyWord.pop()
            // }

            //处理完localStorage数据后，添加进处理完localStorage数据后
            localStorage.setItem('HistoryList', HistoryListSplit)
          } else {
            console.log('length>6')
            HistoryListSplit.pop()
            // 如果keyword存在，移除并重新添加到第一项
            if (HistoryListSplit.indexOf(this.keyword) !== -1) {

              HistoryListSplit.splice(HistoryListSplit.indexOf(this.keyword), 1);
              HistoryListSplit.unshift(this.keyword);
              // console.log('get new history: ' + HistoryList)

            } else {
              // 如果keyword不存在，直接添加到第一项
              HistoryListSplit.unshift(this.keyword);
            }

          }
        }
      }
    },
    watch: {
      keyword(curVal) {
        var inputVal = curVal;
        // console.log(inputVal);
        this.getSearchList(inputVal);
        if (curVal == '' || inputVal.length < 2) { //bug搜索的时候，输入dresss点下一个s才会隐藏list
          this.listHide = false;
          this.showRecommand = true;
          this.showClearIcon = false;
        } else {
          this.listHide = true;
          this.showRecommand = false;
          this.showClearIcon = true;
        }
      },

    },
    mounted() {
      // this.searchHistory();
    },
    created: function () {
       let getLocalStorage = localStorage.getItem('HistoryList');
      let getLocalStorageSplit = getLocalStorage.split(',');
      this.histroyWord = getLocalStorageSplit

    },

  }
</script>

<style scoped lang="stylus">
  .searchDetail
    .searchDetail_back
      height .45rem
      line-height .45rem
      background-color #01A4EF

    .searchDetail_back span
      position: absolute;
      left .15rem
      font-size .2rem
      color #fff

    .searchDetail_back a, .searchDetail_back p
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

      .icon-close
        position absolute
        right 0.8rem
        top .01rem
        color #CACACA
        font-size .18rem
      .search_Icon
        display: block
        float: left
        margin-left .1rem
        padding-left .1rem
        -webkit-border-radius .04rem 0 0 .04rem
        -moz-border-radius .04rem 0 0 .04rem
        border-radius .04rem 0 0 .04rem
        background #f2f2f2
        font-size .25rem
        color #999

      .searchDetail_input
        display: block
        width: 100%
        -webkit-border-radius: 0 .04rem .04rem 0
        -moz-border-radius: 0 .04rem .04rem 0
        border-radius:  0 .04rem .04rem 0
        padding-left: .1rem;
        background: #f2f2f2
        font-size .14rem
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis

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
        display inline
        position relative
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
          text-transform: capitalize
          max-width 48%
          white-space:nowrap
          overflow:hidden
          text-overflow:ellipsis
        .CategoriesBtn
          border 1px solid #01A4EF
          color #01A4EF
          background: #fff;
          font-size: 0.12rem;
        .selected
          color #01a4ef
          position: absolute;
          right: -1.08rem;
          top: 0.08rem;
    .searchDetail_close
      display: block;
      text-align: center
      line-height: 2rem
      padding-bottom: 4rem
      color: #c9c9c9
      font-size .15rem
</style>
