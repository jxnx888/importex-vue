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
                  <span :class="{'current_price': index === 0,'wholeSale_price': index === 1}">${{innerValue.price}}</span>
                  <span :class="{'hotProduct': index === 0,'hotProductHide': index === 1}" v-if="item.is_stock_flag===1">HOT</span>
                  <!--判断是否有sold-->
                  <span :class="{'soldProduct': index === 0,'soldProductHide': index === 1}" v-if="item.goods_solder > 0">{{item.goods_solder}} Sold</span>
                  <span :class="{'wholeSale_tagHide': index === 0,'wholeSale_tag': index === 1}" v-if="item.goods_solder > 0">WHOLESALE</span>
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
        // listResult: [],
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
        var url = 'http://192.168.1.127:8085/mobileSearch';
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

        this.productList = data.goodslist;
        if (this.productList !== '' && this.productList !== undefined && this.productList !== 'undefined') {
          // console.log(JSON.stringify(this.productList));
          this.hasProductList = true;
        } else {
          this.hasProductList = false
        }
      },

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
    },

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

      .productListItem_Img
        height 1.65rem

        .productListImg
          height: 100%
          max-height: 100%;
          max-width: 100%;
          min-height: 30%;

      .productListItem_info
        height .47rem
        padding-top .06rem
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
          line-height .15rem
        .soldProductHide
          display: none
        .wholeSale_tag
          width .76rem
          height .12rem
          line-height .12rem
          font-size .1rem
          color #999999
          border .01rem solid #999999
          -webkit-border-radius: .1rem
          -moz-border-radius: .1rem
          border-radius: .1rem
          padding 0rem .08rem
        .wholeSale_tagHide
          display: none
    .noData
      font-size .28rem
      color red
      line-height .4rem
</style>
