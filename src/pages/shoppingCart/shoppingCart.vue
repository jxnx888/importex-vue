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
      getSearchList() {
        this.$ajax.get('/static/mock/index.json') // npm run build ==>  /static/mock/index.json
          .then(this.getSearchListSucc)
      },
      getSearchListSucc(res) {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.shoppingCartInfor = data.shoppingCart;
          // console.log(JSON.stringify(this.shoppingCartInfors))//object


        }
      }
    },
    mounted() {
      this.getSearchList();
    }
  }
</script>

<style scoped lang="stylus">
  .shoppingCart
    background #eee
</style>
