<template>
  <div>
    <product-top-nav></product-top-nav>
    <product-swiper  :productImg="productImg"></product-swiper>
    <productNamePrice :productName="productName"
                      :productPriceList="productPriceList"
                      :productSold="productSold"
                      :productMOQ="productMOQ"></productNamePrice>
    <div style="clear: both;"></div>
    <product-add-cart></product-add-cart>
    <product-related-product></product-related-product>
   </div>
</template>

<script>
  import productTopNav from './components/topNav'
  import productSwiper from './components/topSwiper'
  import productRelatedProduct from './components/relatedProduct'
  import productNamePrice from './components/namePrice'
  import productAddCart from './components/addCart'

  export default {
    name: "product",
    components: {
      productSwiper,
      productTopNav,
      productNamePrice,
      productRelatedProduct,
      productAddCart
    },
    data() {
      return {
        keyword: '',
        productInfo: [],
        productImg: [],
        productName:'',
        productPriceList:[],
        productSold:'',
        productMOQ: ''
      }
    },
    methods: {
      getKeyword() {
        //提取url路由中的参数产品id
        this.keyword = this.$route.params.id;
        // console.log("this.keyword:" +this.keyword)
      },
      // getSearchList(res) {
      //   // let url = 'http://192.168.1.127:8085/product/getProductDetailsJ';
      //   this.$ajax.post(url,
      //     //pid 为传值的key
      //     this.$qs.stringify({pid: this.keyword})
      //   )
      //     .then(this.getSearchListSucc)
      //     .catch(function (res) {
      //       console.log("error")
      //     })
      // },

      // getSearchListSucc(res) {
      //   const data = res.data;
      //   let _this = this;
      //   this.productInfo= data.goodsBean;
      //   this.productImg = this.productInfo.pImage;
      //   // console.log(JSON.stringify(this.productImg ))
      // },
      getSearchList() {
        this.$ajax.get('/api/index.json') // npm run build ==>  /static/mock/index.json
          .then(this.getSearchListSucc)
      },
      getSearchListSucc(res) {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.productInfo = data.goodsBean;
          // console.log(typeof this.productInfo)//object
          this.productImg = this.productInfo.url;
          this.productName=this.productInfo.pName;
          this.productPriceList=this.productInfo.priceList;
          this.productSold=this.productInfo.sold;
          this.productMOQ=this.productInfo.minOrder;

          // console.log( this.productPriceList)
        }
      }
    },
    mounted() {
      this.getKeyword();
      this.getSearchList();
    }
  }
</script>

<style scoped lang="stylus">

</style>
