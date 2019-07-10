<template>
  <div>
    <searchResultHeader :rootTreeCategory="rootTreeCategory" :productList="productList"></searchResultHeader>
    <searchResultListResult :rootTreeCategory="rootTreeCategory" :param="param" :data="data"></searchResultListResult>
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
        data:{},
        productList:[],
        rootTreeCategory: [],
        param:{},
        keyword: '',
        hasProductList: true,
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
        var catid= this.$route.params.catid;
        var minprice= this.$route.params.minprice;
        var maxprice= this.$route.params.maxprice;
        var sort= this.$route.params.sort;
        var pvid= this.$route.params.pvid;
        var collection= this.$route.params.collection;
        var newArrivalDate= this.$route.params.newArrivalDate;
        var isFreeShip= this.$route.params.isFreeShip;
        var unkey= this.$route.params.unkey;
        console.log(catid, minprice,maxprice,sort, pvid, collection, newArrivalDate, isFreeShip, unkey)
        var url = 'http://192.168.1.163:8085/mobileSearch';
        this.$ajax.post(url,
          this.$qs.stringify({
            keyword: this.keyword,
            catid:catid,
            minprice:minprice,
            maxprice:maxprice,
            sort:sort,
            pvid:pvid,
            collection:collection,
            newArrivalDate:newArrivalDate,
            isFreeShip:isFreeShip,
            unkey:unkey
          })
        )
          .then(this.getSearchListSucc)
          .catch(function (res) {
            console.log("error")
          })
      },
      getSearchListSucc(res) {
        const data = res.data;
        let _this = this;
        this.data = data;
        this.productList = data.goodslist;
        this.rootTreeCategory = data.rootTree;
        this.param = data.param;
        // console.log("test: " + JSON.stringify(this.rootTreeCategory));
        // console.log("test: " + typeof this.productList);

        var catid, minprice,maxprice,sort,page,pvid,collection,category2,flagRange,backRows,freeshipping,unkey;
        var param = data.param;
        catid = param.catid;
        sort = param.sort;
        minprice = param.minprice;
        maxprice = param.maxprice;
        pvid =param.pvid;
        collection = param.collection;
        backRows = param.backRows;
        freeshipping = param.freeshipping;
        unkey = param.unkey;

        // 搜索后，是否有产品
        if (this.productList !== '' && this.productList !== undefined && this.productList !== 'undefined') {
          // console.log("test: " + JSON.stringify(this.productList));
          _this.hasProductList = true;
        } else {
          _this.hasProductList = false
        }
        //搜索对应catid

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
