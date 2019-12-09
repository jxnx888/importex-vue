<template>
  <div>
    <div class="wrapper-container">
      <!-- overflow: hidden：清除子元素相对父元素的超界溢出 -->
      <div style="overflow: hidden;" :style="{height : showMore ? 'auto': showHeight + 'px'}">
        <div ref="content">
          <slot>
<!--             当外界 <show-more> 标签中有元素时，使用 <show-more> 标签中的元素进行渲染，否则使用下面这个 div 进行渲染-->
            <span class="relatedCat">Related Category:</span>
            <router-link
              tag="span"
              v-for="(item,index) of data.rootTree"
              :key="index"
              :to="'/searchResult/'+item.category"
              class="content" >
            <span class="content" >[{{item.category}}] </span>
            </router-link>
          </slot>
        </div>
      </div>
      <div class="listResult_Expand iconfont" @click="_toggleShowMore">
        {{ showMoreClick ? 'Expand &#xe6b5;' : 'Narrow &#xe610;'}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      showHeight: {
        type: Number,
        required: true,
        default: 40
      },
      listResult: Array,
      data:Object,
    },
    data () {
      return {
        showMore: false,
        isLongContent: false,
        buttonColor: false,
        showMoreClick: true
      }
    },
    watch: {
      // 每当内容变化时都重新计算一次高度
      content () {
        this._calculateHeight();
        // console.log("test:" + JSON.stringify(this.content))
      },

    },
    methods: {
      refresh () {
        this._calculateHeight()
      },
      _calculateHeight () {
        // $nextTick()，等待内容获取完毕再计算高度，异步处理
        this.$nextTick().then(() => {
          let contentHeight = this.$refs.content.clientHeight
          if (contentHeight > this.showHeight) {
            this.isLongContent = true
          } else {
            this.isLongContent = false
          }
        })
      },
      _toggleShowMore () {
        this.showMore = !this.showMore;
        // this.buttonColor = !this.buttonColor
      },
      searchLink(){
        var rootTree = this.data.rootTree;
        var param = this.data.param;
        var keywordNow =param.keyword;
        var searchLink ="";
        var htmlTree="";
        // console.log(JSON.stringify(rootTree));
        // console.log("keyword: " + keywordNow);
        if(rootTree.length>0){
          for (var a = 0; a < rootTree.length; a++) {
            var keyword = keywordNow;
            var cid = rootTree[a].cid;
            var minprice = param.minprice;
            var maxprice = param.maxprice;
            var sort = param.sort;
            var page = "1";
            var collection = param.collection;
            // var newArrivalDate = param.newArrivalDate;
            var freeShipping = param.freeShipping;
            searchLink='?keyword='+keyword+'&cid='+cid+'&minprice='+minprice+'&maxprice='+maxprice+
              '&sort='+sort+'&collection='+collection;
            htmlTree+='<a href="'+searchLink+'"><span class="content">'+rootTree.category + '</span>'
            // console.log('searchLink: '+ searchLink)
            // console.log('htmlTree: '+ htmlTree)
          }
        }
      },
    /*  loadData(keyword,catid,price1,price2,srt,page ,collection,freeshipping,category2){
        var url = '..//mobileSearch';
        this.$ajax.post(url,
          this.$qs.stringify({
            keyword: keyword,
            catid:catid,
            price1:price1,
            price2:price2,
            srt:srt,
            page:page,
            pvid:pvid,
            collection:collection,
            newArrivalDate:category2,
            flagRange:flagRange,
            backRows : backRows,
            isFreeShip:freeshipping,
            unkey:unkey
          })
        )
          .then(this.getSearchListSucc)
          .catch(function (res) {
            // console.log("error")
          })
      },*/
      getSearchListSucc(res) {
        const data = res.data;
        this.data = data;
      }
    },
    mounted() {
      // this.searchLink();
    }
  }

</script>

<style scoped lang="stylus">

  .wrapper-container
    position relative
    z-index 9
    .relatedCat
      font-size .12rem
      line-height .4rem
    .content
      color #999999
      line-height .4rem
      font-size .12rem

    .listResult_Expand.iconfont
      position: absolute
      right: 0
      bottom: 0rem
      font-size: .12rem
      background: #fff

</style>
