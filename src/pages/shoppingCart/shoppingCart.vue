<template>
  <div class="shoppingCart">

    <topHeader></topHeader>
    <div v-if = "shopCarEmpty">
      <cart-list :shoppingCartInfor="shoppingCartInfor"></cart-list>
      <qualityControl></qualityControl>
      <finalPrice></finalPrice>
    </div>
    <div  v-else>
    <router-link
      tag="div"
      to="/"
      class="goShopping">
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

  import {mapState} from "vuex"

  export default {
    name: "shoppingCar",
    components: {
      topHeader,
      cartList,
      qualityControl,
      finalPrice
    },
    data (){
      return{
        shopCarEmpty:true,
        shoppingCartInfor:[]
      }
    },
    methods: {
      getSearchList(res) {
        // let url = "http://192.168.1.163:8085/Goods/getCartGoodsData";
        let url = "/static/mock/test.json";
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
        if(data.everyShopProductLists.length < 1){
          this.shopCarEmpty=false;
        }
        else {
          this.shopCarEmpty=true;
          // this.shoppingCartInfor = data.shoppingCart;
        this.shoppingCartInfor =data.everyShopProductLists;
          // console.log(JSON.stringify(data))//object
        // this.productTypeSplic(this.shoppingCartInfor);

        // for(var i =0;i<1; i++){
        //   console.log(JSON.stringify("外层1："+this.shoppingCartInfor[i].spiderBeans[j]))
        //
        //   for(var j=0; j<1;j++)
        //   console.log(JSON.stringify(this.shoppingCartInfor[i].spiderBeans[j]))
        // }
        }
      },
      productTypeSplic(data){
        let productType = data;
        let shopInfo = [];
        let shopInfo_type = [];
        for (var i in productType){
          console.log(productType[i]);

          for(let j in productType[i].spiderBeans){
            console.log(productType[i].spiderBeans[j])
            // if(productType[i].spiderBeans[j].shopId == productType[i].spiderBeans[j+1]){
            //   console.log("same shop")
            // }
          }

        }
      }
    },
    mounted() {
      this.getSearchList();
      // this.productTypeSplic();
    },
    created(){
      // console.log(this)
      // console.log(this.$store.state.cart)
    },

  }
</script>

<style scoped lang="stylus">
  .shoppingCart
    background #eee
    .goShopping
      padding-top 50%
</style>
