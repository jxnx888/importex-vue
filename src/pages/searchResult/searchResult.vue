<template>
  <div>
    <searchResultHeader :rootTreeCategory="rootTreeCategory"></searchResultHeader>
    <searchResultListResult></searchResultListResult>
    <div style="clear:both"></div>
    <searchProductList :hasProductList="hasProductList" :productList="productList"></searchProductList>
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
        productList:[],
        rootTreeCategory: [],
        keyword: '',
        hasProductList: true
      }
    },
    components: {
      searchResultHeader,
      searchResultListResult,
      searchProductList,
    },
    methods: {
      getKeyword() {
        this.keyword = this.$route.params.keyword;
        // console.log("this.keyword:" +this.keyword)
      },
      getSearchList(res) {
        var url = 'http://192.168.1.127:8085/mobileSearch';
        this.$ajax.post(url,
          this.$qs.stringify({keyword: this.keyword})
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

        if (this.productList !== '' && this.productList !== undefined && this.productList !== 'undefined') {
          // console.log("test: " + JSON.stringify(this.productList));
          _this.hasProductList = true;
        } else {
          _this.hasProductList = false
        }
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
