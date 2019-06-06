<template>
    <div class="home">

<!--        <sheet-list v-for="(item,index) in rootTreeCategory" :item="item"></sheet-list>-->
        <sheet-list ></sheet-list>
    </div>
</template>

<script>

  import myMusicSheetList from './testComponent'

  export default {
    components:{'sheet-list':myMusicSheetList},
    data () {
      return {
        rootTreeCategory:[],
      }
    },
    methods: {

        getKeyword() {
          this.keyword = this.$route.params.keyword;
          // console.log("this.keyword:" +this.keyword)
        },
        getSearchList(res) {
          var url = 'http://192.168.1.127:8085/mobileSearch';
          this.$ajax.post(url,
            this.$qs.stringify({keyword: 'dress'})
          )
            .then(this.getSearchListSucc)
            .catch(function (res) {
              // console.log("error")
            })
        },
        getSearchListSucc(res) {
          const data = res.data;
          let _this = this;
          this.productList = data.goodslist;
          this.rootTreeCategory = data.rootTree;
          // console.log("test: " + JSON.stringify(this.rootTreeCategory));
          // console.log("test: " + typeof this.productList);


        },

    },
    mounted() {
      this.getKeyword();
      this.getSearchList();
    }
  }
</script>


<style scoped>

</style>
