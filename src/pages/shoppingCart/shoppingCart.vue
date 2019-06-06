<template>
<div class="shoppingCart">
  <topHeader></topHeader>
  <cart-list></cart-list>
</div>
</template>

<script>
  import topHeader from './components/topHeader'
  import cartList from './components/cartList'
    export default {
        name: "shoppingCar",
      components:{
          topHeader,
        cartList
      }
    }
</script>

<style scoped lang="stylus">
.shoppingCart
  background #eee
</style>
