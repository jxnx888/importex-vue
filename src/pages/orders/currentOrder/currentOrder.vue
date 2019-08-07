<template>
  <div class="currentOrder">
    <div class="currentOrder_back">
      <div @click="handleGoBackClick">
        <span class="iconfont ">&#xe79b;</span>
        <p class="text-center">Current Order</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "currentOrder",
      methods: {
        getUnpaidOrder(res) {
          let url = 'http://192.168.1.163:8085/individual/getUnpaidOrders';
          this.$ajax.get(url)
            .then(this.getUnpaidOrderSucc)
            .catch(function (res) {
              console.log("error, no data")
            })
        },

        getUnpaidOrderSucc(res) {
          const data = res.data.listOrders;
          // 循环添加showAll属性
          for (var i in data) {
            data[i]["showAll"] = false;
          }
          this.listOrders = data;
          // console.log(JSON.stringify(data));
          console.log(data.length);

        },
        handleGoBackClick() {
          this.$router.go(-1);
        },

      },
    }
</script>

<style scoped lang="stylus">
  .currentOrder_back
    height .45rem
    line-height .45rem
    background-color #01A4EF
    position: fixed
    top 0
    left 0
    right 0
    z-index 5

  .currentOrder_back span
    position: absolute;
    left .15rem
    font-size .2rem
    color #fff

  .currentOrder_back a, .currentOrder_back p
    color #fff
    font-size .15rem

  .currentOrder_searchBox
    /*background-color: #eee*/
    height: .45rem
    line-height: .45rem
    width: 100%
    position: relative;
</style>
