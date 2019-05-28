<template>
    <div class="listResult">
      <div class="col-xs-9 " >
        <show-more ref="childShowMore" :showHeight="showHeight" :content="listResult" ></show-more>
      </div>
      <div class="col-xs-3 listResult_Expand iconfont" @click="childShowMoreClick">
        {{ showMoreClick ? 'Expand &#xe6b5;' : 'Narrow &#xe610;'}}
      </div>
    </div>
</template>

<script>
  import showMore from './showMore'

  export default {
    name: "listResultCategories",
    props:{
      listResult: Array
    },
    components: {
      showMore
    },
    data() {
      return {
        showHeight: 40,
      showMoreClick: true
      }
    },
    methods: {
      childShowMoreClick(){
        this.$refs.childShowMore._toggleShowMore();
        this.showMoreClick = !this.showMoreClick;
      },
      test(){
        console.log("test")
        console.log(this.listResult)
      },
    },

    // computed: {
    //   //only show category
    //   filteredItems: function () {
    //     var getCategory=this.listResult;
    //     for (var i=0, i < getCategory.length, i++){
    //
    //     }
    //     return this.listResult.category;
    //   }
    // },

    // mounted() {
    //   this.test()
    // }
  }
</script>

<style scoped lang="stylus">
.listResult
  height .39rem
  line-height .39rem
  border-top 1px solid rgba(236,236,236,1)
  border-bottom 1px solid rgba(236,236,236,1)
  width 100%
  z-index 9
  position: fixed
  top .5rem
  background-color #fff
  .listResult_Expand
    font-size .12rem


</style>
