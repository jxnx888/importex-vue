<template>
  <div class="product">
    <product-top-nav></product-top-nav>
    <product-swiper  :productImg="productImg"></product-swiper>
    <productNamePrice :productName="productName"
                      :productPriceList="productPriceList"
                      :productSold="productSold"
                      :productMOQ="productMOQ"></productNamePrice>
    <div style="clear: both;"></div>
    <product-add-cart  :productInfo="productInfo"></product-add-cart>
    <select-color-size></select-color-size>
    <free-shipping></free-shipping>
    <div style="clear: both;"></div>
    <coupons></coupons>
    <detail  :commodityDetails="commodityDetails"></detail>
    <div style="clear: both;"></div>
    <product-related-product></product-related-product>
    <image-list :imageList="imageList"></image-list>
    <add-cart-bottom></add-cart-bottom>
    <customer-reviews :customerReviews="customerReviews"></customer-reviews>
    <question-answer :questionAnswer="questionAnswer"></question-answer>
    <div style="clear: both;"></div>
    <related-searches></related-searches>

  </div>
</template>

<script>
  import productTopNav from './components/topNav'
  import productSwiper from './components/topSwiper'
  import productRelatedProduct from './components/relatedProduct'
  import productNamePrice from './components/namePrice'
  import productAddCart from './components/addCart'
  import SelectColorSize from "./components/selectColorSize";
  import FreeShipping from "./components/freeShipping";
  import Coupons from "./components/coupons";
  import Detail from "./components/detail";
  import ImageList from "./components/imageList";
  import CustomerReviews from "./components/customerReviews";
  import QuestionAnswer from "./components/questionAnswer";
  import relatedSearches from "./components/relatedSearches";
  import AddCartBottom from "./components/addCartBottom";

  export default {
    name: "product",
    components: {
      AddCartBottom,
      relatedSearches,
      QuestionAnswer,
      CustomerReviews,
      ImageList,
      Detail,
      Coupons,
      FreeShipping,
      SelectColorSize,
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
        productMOQ: '',
        imageList:[],
        customerReviews:[],
        commodityDetails:[],
        questionAnswer:[],
      }
    },
    methods: {
      getKeyword() {
        //提取url路由中的参数产品id
        this.keyword = this.$route.params.id;
        // console.log("this.keyword:" +this.keyword)
      },
      // getSearchList(res) {
      //   // let url = 'http://192.168.1.163:8085/product/getProductDetailsJ';
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
        this.$ajax.get('/static/mock/index.json') // npm run build ==>  /static/mock/index.json
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
          this.imageList=this.productInfo.imageList;
          this.customerReviews = this.productInfo.customerReviews;
          this.commodityDetails = this.productInfo.commodityDetails
          this.questionAnswer = this.productInfo.questionAnswer

          // console.log('test ' +JSON.stringify(this.commodityDetails))
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
.product
  background #eee
</style>
