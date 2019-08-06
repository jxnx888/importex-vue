<template>
    <div class="unpaidOrderDetail container">
      <div class="row unpaidOrder_back">
        <div @click="handleGoBackClick">
          <span class="iconfont ">&#xe79b;</span>
          <p class="text-center">Pending Payment</p>
        </div>
      </div>
      <div class="row top_title">
          <div class="col-xs-6">
            OrderNo: {{this.currentOrderNo }}
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
        name: "unpaidOrderDetail",
      components: { OrderItems, ShippingInfo,UnpaidFinalPrice},
      data() {
        return {
          detailInfo: {},
          currentOrderNo:'',
          createtime:'',
          dataInfo:{},
          shippingInfo:{},
          orderInfo:{},
          orderDetail:[]
        }
      },
      methods: {
        getUnpaidDetailOrder(res) {
          this.currentOrderNo = this.$route.query.orderNo;
          console.log(this.currentOrderNo )
          let url = 'http://192.168.1.163:8085/individual/getorderDetailsJson';
          this.$ajax.post(url,
            //pid 为传值的key
            this.$qs.stringify({orderno:this.currentOrderNo })
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
.unpaidOrderDetail
  .unpaidOrder_back
    height .45rem
    line-height .45rem
    background-color #01A4EF

  .unpaidOrder_back span
    position: absolute;
    left .15rem
    font-size .2rem
    color #fff

  .unpaidOrder_back a, .unpaidOrder_back p
    color #fff
    font-size .15rem

  .unpaidOrder_searchBox
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

</style>
