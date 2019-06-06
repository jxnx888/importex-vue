<template>
  <div class="customerReviews ">
    <div class="text-left customerReviews_title">Customer Reviews</div>
    <div
      v-for="(item, index) in showList"
      class="customerReviews_content container">
      <div class="customerName">
        {{item.name}}
        <span>{{item.country}}</span>
      </div>
      <div class="customerComments">
        {{item.comment}}
      </div>
    </div>
<!--    <div @click="showAll = !showAll" class="iconfont show-more text-center">{{word}}</div>-->
    <div @click="showAll = !showAll" class="show-more text-center" >{{showAll?'Close ':'View All '}}<span class="iconfont">{{showAll?'&#xe65b;':'&#xe639;'}}</span></div>

  </div>
</template>

<script>
  export default {
    name: "customerReviews",
    props: {
      customerReviews: Array
    },
    data () {
      return {
        showAll:false,  //标记数据是否需要完全显示的属性
      }
    },
    methods:{
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
    mounted() {
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
