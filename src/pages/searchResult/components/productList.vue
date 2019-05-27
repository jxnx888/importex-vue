<template>
  <div class="productList">
    <div class="col-xs-6"
         v-for="(item, index) in productList"
         :key="item.goods_pid" >
      <router-link
        tag="div"
        :to="'product/'+ item.goods_pid"
        class="produtListItem"
      >
        <img :src="item.goods_image" class="productListImg">
        <div v-for="(innerValue, index) in item.priceList" v-if="index< 2">
          <div class="">${{innerValue.price}}</div>

        </div>
<!--           <div class="">${{item.new_price}}</div>-->
<!--          <div class="">${{item.priceList[1].price}}</div>-->

        <div class="">sold:</div>
      </router-link>
    </div>

  </div>
</template>

<script>
  export default {
    name: "pruductList",
    props: {
      productList: {}

    },
    methods: {
    //   getPrice(arr) {
    //       let getPrice = [];
    //       let flat = function (item) {
    //         for (var i = 0; i < item.length; i++) {
    //           if (Array.isArray(item[i].children)) {
    //             flat(item[i])
    //           } else {
    //             getPrice.push(item[i])
    //           }
    //         }
    //       }
    //       console.log('test')
    //     console.log(getPrice)
    //       flat(arr);
    //       return getPrice;
    //
    //     }
    //   },
    //   mounted() {
    //     this.getPrice(this.productList);
    },
  }
</script>

<style scoped lang="stylus">
  .productList
    .productListImg
      width 100%

</style>
