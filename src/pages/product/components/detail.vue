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
      }
    },
    methods: {
      commodityDetailsClick() {
        this.shows = 1;
      },
      wholesalePriceInquiryClick() {
        this.shows = 2;
        window.open('https://www.import-express.com/mapa/mSend_BusinessInquiryNow.html')
      },
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
    font-size .15rem
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
      .detail_left
        color #999
      .detail_right
        color #333
    .show-more
      height .4rem
      line-height .4rem
      font-size .15rem
      font-weight bold

</style>
