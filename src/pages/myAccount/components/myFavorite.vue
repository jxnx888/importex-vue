<template>
  <div class="myFavorite container">
    <div class="col-xs-12 myFavorite_back">
      <div @click="handleGoBackClick">
        <span class="iconfont ">&#xe79b;</span>
        <p class="text-center">My Favorite</p>
      </div>
    </div>
    <div class="row topSelect">
      <div class="col-xs-2">
        <span class="favorite_circle"></span>

      </div>
      <div class="col-xs-4">
        Select All
      </div>
      <div class="col-xs-6 text-right">
        <span class="iconfont">&#xe634;</span>
      </div>
    </div>
    <div class="row myFavorite_list"
         v-for="(item,index) in favoriteList">
     <!-- <div class="col-xs-1">
        <i class="favorite_circle"></i>
      </div>
      <div class="col-xs-11">
        <div class="row">
          123
        </div>
      </div>-->
      <div class="col-xs-2 item_check">
        <input type="checkbox">
      </div>
      <div class="col-xs-3">
        <div  v-if="item.valid == 1"  class="row  item_img">
          <img :src="item.img" alt="">
        </div>
        <div v-if="item.valid == 0" class="row  item_img item_img_expired">
          <img v-lazy="item.img" alt="" class="">
          <img class="item_img_expired_img" src="https://img.kidsproductwholesale.com/importcsvimg/webpic/img/wh89/flooringPage/collection_expired.png" alt="">
        </div>

      </div>
      <div class="col-xs-7 item_info">
        <div class="row">
          <div class="col-xs-12 itemName">
            {{item.titile}}
          </div>
          <div class="col-xs-12 itemType">
            <!--Item ID: {{item.goodId}}
            {{item.types}}-->
          </div>
          <div class="col-xs-12 itemPrice">
            <span class="price">${{item.price}}</span>
            <span class="number">/piece x {{item.moq}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "myFavorite",
    data() {
      return {
        favoriteList: []
      }
    },
    methods: {
      handleGoBackClick() {
        this.$router.go(-1);
      },
      getCouponList(res) {
        let url = 'http://192.168.1.163:8085/Goods/collistJson';
        this.$ajax.get(url,)
          .then(this.getCouponListSucc)
          .catch(function (res) {
            console.log("error, no data")
          })
      },

      getCouponListSucc(res) {
        const data = JSON.parse(res.data);
        // console.log(JSON.stringify(data));
        this.favoriteList = data.collections
      },
    },
    mounted() {
      this.getCouponList();
    }
  }
</script>

<style scoped lang="stylus">
  .myFavorite_back
    height .45rem
    line-height .45rem
    background-color #01A4EF
    position: fixed
    top 0
    left 0
    right 0
    z-index 5

  .myFavorite_back span
    position: absolute;
    /*left 0.3rem*/
    font-size .2rem
    color #fff

  .myFavorite_back a, .myFavorite_back p
    color #fff
    font-size .15rem

  .topSelect
    margin-top .45rem
    .col-xs-2,.col-xs-4,.col-xs-6
      height .4rem
      line-height .4rem
      .favorite_circle
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 0.19rem;
        height: 0.19rem;
        border: 1px solid #bfbfbf;
        -webkit-border: 1px solid #bfbfbf;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;

  .myFavorite_list
    height 1rem
    line-height 1rem
    .item_check
      line-height 1rem
    .col-xs-3
      height 1rem
      line-height 1rem
      padding-top .1rem;

      .item_img
        position: relative;
        width .8rem
        height .8rem
      .item_img_expired:before
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: rgba(0,0,0,0.4);
      .item_img_expired_img
        z-index 2
        width: 80%;
      .item_img img
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        max-width: 100%;
        max-height: 100%;
    .item_info
      height 1rem
      line-height 1rem
      padding .15rem
      .itemName
        color #333
        line-height .15rem
        font-size .13rem
        overflow: hidden
        display: -webkit-box
        -ms-text-overflow: ellipsis
        text-overflow: ellipsis
        -webkit-line-clamp: 2
        line-clamp: 2
        -webkit-box-orient vertical
        white-space normal
      .itemType
        color #999
        font-size .11rem
        line-height .15rem
        margin-top .1rem
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
      .itemPrice
        font-size .13rem
        line-height .28rem
        color #999
        .price
          color #FF0101

    .col-xs-1, .col-xs-11
      height 1rem
      line-height 1rem
      .favorite_circle
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 0.19rem;
        height: 0.19rem;
        border: 1px solid #bfbfbf;
        -webkit-border: 1px solid #bfbfbf;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
</style>
