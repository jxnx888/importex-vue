<template>
  <div class="unpaidOrder">
    <div class="unpaidOrder_back">
      <div @click="handleGoBackClick">
        <span class="iconfont ">&#xe79b;</span>
        <p class="text-center">Unpaid Order</p>
      </div>
    </div>

    <div v-if="this.listOrders.length>0">
      <div v-for="(item, index) in this.listOrders" class="container" :class="'index_'+index">
        <div class="row topTitle">
          <div class="col-xs-12">
            <div class="row">
              <div class="col-xs-8">
                OrderNo: <span>{{item.orderNo}}</span>
              </div>
              <router-link
                :to="{path: '/myAccount/unpaidOrder/Detail', query:{orderNo: item.orderNo}}"
                class="col-xs-4 viewDetail text-right">
                View Detail
              </router-link>
            </div>
          </div>
        </div>
        <div id="oderDetails" ref="oderDetails" class="CloseDetail" :class="{'MoreDetail':item.showAll === true,'OneItem':item.orderDetails.length < 4}">
          <router-link
            tag="div"
            :to="/product/ + childItem.goods_pid"
            v-for="(childItem, childIndex) in item.orderDetails"
            :key="childIndex"
            class="row goodsList">
            <div class="col-xs-3 ">
              <div class="imgWrapper">
                <img v-lazy="childItem.car_img"
                     alt="">
              </div>
            </div>
            <div class="col-xs-9 goodInfo">
              <div class="row">
                <div class="col-xs-12 goodName">
                  {{childItem.goodsname}}
                </div>
                <div class="col-xs-12 goodType">
                  <span class="">Item ID:{{childItem.goodsid}}  </span>
                  <span>{{childItem.car_type}}</span>
                </div>
                <div class="col-xs-12 goodPrice">
                  <span class="price">${{childItem.goodsprice}}</span>
                  <span class="number">/{{childItem.seilUnit}} x {{childItem.yourorder}}</span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div
          id="oderDetailsClick"
          @click="item.showAll = !item.showAll"
          class="show-more text-center iconfont"
          v-if="item.orderDetails.length >3">
          {{item.showAll?'&#xe63c;':'&#xe635;'}}
        </div>
        <div class="row totalInfo">
          <div class="col-xs-12 text-right">
            <span class="itemNum">{{item.orderDetails.length}} Items</span>
            <span class="totalPrice">Total Price:</span>
            <span class="totalPriceNum">${{item.payAmount}} USD</span>
          </div>
          <div class="col-xs-12 text-right">
            <button class="btn payNow_btn">Pay Now</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="container noData">
      <div class="row">
        <div class="col-xs-12 noOrders text-center">
          You currently have no unpaid orders
        </div>
        <router-link tag="div" to="/" class="col-xs-12 goShopping">
          <p class="goShopping_btn  text-center">Start Shopping</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "unpaidOrder",
    data() {
      return {
        listOrders: [],
        currentShowAll: false,  //标记数据是否需要完全显示的属性
        current: -1,
      }
    },
    methods: {
      getUnpaidOrder(res) {
        let url = '..//individual/getUnpaidOrders';
        this.$ajax.get(url)
          .then(this.getUnpaidOrderSucc)
          .catch(function (res) {
            console.log("error, no data")
          })
      },

      getUnpaidOrderSucc(res) {
        const data = res.data.listOrders;
        // 循环添加showAll属性
        for (var i in data) {
          data[i]["showAll"] = false;
        }
        this.listOrders = data;
        // console.log(JSON.stringify(data));
        console.log(data.length);

      },
      handleGoBackClick() {
        this.$router.go(-1);
      },

    },
    mounted() {
      this.getUnpaidOrder();
    },

  }
</script>

<style scoped lang="stylus">
  .unpaidOrder
    background #f9f9f9

    .unpaidOrder_back
      height .45rem
      line-height .45rem
      background-color #01A4EF
      position: fixed
      top 0
      left 0
      right 0
      z-index 5

    .unpaidOrder_back span
      position: absolute;
      left .15rem
      font-size .2rem
      color #fff

    .unpaidOrder_back a, .unpaidOrder_back p
      color #fff
      font-size .15rem

    .index_0
      margin-top .45rem !important

    .container
      margin-top .1rem
      margin-bottom .1rem

      .topTitle
        height .4rem
        line-height .4rem
        border-bottom: 1px solid #ececec;
        font-size .13rem
        background #fff
        .viewDetail
          color #F5A72C
          font-size .13rem
      .goodsList
        padding .1rem 0

        .imgWrapper
          position relative
          width .8rem
          height .8rem

        .imgWrapper img
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          max-width: 100%;
          max-height: 100%;

        .goodInfo
          font-size .13rem

          .goodName
            overflow: hidden
            display: -webkit-box
            -ms-text-overflow: ellipsis
            text-overflow: ellipsis
            -webkit-line-clamp: 2
            line-clamp: 2
            -webkit-box-orient vertical
            white-space normal
            color: #333;
            line-height .15rem
            height .3rem

          .goodType
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis
            margin-top .05rem
            line-height .15rem
            color #999

          .goodPrice
            margin-top .05rem
            line-height .15rem

            .price
              color #FF0101

            .number
              color #999

      .show-more
        color #01A4EF
        font-size .25rem
        background #fff
        margin 0 -15px

      .totalInfo
        background #fff
        padding-bottom .1rem

        .itemNum, .totalPrice, .totalPriceNum
          font-size .13rem
          color #333
          line-height .33rem

        .totalPrice
          font-weight bold

        .totalPriceNum
          color #FF0101
          font-weight bold

        .payNow_btn
          width 1.65rem
          height .4rem
          text-align: center;
          background: #F5A72C;
          border-radius: 4px;
          color: #fff;
          font-size: 0.15rem;
    .noData
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      height: 1.0rem;
      .noOrders
        color #999
        font-size .15rem
        margin-bottom: 0.25rem;
      .goShopping
        .goShopping_btn
          position: absolute;
          top: .25rem
          left 0
          bottom 0
          right 0
          margin auto
          width: 1.65rem;
          height: 0.4rem;
          line-height: 0.4rem;
          font-size: 0.15rem;
          color: #fff;
          background: #F5A72C;
          border-radius: 4px;
  .CloseDetail {
    height: 3rem
    overflow: hidden
  }
  .OneItem,.twoItem{
    height unset
    overflow unset
  }
  .MoreDetail {
    height unset
    overflow unset
  }

</style>
