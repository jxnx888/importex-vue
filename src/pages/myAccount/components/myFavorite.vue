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
<!--        <span class="favorite_circle"></span>-->
        <input id="checkAllFavorite" type="checkbox" v-model="checked" @click="checkedAll">
      </div>
      <div class="col-xs-3">
        Select All
      </div>
      <div class="col-xs-7 text-right">
        <span v-if="showNotification" class="showNotification">Please add at least 1 item！</span>
        <span class="iconfont" @click="deleteItem">&#xe634;</span>
      </div>
    </div>
    <div class="row myFavorite_list"
         v-for="(item,index) in favoriteList">
      <div class="col-xs-2 item_check text-center">
        <input type="checkbox" :value="item.id"  v-model="checkList" name="selectedItem">
<!--        <i class="favorite_circle"></i>-->
      </div>
      <router-link :to="/product/+item.itemId" class="col-xs-3">
        <div  v-if="item.valid == 1"  class="row  item_img">
          <img :src="item.img" alt="">
        </div>
        <div v-if="item.valid == 0" class="row  item_img item_img_expired">
          <img v-lazy="item.img" alt="" class="">
          <img class="item_img_expired_img" src="https://img.kidsproductwholesale.com/importcsvimg/webpic/img/wh89/flooringPage/collection_expired.png" alt="">
        </div>

      </router-link>
      <router-link :to="/product/+item.itemId" class="col-xs-7 item_info">
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
      </router-link>
    </div>
    <div class="deletedSucc" v-if="deletedSucc">
      <div class="deletedSuccTip">Delete success!</div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "myFavorite",
    data() {
      return {
        favoriteList: [],
        checkList:[],
        checked: false, //全选框
        showNotification: false,
        deletedSucc: false,
      }
    },
    methods: {
      handleGoBackClick() {
        this.$router.go(-1);
      },
      getFavoriteList(res) {
        let url = '../Goods/collistJson';
        this.$ajax.get(url,)
          .then(this.getFavoriteListSucc)
          .catch(function (res) {
            console.log("error, no data")
          })
      },
      getFavoriteListSucc(res) {
        const data = JSON.parse(res.data);
        // console.log(JSON.stringify(data));
        this.favoriteList = data.collections
      },
      deleteItem(){
        // console.log(JSON.stringify(this.checkList));
        if(this.checkList.length > 0){
        var deletedID = '';
        for(var i in this.checkList){
          deletedID = deletedID + this.checkList[i]+ ","
        }
        this.deleteFavoriteList(deletedID)
        }
        else {
          this.showNotification = true;
          setTimeout(() => {
            this.showNotification = false;
          }, 3000);
          return
        }
      },
      deleteFavoriteList(deletedID){
        let url = '../Goods/delCollection';
        this.$ajax.post(url,
          //pid 为传值的key
          this.$qs.stringify({
            id: deletedID,
          })
        )
          .then(this.deleteFavoriteListSucc)
          .catch(function (res) {
            console.log("error, no data")
          })
      },
      deleteFavoriteListSucc(res) {
        const data = res.data;
        console.log(data);
        if(data>0){
          this.deletedSucc = true;
          this.getFavoriteList();
          setTimeout(() => {
            this.deletedSucc = false;
          }, 2000);

        }
      },
      checkedAll: function() {
        var _this = this;
        // console.log(_this.checkList);
        // console.log(_this.checked);
        this.$nextTick(function() {
          // DOM 现在更新了
          // console.log(_this.checked);
        });
        if (_this.checked) { //实现反选
          _this.checkList = [];
        } else { //实现全选
          _this.checkList = [];
          _this.favoriteList.forEach(function(item, index) {
            _this.checkList.push(item.id);
          });
        }
      }
    },
    mounted() {
      this.getFavoriteList();
    },
    watch:{

      checkList: {
        handler: function(val, oldVal) {
          if (val.length === this.favoriteList.length) {
            this.checked = true;
          } else {
            this.checked = false;
          }
        },
        deep: true
      }
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
    padding-top .45rem
    .col-xs-3
      padding-left 0
      font-size .13rem
    .col-xs-7
      .showNotification
        font-size .13rem
        color red
    .col-xs-2,.col-xs-3,.col-xs-7
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
  .deletedSucc
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: rgba(0, 0, 0, 0.6);

    .deletedSuccTip
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 45%;
      height: .5rem;
      margin: auto;
      border-radius: 10px;
      background: #fff;
      z-index: 11;
      color #4CBD27
      padding .2rem

  input[type=checkbox] {
    position: relative;
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }

  input[type=checkbox]::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    color: white;
    font-size: 15px;
    background-color: #fff;
    border-radius: 20px;
    border: 1px solid #bfbfbf;
    -webkit-border: 1px solid #bfbfbf;
  }

  input[type=checkbox]:checked::before {
    color: white;
    background-color: #F5A72C;
    /*content: '√';*/
    content: '';
  }
</style>
