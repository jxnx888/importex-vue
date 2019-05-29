<template>
  <div>
    <searchResultHeader></searchResultHeader>
    <searchResultListResult ></searchResultListResult>
    <div style="clear:both"></div>
<!--    <searchProductList :productList="productList"></searchProductList>-->
    <searchProductList ></searchProductList>
  </div>
</template>

<script>
  import searchResultHeader from './components/topHeader'
  import searchResultListResult from './components/listResultCategories'
  import searchProductList from './components/productList'

  export default {
    name: "searchResult",
    data() {
      return {
        // productList:[],
        // listResult: [],
        // keyword:''
      }
    },
    components: {
      searchResultHeader,
      searchResultListResult,
      searchProductList,
     },
    // methods: {
    //   getKeyword(){
    //     this.keyword = this.$route.params.keyword;
    //     // console.log(this.keyword)
    //   },
    //   getSearchList(res) {
    //     var url = 'http://192.168.1.127:8085/mobileSearch';
    //     this.$ajax.post( url,
    //       this.$qs.stringify({keyword : this.keyword})
    //     )
    //       .then(this.getSearchListSucc)
    //       .catch(function(res){
    //         // console.log("error")
    //       })
    //   },
    //   getSearchListSucc(res) {
    //     this.productList = res.data.goodslist;
    //
    //     // console.log(JSON.str ingify(this.productList[1].priceList[1].price));
    //     // console.log(this.productList.length);
    //     // return this.productList
    //   }
    // },
    // mounted() {
    //   this.getKeyword();
    //   this.getSearchList();
    // }

  }
</script>

<style scoped>

</style>
