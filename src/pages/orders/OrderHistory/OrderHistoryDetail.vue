<template>
  <div class="OrderHistoryDetail container">
    <div class="row OrderHistory_back">
      <div @click="handleGoBackClick">
        <span class="iconfont ">&#xe79b;</span>
        <p class="text-center">Pending Payment</p>
      </div>
    </div>
    <div class="row top_title">
      <div class="col-xs-6">
        OrderNo: {{this.OrderHistoryNo }}
      </div>
      <div class="col-xs-6 text-right">
        {{this.createtime}}
      </div>
    </div>
    <shipping-info :shippingInfo="shippingInfo"
                   :orderInfo="orderInfo"
                   :dataInfo="dataInfo"></shipping-info>
    <order-items :dataInfo="dataInfo" :orderDetail="orderDetail"></order-items>
    <unpaid-final-price :dataInfo="dataInfo"></unpaid-final-price>
  </div>
</template>

<script>
  import ShippingInfo from "./components/shippingInfo";
  import OrderItems from "./components/orderItems";
  import UnpaidFinalPrice from "./components/unpaidFinalPrice";
  export default {
    name: "OrderHistoryDetail",
    components: { OrderItems, ShippingInfo,UnpaidFinalPrice},
    data() {
      return {
        detailInfo: {},
        OrderHistoryNo:'',
        createtime:'',
        dataInfo:{},
        shippingInfo:{},
        orderInfo:{},
        orderDetail:[]
      }
    },
    methods: {
      getUnpaidDetailOrder(res) {
        this.OrderHistoryNo = this.$route.params.orderNo;
        console.log(this.$route.params.orderNo);
        let url = '../individual/getorderDetailsJson';
        this.$ajax.post(url,
          //pid 为传值的key
          this.$qs.stringify({orderno:this.OrderHistoryNo })
        )
          .then(this.getUnpaidDetailOrderSucc)
          .catch(function (res) {
            console.log("error, no data")
          })
      },

      getUnpaidDetailOrderSucc(res) {
        const data = res.data;
        // console.log(JSON.stringify(data))
        this.dataInfo = data;
        this.createtime = data.create_time;
        this.shippingInfo = data.orderAddress;
        this.orderInfo = data;
        this.orderDetail = data.ctpoList;
      },
      handleGoBackClick() {
        this.$router.go(-1);
      },
      handleShowMoreClick(index){
        this.current = index;
        this.showAll = true;
      },


    },
    mounted() {
      this.getUnpaidDetailOrder();
    },

  }
</script>

<style scoped lang="stylus">
  .OrderHistoryDetail
    .OrderHistory_back
      height .45rem
      line-height .45rem
      background-color #01A4EF
      position: fixed
      top 0
      left 0
      right 0
      z-index 5

    .OrderHistory_back span
      position: absolute;
      left 0.3rem
      font-size .2rem
      color #fff

    .OrderHistory_back a, .OrderHistory_back p
      color #fff
      font-size .15rem

    .OrderHistory_searchBox
      /*background-color: #eee*/
      height: .45rem
      line-height: .45rem
      width: 100%
      position: relative;
    .top_title
      color #999
      font-size .13rem
      height .3rem
      line-height .3rem
      background-color #ececec
      padding-top .45rem
</style>
