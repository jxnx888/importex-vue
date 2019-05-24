<template>
  <div class="productList">
    <div class="col-xs-6" v-for="item of productList" :key="item.id">
      <router-link
        tag="div"
      >
        <img src="item.url">
      </router-link>
    </div>

  </div>
</template>

<script>
  export default {
    name: "pruductList",
    props:{
      productList:String

    },
  }
</script>

<style scoped>

</style>
