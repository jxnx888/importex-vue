<template>
  <div class="currentOrder">
    <div class="currentOrder_back">
      <div @click="handleGoBackClick">
        <span class="iconfont ">&#xe79b;</span>
        <p class="text-center">Current History</p>
      </div>
    </div>
    <div class="container"  v-for="(item, index) in listOrders" :class="'index_'+index">
      <div class="row currentOrderTitle">
        <div class="col-xs-7 orderNo">
          OrderNo:<span class="orderNumber">{{item.orderNo}}</span>
          <img  v-if="item.isDropshipOrder==1" class="dropShip" src="https://www.kidsproductwholesale.com/img/m-account/vip-s.png" alt="">
        </div>
        <div class="col-xs-5 orderNo text-right">
          {{item.create_time}}
        </div>
      </div>
      <router-link tag="div" :to="{name:'/myAccount/OrderHistoryDetail',params:{orderNo: item.orderNo}}" class="row currentOrderInfo">
        <div class="col-xs-3 title">
          Status:
        </div>
        <div class="col-xs-9 status">
          <div v-if="item.state==5&&item.comformFlag==1"><!--付款确认中-->
            <span v-if="item.arrivalflag == 0">Verifying your payment with PayPal or your credit card.</span>
            <span v-if="item.arrivalflag == 1">Payment received, verifying details of the order.</span>
          </div>
          <div v-if="item.state==5&&item.comformFlag==0"><!--付款确认中-->
            <span>Payment received, verifying details of the order.</span>
          </div>
          <div v-if="item.state==1"><!--采购中-->
            <span>Fulfilling your order.</span>
          </div>
          <div v-if="item.state==3"><!--出运中-->
            <span>On the way to you.</span>
          </div>
        </div>
        <div class="col-xs-3 title">
          Shipping:
        </div>
        <div class="col-xs-9 info">
          <span>International shipping time {{item.shipDays}} days,</span>
          <span>plus {{item.processDays}} days processing in China.</span>
        </div>
      </router-link>
      <div class="row currentOrderPrice">
        <div class="col-xs-3 text-center">
          <div class="cancelOrder"
               v-if="item.state==5&&item.comformFlag==1&&item.arrivalflag==1"
               @click="cancelOrder(item.orderNo,item.payAmount)">
            Cancel Order
          </div>
          <div class="cancelOrder"
               v-if="item.state==5&&item.comformFlag!==1"
               @click="cancelOrder(item.orderNo,item.payAmount)">
            Cancel Order
          </div>
        </div>
        <div class="col-xs-3 text-center">
          <div class="tracking"
               v-if="item.state!=0 && item.state!=6 && item.state!=-1"
               @click="cancelOrder(item.orderNo,item.payAmount)">Tracking</div>
        </div>
        <div class="col-xs-6 text-right">
          Order Price: <span>{{item.payAmount}} USD</span>
        </div>
      </div>
    </div>
    <div class="feedback_wrapper" v-if="showFeedback">
      <div class="feedback_master" @click="handldFeedbackClose()"></div>
      <div class="feedback_box">
        <div class="feedback_title text-center">Please enter your comments</div>
        <textarea id="feedbackText" class="" rows="5" placeholder="Please enter..."></textarea>
        <div class="text-center emptyFB" v-if="emptyFBShow">Comments is empty!</div>
        <div class="feedback_submit text-center" @click="submitFeedback()">Submit</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "currentOrder",
    data() {
      return {
        listOrders: [],
        showFeedback:false,
        emptyFBShow:false,

      }
    },
    methods: {
      getcurrentOrder(res) {
        let url = '..//individual/getCurrentOrders';
        this.$ajax.get(url)
          .then(this.getcurrentOrderSucc)
          .catch(function (res) {
            console.log("error, no data")
          })
      },

      getcurrentOrderSucc(res) {
        const data = res.data.listOrders;
        this.listOrders = data;
        // console.log(JSON.stringify(data));

      },
      handleGoBackClick() {
        this.$router.go(-1);
      },
      cancelOrder(orderNo, amount){
        this.showFeedback = true;
        console.log("orderNo: "+orderNo)
      },
      handldFeedbackClose(){
        this.showFeedback = false;
      },
      submitFeedback(){
        var feedback = $('#feedbackText').val();
        if (feedback == ''){
          this.emptyFBShow = true;
          setTimeout(() => {
            this.emptyFBShow =false;
          },5000);
          return
        }
        else {
          this.showFeedback = false;
          console.log("submited");
        }
      }
    },
    mounted() {
      this.getcurrentOrder();
    },

  }
</script>

<style scoped lang="stylus">
  .currentOrder
    background-color #f7f7f7
    .currentOrder_back
      height .45rem
      line-height .45rem
      background-color #01A4EF
      position: fixed
      top 0
      left 0
      right 0
      z-index 5

    .currentOrder_back span
      position: absolute;
      left .15rem
      font-size .2rem
      color #fff

    .currentOrder_back a, .currentOrder_back p
      color #fff
      font-size .15rem

    .currentOrder_searchBox
      /*background-color: #eee*/
      height: .45rem
      line-height: .45rem
      width: 100%
      position: relative;
    .index_0
      margin-top .45rem!important
    .container
      margin-top .1rem
      background-color #fff
      .currentOrderTitle
        border-bottom: 1px solid #ececec;
        .orderNo
          height .4rem
          line-height .4rem
          color #999
          font-size .13rem
          .orderNumber
            color #333
          .dropShip
            width .18rem
            height .2rem
      .currentOrderInfo
        border-bottom: 1px solid #ececec;
        padding-bottom .1rem
        padding-top .1rem
        .title, .status,.info
          color #999
          font-size .14rem
          line-height .3rem
        .status
          color #F5A72C
          line-height .18rem
          padding-bottom .1rem
        .info
          color #666
          line-height .18rem
      .currentOrderPrice
        line-height .45rem
        font-size .13rem
        color #999
        .col-xs-3
          @media screen and (max-width: 320px)
            font-size .12rem
            padding 0 .1rem
        .col-xs-3,.col-xs-2, .col-xs-6
          height .45rem
          .cancelOrder, .tracking
            border 1px solid #ececec
            color #999
            font-size .13rem
            height .3rem
            line-height .3rem
            margin-top .075rem
            -webkit-border-radius: 4px
            -moz-border-radius: 4px
            border-radius: 4px
          .cancelOrder
            width .9rem
          .tracking
            width .7rem
            background-color #F5A72C
            color #fff
      .currentOrderPrice span
        color #ff0000
    .feedback_wrapper

      .feedback_master
        position fixed
        top 0
        bottom 0
        left:0
        right 0
        z-index 5
        background #000
        opacity .6
      .feedback_box
        position: fixed
        top 50%
        left 50%
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        background-color #fff
        width 85%
        border-radius .06rem
        z-index 6
        overflow: hidden;
        padding .15rem .15rem 0 .15rem
        .feedback_title
          line-height .3rem
        .feedback_submit
          width 100%
          color #0BB20C
          border-top 1px solid #f7f7f7
          margin-top .2rem
          line-height .4rem
        .emptyFB
          color red
          font-size .13rem
          padding .2rem 0
      .feedback_box textarea
        display: block
        width 2.4rem
        height 1.65rem
        background-color #f7f7f7
        border-radius: .1rem;
        padding .05rem .15rem
        margin 0 auto
</style>
