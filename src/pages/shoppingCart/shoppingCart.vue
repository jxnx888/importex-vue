<template>
  <div class="shoppingCart">
    <topHeader></topHeader>
    <cart-list :shoppingCartInfor="shoppingCartInfor"></cart-list>
    <qualityControl></qualityControl>
    <finalPrice></finalPrice>
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
        this.shoppingCartInfor =data.everyShopProductLists;
          // console.log(JSON.stringify(data))//object
      }
    },
    mounted() {
      this.getSearchList();
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
</style>
