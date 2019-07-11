<template>
  <div class="product">
    <product-top-nav></product-top-nav>
    <product-swiper  :current400Img="current400Img"></product-swiper>
    <productNamePrice :productName="productName"
                      :productPriceList="productPriceList"
                      :productSold="productSold"
                      :productMOQ="productMOQ"></productNamePrice>
    <div style="clear: both;"></div>
    <product-add-cart  :goodColorSize="goodColorSize"></product-add-cart>
    <select-color-size :goodColorSize="goodColorSize"></select-color-size>
    <free-shipping></free-shipping>
    <div style="clear: both;"></div>
    <coupons></coupons>
    <detail  :commodityDetails="currentCommodityDetails"></detail>
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
        goodsID:'',
        productInfo: [],
        productImg: [],
        productName:'',
        productPriceList:[],
        productSold:'',
        productMOQ: '',
        imageList:[],
        customerReviews:[],
        commodityDetails:{},
        currentCommodityDetails:[],
        questionAnswer:[],
        current400Img:[],
        goodColorSize:[],
      }
    },
    methods: {
      getKeyword() {
        //提取url路由中的参数产品id
        this.keyword = this.$route.params.id;
      },
      getSearchList(res) {
        let url = 'http://192.168.1.163:8085/product/getProductDetailsJ';
        this.$ajax.post(url,
          //pid 为传值的key
          this.$qs.stringify({pid:this.keyword})
        )
          .then(this.getSearchListSucc)
          .catch(function (res) {
            console.log("error, no data")
          })
      },

      getSearchListSucc(res) {
        const data = res.data.goodsBean;
        // console.log("data: "+JSON.stringify(data ));
        this.productImg = data.pImage;
        this.changeTo400Img();
        this.productName= data.pName;
        this.productSold = data.sell;
        this.productMOQ = data.minOrder;
        this.productPriceList = data.priceList;
        this.commodityDetails = data.pInfo;
        this.currentCommodityDetailsFN();
        this.goodColorSize = data.type;
        // this.productImg = data.spider.pImage;
        // this.changeTo400Img();
        // this.productName= data.title;
        // this.productSold = data.spider.sell;
        // this.productMOQ = data.spider.minOrder;
        // this.productPriceList = data.spider.priceList;
        // this.commodityDetails = data.spider.pInfo;
        // this.currentCommodityDetailsFN();
        // this.goodColorSize = data.spider.type;
      },
      changeTo400Img(){
        // 替换为轮播图所使用的img的尺寸
        for (var i=0;i<this.productImg.length;i++){
          // console.log(" this.productImg[i]" + this.productImg[i])
          this.productImg[i].replace('60x60.jpg','400x400.jpg')
          // console.log(" this.productImg:::"+ this.productImg[i].replace('60x60.jpg','400x400.jpg'))
          this.current400Img.push(this.productImg[i].replace('60x60.jpg','400x400.jpg'))
        }
        //end
      },
      currentCommodityDetailsFN(){
        // data.spider.pInfo;转换为所需的格式
        var newArr=[];
        var lastArr=[];
        var arr=Object.values(this.commodityDetails);
        arr.forEach((ele,i)=>{  newArr.push(ele.split(':'));  });
        newArr.forEach((ele,i)=>{  lastArr.push( JSON.parse(`{"${ele[0]}":"${ele[1]}"}`));})
        // console.log(lastArr);
        // console.log(JSON.stringify(lastArr));
        this.currentCommodityDetails = lastArr;
      },
      // getSearchList() {
      //   this.$ajax.get('/static/mock/index.json') // npm run build ==>  /static/mock/index.json
      //     .then(this.getSearchListSucc)
      // },
      // getSearchListSucc(res) {
      //   res = res.data;
      //   if (res.ret && res.data) {
      //     const data = res.data;
      //     this.productInfo = data.goodsBean;
      //     // console.log(typeof this.productInfo)//object
      //     this.productImg = this.productInfo.url;
      //     this.productName=this.productInfo.pName;
      //     this.productPriceList=this.productInfo.priceList;
      //     this.productSold=this.productInfo.sold;
      //     this.productMOQ=this.productInfo.minOrder;
      //     this.imageList=this.productInfo.imageList;
      //     this.customerReviews = this.productInfo.customerReviews;
      //     this.commodityDetails = this.productInfo.commodityDetails
      //     this.questionAnswer = this.productInfo.questionAnswer
      //
      //     // console.log('test ' +JSON.stringify(this.commodityDetails))
      //   }
      // }
    },
    mounted() {
      this.getKeyword();
      this.getSearchList();
    },
  }
</script>

<style scoped lang="stylus">
.product
  background #eee
</style>
