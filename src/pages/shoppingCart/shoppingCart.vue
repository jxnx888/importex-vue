<template>
  <div class="shoppingCart">

    <topHeader></topHeader>
    <checkout></checkout>
    <div v-show="shopCarEmpty">
      <cart-list :shoppingCartInfor="shoppingCartInfor"></cart-list>
      <qualityControl></qualityControl>
      <finalPrice></finalPrice>
    </div>
    <div v-show="!shopCarEmpty" class="emptyCart">
      <router-link
        tag="div"
        to="/"
        class="goShopping">
        <img class="shopcar_img" src="https://img1.import-express.com/importcsvimg/webpic/img/cl_72/shopcar0.jpg">
        Your shopping cart is empty! Let's go shopping!
      </router-link>
    </div>
  </div>
</template>

<script>
  import topHeader from './components/topHeader'
  import cartList from './components/cartList'
  import qualityControl from './components/qualityControl'
  import finalPrice from './components/finalPrice'
  import Checkout from "./components/checkout";

  export default {
    name: "shoppingCar",
    components: {
      Checkout,
      topHeader,
      cartList,
      qualityControl,
      finalPrice
    },
    data() {
      return {
        shopCarEmpty: false,
        shoppingCartInfor: []
      }
    },
    methods: {
      getSearchList(res) {
        let url = "http://192.168.1.163:8085/Goods/getCartGoodsData";
        // let url = "/static/mock/test.json";
        // this.$ajax.get('/static/mock/test.json') // npm run build ==>  /static/mock/index.json
        this.$ajax.get(url) //线上用post
          .then(this.getSearchListSucc)
          .catch(function (res) {
            console.log("error, no data")
          })
      },
      getSearchListSucc(res) {
        const data = res.data;
        // console.log(JSON.stringify(data))//object
        if (data.everyShopProductLists.length < 1) {
          this.shopCarEmpty = false;
        } else {
          this.shopCarEmpty = true;
          // this.shoppingCartInfor = data.shoppingCart;
          this.shoppingCartInfor = data.everyShopProductLists;
          // console.log(JSON.stringify(data))//object
          this.productTypeSplic(this.shoppingCartInfor);

        }
      },
      productTypeSplic(data) {
        let productType = data;
        let shopInfo = [];
        let shopInfo_type = [];
        let shopInfo_show = [];
        let shopInfo_param = [];
        let shopInfo_show_temp = [];
        let shopInfo_param_temp = [];
        for (var i in productType) {
          for (let j in productType[i].spiderBeans) {
            let str_type = productType[i].spiderBeans[j].types;
            let type_length = str_type.length;
            // 判断数据最后是否有逗号
            if (str_type.substr(type_length - 1, type_length).indexOf(",") > -1) {
              str_type = str_type.substr(0, type_length - 1)
            }
            // 数据逗号分开，再循环@分割
            let str_type_split = str_type.split(",");
            for (let k in str_type_split) {
              shopInfo_show_temp.push(JSON.parse((str_type_split[k].split('@'))[0]));
              shopInfo_param_temp.push(JSON.parse((str_type_split[k].split('@'))[1]));
              console.log(shopInfo_show_temp);
            }
            shopInfo_show.push(shopInfo_show_temp);
            console.log(shopInfo_show);
            // shopInfo_type.push((str_type_split.split('@'))[0]);
            // console.log('shopInfo_type:'+shopInfo_type)
          }
        }
        ;
      },
    },
    mounted() {
      this.getSearchList();
      // this.productTypeSplic();
    },
    created() {
      // console.log(this)
      // console.log(this.$store.state.cart)
    },

  }
</script>

<style scoped lang="stylus">
  .shoppingCart
    background #f7f7f7
    .emptyCart
      margin auto
</style>
