<template>
  <div class="detail">
    <div class="col-xs-6 detail_menu"
         :class="{selected:shows === 1}" @click="commodityDetailsClick()">
      Commodity Details
    </div>
    <div class="col-xs-6 detail_menu"
         :class="{selected:shows === 2}" @click="wholesalePriceInquiryClick()">
      Wholdsale Price Inquiry
    </div>

    <div class="wrapper-container col-xs-12 detail_content">
      <div v-for="(item, index) in showList"
           class="content"
      >
        <div class="col-xs-6 detail_left" v-for="(value, key, innerindex) in item">
          {{key}}:
        </div>
        <div class="col-xs-6 detail_right" v-for="(value, key, innerindex2) in item">
          {{value}}
        </div>

      </div>
      <div @click="showAll = !showAll" class="show-more text-center" >{{showAll?'Close':'More'}}<span class="iconfont">{{showAll?'&#xe65b;':'&#xe639;'}}</span></div>

    </div>
    <div class="wholesaleInquiry" v-if="showWholesaleInquiry">
      <div class="wholesaleInquiry_back">
        <div @click="hideWholesaleInquiry">
          <span class="iconfont ">&#xe79b;</span>
          <p class="text-center">Request Business Discount?</p>
        </div>
      </div>
      <div class="col-xs-12 wholesaleInquiry_title">Your On-going Order Quantity?</div>
      <div class="col-xs-12 wholesaleInquiry_input">
        <input id="onGoingQty"></input>
        <div class="validation" v-if="onGoingQtyShow">The question body is empty. Please add text to it.</div>
      </div>
      <div class="col-xs-12 wholesaleInquiry_title">Your Target Price?</div>
      <div class="col-xs-12 wholesaleInquiry_input">
        <input id="targetPrice"></input>
        <div class="validation" v-if="targetPriceShow">The target price is empty. Please add text to it.</div>
      </div>
      <div class="col-xs-12 wholesaleInquiry_ask text-center">
        <button @click="checkGuestBook()">Ask</button>
      </div>
    </div>
    <div v-if="askSuccess" class="askSuccess">
      <div class="askSuccessContent">
        <p>The message has been submitted, we will reply to you as soon as possible!</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detail",
    props: {
      commodityDetails:Array,
     },
    data() {
      return {
        shows: 1, //导航默认值
        showAll:false,  //标记数据是否需要完全显示的属性
        showWholesaleInquiry:false,
        onGoingQtyShow:false,
        targetPriceShow:false,
        askSuccess:false,
      }
    },
    methods: {
      commodityDetailsClick() {
        this.shows = 1;
      },
      wholesalePriceInquiryClick() {
        this.shows = 2;
        this.showWholesaleInquiry = true;
      },
      hideWholesaleInquiry(){
        this.shows = 1;
        this.showWholesaleInquiry = false;
      },
      checkGuestBook(res){
          let url = 'http://192.168.1.163:8085/guestBook/addGuestBook';
          var onGoingQty = $("#onGoingQty").val();
          var targetPrice = $("#targetPrice").val();
          if(onGoingQty == '' ){
            this.onGoingQtyShow = true;
            setTimeout(() => {
              this.onGoingQtyShow =false;
            },5000);
            return
          }
          else if (targetPrice == ''){
            this.targetPriceShow = true;
            setTimeout(() => {
              this.targetPriceShow =false;
            },5000);
            return
          }
          this.$ajax.post(url,
            //pid 为传值的key
            this.$qs.stringify({pid:this.keyword})
          )
            .then(this.checkGuestBookSucc)
            .catch(function (res) {
              console.log("error, no data")
            })
      },

      checkGuestBookSucc(res) {
        console.log("res.data: "+res.data)
        if(res.data === -1){
        console.log('No sign in')
        }
        if(res.data>0){
          this.askSuccess =true;
          setTimeout(() => {
            this.askSuccess =false;
          },3000)
        }
      }

    },
    computed:{
      showList:function(){
        if(this.showAll === false){                    //当数据不需要完全显示的时候
          var showList = [];
          if(this.commodityDetails.length > 3){　　　　　　　//这里我们先显示前三个
            for(var i=0;i<3;i++){
              showList.push(this.commodityDetails[i])
            }
          }else{
            showList = this.commodityDetails
          }
          return showList;　　　　　　　　　　　　　　　　 //返回当前数组
        }else{
          return this.commodityDetails;
        }
      },

    },
   watch: {}
  }
</script>

<style scoped lang="stylus">
.detail
  background-color #fff
  margin-top .1rem
  .selected
    color #FF4848
    border-bottom 3px solid #FF4848 !important

  .col-xs-6
    padding 0

  .detail_menu
    background-color #fff
    font-size .14rem
    height .4rem
    line-height .4rem
    text-align: center
    border 1px solid #eee

  .detail_content
    position: relative;
    padding-bottom: 40px;
    background-color #fff

    .content
      .detail_left, .detail_right
        font-size .14rem
        line-height .38rem
        text-transform capitalize
        white-space:nowrap
        overflow:hidden
        text-overflow:ellipsis
      .detail_left
        color #999
      .detail_right
        color #333
    .show-more
      height .4rem
      line-height .4rem
      font-size .15rem
      font-weight bold
  .wholesaleInquiry
    position: fixed;
    top: 0
    bottom:0
    background: #fff
    width:100%
    z-index: 99
    .wholesaleInquiry_back
      height .45rem
      line-height .45rem
      background-color #000
    .wholesaleInquiry_back span
      position: absolute;
      left .15rem
      font-size .2rem
      color #fff
    .wholesaleInquiry_back a, .wholesaleInquiry_back p
      color #fff
      font-size .15rem
    .wholesaleInquiry_title
      height: .48rem
      line-height: .48rem
      font-size: .15rem
      color: #666
    .wholesaleInquiry_input
      .validation
        color red
        font-size .14rem
        line-height .35rem
    .wholesaleInquiry_input input
      height: .32rem
      line-height: .32rem
      width: 100%
      background: #ececec
      font-size: .15rem
      color: #666
      padding: 0 .1rem
    .wholesaleInquiry_ask button
      height: .39rem
      line-height: .39rem
      width 100%
      color #fff
      background #000
      margin .32rem 0
      border-radius: .04rem;
  .askSuccess
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 10px;
    background: rgba(0,0,0,0.6);
    z-index: 99;
    .askSuccessContent
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background #fff
      height .7rem
      width 85%
      border-radius .1rem
      margin auto
    .askSuccessContent p
      padding .15rem
      font-size .15rem
      line-height .2rem
      color #4CBD27
</style>
