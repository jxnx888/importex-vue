<template>
  <div>
    <searchResultHeader></searchResultHeader>
    <searchResultListResult :listResult="listResult"></searchResultListResult>
    <div style="clear:both"></div>
<!--    <searchProductList :productList="productList"></searchProductList>-->
  </div>
</template>

<script>
  import searchResultHeader from './components/topHeader'
  import searchResultListResult from './components/listResultCategories'
  import searchProductList from './components/pruductList'

  export default {
    name: "searchResult",
    data() {
      return {
        productList:[],
        listResult: [],
      }
    },
    components: {
      searchResultHeader,
      searchResultListResult,
      searchProductList
    },
    methods: {

      getSearchList() {
        // this.$http.get('https://www.import-express.com/searchAutocomplete') // npm run build ==>  /static/mock/index.json
        //   .then(this.getSearchListSucc)
        this.$http.get('/api/index.json') // npm run build ==>  /static/mock/index.json
          .then(this.getSearchListSucc)
      },
      getSearchListSucc(res) {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.listResult = data.listResult;
          this.productList = data.productList;
          // console.log(JSON.stringify(this.listResult))
          // console.log(JSON.stringify(this.productList))
        }
      }
    },
    mounted() {
      this.getSearchList()

    }
  }
</script>

<style scoped>

</style>
