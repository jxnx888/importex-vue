<template>
    <div class="addCart">
      <div class="col-xs-2 text-center">
        <div class="col-xs-12">
          <span class="iconfont wishlist"></span>
        </div>
        <div class="addCart_other col-xs-12">Wishlist</div>
      </div>
      <div class="col-xs-4 text-center">
        <a href="https://www.import-express.com/mapa/dropshippingdescription.html">
        <div class="col-xs-12">
        <span class="iconfont resellList"></span>
        </div>
        <div class="addCart_other col-xs-12">Add to Resell List</div>
        </a>
      </div>
      <div class="col-xs-6 text-center">
        <div class="addCart_toCart" @click="showItmeType()">ADD TO CART</div>
      </div>
      <choose-item-type v-if="showItemType"  @hideItmeType="hideItmeType()"></choose-item-type>
    </div>
</template>

<script>
    import ChooseItemType from "./chooseItemType";
    export default {
        name: "addCart",
      components: {ChooseItemType},
      data(){
          return {
            showItemType:false
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
            for (var i = 0; i < this.shoppingCartInfor.length; i++) {
              for (var j = 0; j < this.shoppingCartInfor[i].itemType.length; j++) {
                let itemType = this.shoppingCartInfor[i].itemType[j]
                this.list.push(itemType)
                console.log(this.list)
              }
            }
          }
        },
        showItmeType(){
          this.showItemType = true;
          console.log(this.showItemType)
        },
        hideItmeType(){
          this.showItemType = false;
          console.log(this.showItemType)
        },
        /**
         * @method 添加到购物车
         * @param {Object} goods 商品
         */
        addToCart(goods) {
          var id = shop.id;

          //检测是否存在购物车中,如果存在修改state.curState为true,并设置state.curIndex为当前菜品在购物车中的索引
          this.$store.dispatch('check_db', {
            id
          });

          //如果存在,先自增当前菜品中的num，再设置购物车的数量
          //如果不存在，直接往购物车中push一个新的菜品
          if (this.$store.state.cart.curIndex != -1) {
            console.log('add_db');
            this.$store.dispatch('add_db');
          } else {
            console.log('create_db');
            this.$set(shop, 'num', 1);
            this.$store.dispatch('create_db', {
              shop
            });
          }
        },
        /**
         * 点击菜品列表中的减号
         */
        reduce_db(shop) {
          var id = shop.id;
          this.$store.dispatch('check_db', {
            id
          });
          shop.num = parseInt(shop.num);
          this.$store.dispatch('reduce_db');
        }
      },
    }
</script>

<style scoped lang="stylus">
.addCart
  height .51rem
  line-height .51rem
  font-size .1rem
  font-weight bold
  text-align: center
  border-top 1px solid #DADADA
  border-bottom 1px solid #DADADA
  background-color #fff
  .col-xs-12
    line-height .15rem
  .col-xs-6
    padding 0
  .col-xs-2, .col-xs-4
    height .52rem
  .col-xs-2, .col-xs-4, .col-xs-12
    padding .02rem 0 0 0
  .col-xs-2 .iconfont, .col-xs-4 .iconfont, .col-xs-6 .iconfont
    display: inline-block
    height .23rem
    line-height .23rem
    width .23rem
    font-size .15rem
    border 1px solid #000
    -webkit-border-radius: .13rem
    -moz-border-radius: .13rem
    border-radius: .13rem
    opacity: .7;
  .addCart_other
    width 100%
    height .21rem
    color #666
    font-weight bold
    line-height .21rem
    padding 0 0
  .wishlist
    text-align center
    background-image: url('../../../../static/images/heart.png')
    background-size 50%
    background-repeat no-repeat
    background-position center
    opacity: .7;
  .resellList
    text-align center
    background-image: url('../../../../static/images/parachute.png')
    background-size 50%
    background-repeat no-repeat
    background-position center
    opacity: .7
  .addCart_toCart
    height .5rem
    line-height: .5rem
    color #fff
    background #000
    font-size .14rem
    font-weight bold

</style>
