<template>
  <div class="customerReviews " v-if="showRevier">
    <div class="text-left customerReviews_title">Customer Reviews</div>
    <div
      v-for="(item, index) in this.reviewInfo"
      class="customerReviews_content container">
      <div class="customerName">
        {{item.review_name | format}}
        <span>{{item.country}}</span>
      </div>
      <div class="customerComments">
        {{item.review_remark}}
      </div>
    </div>
<!--    <div @click="showAll = !showAll" class="iconfont show-more text-center">{{word}}</div>-->
    <div

      @click="showAll = !showAll" class="show-more text-center" >
      {{showAll?'Close ':'View All('+(this.reviewInfo.length)+')' }}<span class="iconfont">{{showAll?'&#xe65b;':'&#xe639;'}}</span></div>

  </div>
</template>

<script>
  export default {
    name: "customerReviews",
    props: {
      customerReviews: Array,
      productID:String
    },
    data () {
      return {
        showAll:false,  //标记数据是否需要完全显示的属性
        reviewInfo:[],
        showRevier:true,
      }
    },
    computed:{
      showList:function(){
        if(this.showAll === false){                    //当数据不需要完全显示的时候
          var showList = [];
          if(this.customerReviews.length > 3){　　　　　　　//这里我们先显示前三个
            for(var i=0;i<3;i++){
              showList.push(this.customerReviews[i])
            }
          }else{
            showList = this.customerReviews
          }
          return showList;　　　　　　　　　　　　　　　　 //返回当前数组
        }else{
          return this.customerReviews;
        }
      },

    },
    methods:{
      getCustomerReview(res) {
        let url = '..//spider/getReviewInfo';
        this.$ajax.post(url,
          //pid 为传值的key
          this.$qs.stringify({pid:this.productID})
        )
          .then(this.getCustomerReviewSucc)
          .catch(function (res) {
            console.log("Error, no data")
          })
      },

      getCustomerReviewSucc(res) {
        const data = res.data.reviewInfo;
        this.reviewInfo = data;
        if(this.reviewInfo == "0"){
          this.showRevier = false;
          console.log("No customer review!")
        }
      },
    },

    watch: {
      productID:function(newVal,oldVal){
        // console.log(newVal)
        this.productID = newVal;
        // console.log(JSON.stringify(this.goodsInfo));
        this.getCustomerReview();
      }
    },
    filters:{
      format:function(name){
        var newName='';
        if(name.length<=2){
          newName=name;
        }else{
          var char='';
          char='******';
          newName=name.substring(0,1)+char+name.substr(-1,1);
        }
        return newName
      }
    }
  }
</script>

<style scoped lang="stylus">
  .customerReviews
    background-color #fff
    .customerReviews_title
      font-size .15rem
      line-height .34rem
      padding-left 15px
      padding-right 15px
      background-color #fff

    .customerReviews_content
      min-height .79rem
      line-height .79rem
      border-top 1px solid #eeeeee
      border-bottom 1px solid #eeeeee
      background-color #fff
      .customerName
        font-size .14rem
        height .3rem
        line-height .3rem

      .customerComments
        font-size .14rem
        color #333
        min-height .45rem
        line-height .22rem
    .show-more
      height .38rem
      line-height .38rem
      font-size .15rem
      font-weight bold
</style>
