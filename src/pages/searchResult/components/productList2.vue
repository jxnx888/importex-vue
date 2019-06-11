<template>
  <div class="productList">

    <!--    <scroller-->
    <!--      :on-infinite="infinite"-->
    <!--      :noDataText="'No More Data'"-->
    <!--      ref="my_scroller"-->
    <!--      class="my_scroller">-->
    <div>
      <div v-if="hasProductList">
        <div
          class="col-xs-6"
          v-for="(item, index) in productList"
          :key="item.goods_pid">
          <router-link
            tag="div"
            :to="'product/'+ item.goods_pid"
            class="produtListItem"
          >
            <div class="productListItem_Img">
              <img :src="item.goods_image" class="productListImg">
            </div>
            <!--  判断是否存在priceList -->
            <div class="productListItem_info">
              <div v-if="item.priceList">
                <p v-for="(innerValue, index) in item.priceList" v-if="index<2">
                  <span
                    :class="{'current_price': index === 0,'wholeSale_price': index === 1}">${{innerValue.price}}</span>
                  <span :class="{'hotProduct': index === 0,'hotProductHide': index === 1}"
                        v-if="item.is_stock_flag===1">HOT</span>
                  <!--判断是否有sold-->
                  <span :class="{'soldProduct': index === 0,'soldProductHide': index === 1}"
                        v-if="item.goods_solder > 0">{{item.goods_solder}} Sold</span>
                  <span :class="{'wholeSale_tagHide': index === 0,'wholeSale_tag': index === 1}"
                        v-if="item.goods_solder > 0">WHOLESALE</span>
                  <span :class="{'customScoreHide': index === 0,'customScore': index === 1}" v-if="item.customScore==5">{{item.customScore}}.0 <span
                    class="iconfont">&#xe79d;</span></span>
                </p>


              </div>

              <div v-else>
                <p class="">
                  <span class="current_price">${{item.goods_price}}</span>
                </p>
              </div>
            </div>

          </router-link>
        </div>
      </div>
      <div v-else class="noData">
        Nothing matches your search. Please try a different keyword.
      </div>
    </div>
    <!--    </scroller>-->
  </div>
</template>

<script>
  export default {
    name: "pruductList",
    props: {
      // productList: Array
    },
    data() {
      return {
        productList: [],
        rootTreeCategory: [],
        keyword: '',
        hasPriceList: true,
        hasNoPriceList: false,
        hasProductList: true,
        noDate: false,//判断是否加载
      }
    },
    methods: {
      getKeyword() {
        this.keyword = this.$route.params.keyword;
        // console.log(this.keyword)
      },
      getSearchList(res) {
        var url = 'http://192.168.1.163:8085/mobileSearch';
        this.$ajax.post(url,
          this.$qs.stringify({keyword: this.keyword})
        )
          .then(this.getSearchListSucc)
          .catch(function (res) {
            // console.log("error")
          })
      },
      getSearchListSucc(res) {
        const data = res.data;
        this.rootTreeCategory = data.rootTree;
        this.productList = data.goodslist;
        if (this.productList !== '' && this.productList !== undefined && this.productList !== 'undefined') {
          // console.log(JSON.stringify(this.productList));
          this.hasProductList = true;
        } else {
          this.hasProductList = false
        }
      },
      searchHistory() {

        // this.$parent.searchHistory();
        //获取路径中的搜索值
        let searchKeyword = this.$route.params.keyword;
        // console.log(searchKeyword);
        // 获取localStorage HistoryList 记录
        let HistoryList = localStorage.getItem('HistoryList');
        // 如果HistoryList不存在
        if (HistoryList == null) {
          localStorage.setItem('HistoryList', searchKeyword);
        } else {
          //如果HistoryList存在
          // HistoryList类型是string，所以要分割，转化object
          let HistoryListSplit = HistoryList.split(',');
          // console.log('get HistoryListSplit type ' + typeof HistoryListSplit);
          // console.log('get HistoryListSplit: ' + HistoryListSplit);
          // console.log('get HistoryListSplit: ' + HistoryListSplit.length);
          if (HistoryListSplit.length < 7) {
            // 如果keyword存在，移除并重新添加到第一项
            // console.log('length< 6')
            if (HistoryListSplit.indexOf(searchKeyword) !== -1) {

              HistoryListSplit.splice(HistoryListSplit.indexOf(searchKeyword), 1);
              HistoryListSplit.unshift(searchKeyword);
              // console.log('get new history: ' + HistoryList)

            } else {
              // 如果keyword不存在，直接添加到第一项
              HistoryListSplit.unshift(searchKeyword);
            }

            //处理完localStorage数据后，添加进处理完localStorage数据后
            localStorage.setItem('HistoryList', HistoryListSplit)
          } else {
            //如果HistoryListSplit.length > 7
            // console.log('length>6')
            HistoryListSplit.pop();

              // 如果keyword存在，移除并重新添加到第一项
              if (HistoryListSplit.indexOf(searchKeyword) !== -1) {

                HistoryListSplit.splice(HistoryListSplit.indexOf(searchKeyword), 1);
                HistoryListSplit.unshift(searchKeyword);
                // console.log('get new history: ' + HistoryList)
              } else {
                // 如果keyword不存在，直接添加到第一项
                HistoryListSplit.unshift(searchKeyword);
              }
          }
        }
      }


      // refresh(done) {
      //   setTimeout(() => {
      //     let start = this.top - 1
      //     for (let i = start; i > start - 10; i--) {
      //       this.productList.splice(0, 0, i + ' - keep walking, be 2 with you.')
      //     }
      //     this.top = this.top - 10;
      //     if (this.$refs.my_scroller)
      //       this.$refs.my_scroller.finishPullToRefresh();
      //   }, 1500)
      // },
      //
      // infinite() {//上拉加载
      //   let self = this;
      //   let start = this.productList.length;
      //   setTimeout(() => {
      //     for (let i = 0; i < 2; i++) {
      //       if (start >= 11) {
      //         self.$refs.myscroller.noDataText = "No More Data"//更改上拉加载的文字
      //         self.$refs.myscroller.finishInfinite(true);
      //         return
      //       }
      //       self.productList.push(i)//这是在data里的一个数组
      //     }
      //   }, 1500)
      //   setTimeout(() => {
      //     this.$refs.myscroller.finishInfinite(true);//停止上拉加载的动效，出现没有“"没有更多数据了”的提示，当传里面的布尔值代表isNoMoreData :Boolean，是否没有更多数据，true：没有更多数据，false：还有数据，至于有什么区别，传一下对比一下就行了
      //   }, 1000)
      // },

    },
    mounted() {
      this.getKeyword();
      this.getSearchList();
      this.searchHistory();
    },
    created(){

  }

  }
</script>

<style scoped lang="stylus">
  .productList
    padding-top .89rem

    .my_scroller
      padding-top .89rem

    .col-xs-6
      border .005rem solid #ECECEC
      padding-top .1rem
      padding-left .1rem
      padding-right .1rem

      .productListItem_Img
        height 1.65rem

        .productListImg
          height: 100%
          max-height: 100%;
          max-width: 100%;
          min-height: 30%;

      .productListItem_info
        height .47rem
        margin-bottom .02rem

      .productListItem_info p
        height .235rem
        line-height .235rem

        .current_price, .wholeSale_price, .hotProduct, .soldProduct, .wholeSale_tag, .customScore
          height .235rem
          line-height .235rem

        .current_price
          font-size .15rem
          font-weight bold
          color #333333

        .wholeSale_price
          color #666666
          font-size .12rem
          font-weight 400

        .hotProduct
          color #FF392A
          font-size .1rem
          font-weight bold
          font-style italic

        .hotProductHide
          display none

        .soldProduct
          float right
          color #999999
          font-size .11rem
          font-weight 400

        .soldProductHide
          display: none

        .wholeSale_tag
          width .76rem
          font-size .1rem
          color #999999
          border .01rem solid #999999
          -webkit-border-radius: .1rem
          -moz-border-radius: .1rem
          border-radius: .1rem
          padding 0rem .08rem

        .wholeSale_tagHide
          display: none

        .customScoreHide
          display none

        .customScore
          float: right
          font-size .1rem
          color #999999

        .iconfont
          /*float: right*/
          font-size .08rem
          color #F53131

    .noData
      font-size .28rem
      color red
      line-height .4rem
</style>
