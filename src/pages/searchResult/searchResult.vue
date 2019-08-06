<template>
  <div>
    <searchResultHeader :rootTreeCategory="rootTreeCategory" :productList="productList"></searchResultHeader>
    <searchResultListResult :rootTreeCategory="rootTreeCategory" :param="param" :data="data"></searchResultListResult>
    <div style="clear:both"></div>
    <searchProductList :hasProductList="hasProductList" :productList="productList"></searchProductList>
    <menu-nav></menu-nav>
  </div>
</template>

<script>
  import searchResultHeader from './components/topHeader'
  import searchResultListResult from './components/listResultCategories'
  import searchProductList from './components/productList'
  import MenuNav from "../../common/menuNav/menuNav";

  export default {
    name: "searchResult",
    data() {
      return {
        data:{},
        productList:[],
        rootTreeCategory: [],
        param:{},
        keyword: '',
      /*  minprice:'',
        maxprice:'',
        sort:'',
        pvid:'',
        collection:'',
        newArrivalDate:'',
        isFreeShip:'',
        unkey:'',*/
        hasProductList: true,
      }
    },
    components: {
      MenuNav,
      searchResultHeader,
      searchResultListResult,
      searchProductList,
    },
    methods: {
      getKeyword() {
        this.keyword = this.$route.params.keyword;
        /*this.catid = this.$route.query.catid;
        this.minprice = this.$route.query.minprice;
        this.maxprice = this.$route.query.maxprice;
        this.sort = this.$route.query.sort;
        this.pvid = this.$route.query.pvid;
        this.collection = this.$route.query.collection;
        this.newArrivalDate = this.$route.query.newArrivalDate;
        this.isFreeShip = this.$route.query.isFreeShip;
        this.unkey = this.$route.query.unkey;
        console.log("this.keyword:" +this.keyword)
        console.log(this.catid,this.minprice,this.maxprice,this.sort, this.pvid, this.collection, this.newArrivalDate, this.isFreeShip, this.unkey)
*/
      },
      getSearchList(res) {
        var catid= this.$route.query.catid;
        var minprice= this.$route.query.minprice;
        var maxprice= this.$route.query.maxprice;
        var sort= this.$route.query.sort;
        var pvid= this.$route.query.pvid;
        var collection= this.$route.query.collection;
        var newArrivalDate= this.$route.query.newArrivalDate;
        var isFreeShip= this.$route.query.isFreeShip;
        var unkey= this.$route.query.unkey;
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
        console.log(JSON.stringify(data));
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
