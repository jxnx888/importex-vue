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
        <div class="addCart_toCart" @click="addToCart(shoppingCartInfor)">ADD TO CART</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "addCart",
      props:{
      },
      data(){
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
            for (var i = 0; i < this.shoppingCartInfor.length; i++) {
              for (var j = 0; j < this.shoppingCartInfor[i].itemType.length; j++) {
                let itemType = this.shoppingCartInfor[i].itemType[j]
                this.list.push(itemType)
                console.log(this.list)
              }
            }
          }
        },
        /**
         * @method 添加到购物车
         * @param {Object} goods 商品
         */
        addToCart: function (goods) {
          var alreadyIndex = Cart.cart.findIndex(function (item, index) {
            return item.id === goods.id;
          });

          // 如果不存在则添加
          if (alreadyIndex === -1) {
            var cartIndex = Cart.cart.length;
            // 添加新的商品，并初始化其数量、价格、被选中状态
            Cart.cart.push(goods);
            Cart.$set(Cart.cart[cartIndex], 'quantity', 1);
            Cart.$set(Cart.cart[cartIndex], 'subtotal', goods.price.toFixed(1));
            Cart.$set(Cart.cart[cartIndex], 'checked', false);
            // 新增商品，购物车不能为全选
            Cart.checkAllFlag = false;
            return;
          }

          // 如果商品已存在并且库存足够，数量加1
          var alreadyGoods = Cart.cart[alreadyIndex];
          var num = alreadyGoods.quantity,
            stock = alreadyGoods.stock;

          if (num < stock) {
            Cart.$set(alreadyGoods, 'quantity', ++alreadyGoods.quantity);
            Cart.$set(alreadyGoods, 'subtotal', (alreadyGoods.price * alreadyGoods.quantity).toFixed(1));
          }
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
