<template>
<div class="chooseItemType" >
  <div class="cover" @click="handleItemTypeClick()"></div>
  <div class="container">
    <div class="top_title ">
      <div class="col-xs-12">
        <div class="col-xs-4 text-center">
          <img   class="top_title_img">
        </div>
        <div class="col-xs-8 text-left">
          US $ 1.88/piece
        </div>
        <span class="closeIcon iconfont" @click="handleItemTypeClick()">&#xe62e;</span>
      </div>

    </div>
    <div class="row color_Size">
      <div class="col-xs-12" >
        <div class="size" >
          <p class="text-left">Size:</p>
          <div v-for="(item, index) in goodColorSize">
            <div class="sizeType" v-if="item.type === 'Size'">
              <span> {{item.value}}</span>
            </div>
          </div>
        </div>

      </div>
      <div class="col-xs-12">
        <div class="color">
          <p class="text-left">Colour:</p>
            <div class="col-xs-2" v-for="(itemColor, indexColor) in goodColorSize">

              <div class="colorType" v-if="itemColor.type === 'Colour'">
                <img class="colorType_img" :src="itemColor.img" alt="white" title="white">
              </div>
            </div>
        </div>
      </div>

    </div>
    <div class="row quantity_addCart ">
      <div class="quantity text-center ">
        <div class="col-xs-8 quantity_title">Quantity (Minimum Order: 1)</div>
        <el-input-number
          class="inputNumber iconfont text-right"
          v-model="num"
          @change="numberChange"
          size="mini"
          :min="0">
        </el-input-number>
      </div>
      <div class="addCart text-center " @click="addToCart()">
        ADD TO CART
      </div>
    </div>
  </div>

</div>
</template>

<script>
    export default {
        name: "chooseItemType",
      props:{
        goodColorSize: Array,
      },
      data(){
          return{
            num:0,
          }
      },
      methods:{
        handleItemTypeClick() {
          this.$emit('hideItmeType');
        },
        // add_goods(goods){
        //   this.$emit('addToCart(goods)');
        // },
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
          },
        numberChange(value) {
          console.log("choosing item piece:" +value);
        },
      },
    }
</script>

<style scoped lang="stylus">
.chooseItemType
  z-index: 9
  .cover
    position: fixed;
    top: 0
    left: 0
    height: 100%
    width: 100%
    background rgba(0, 0, 0, .5)
    z-index 12
  .container
    position: fixed
    bottom 0
    right: 0
    left 0
    top 20%
    background #fff
    z-index 99
    .top_title
      height .8rem
      line-height .8rem
      border-bottom 1px solid #e2e2e2
      .top_title_img
        width 1rem
        height 1rem
        position: absolute
        left 0
        top -0.3rem
        background #eee
      .closeIcon
        position: absolute
        margin-top -.2rem
        font-size .2rem
        color #666
    .color_Size
      .size
        .sizeType
          float left
          height .25rem
          min-width .3rem
          line-height .25rem
          border 1px solid #000
          padding 0 .05rem
          margin 0 2% 0 0
      .color
        .col-xs-2
          padding 0
          height .5rem
        .colorType
          position: relative;
          width .44rem
          height .44rem
          border 1px solid #000
          .colorType_img
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            max-width: 100%;
            max-height: 100%;
    .quantity_addCart
      position: fixed;
      bottom 0
      line-height .5rem
      width 100%
      .addCart
        height .5rem
        color #fff
        font-weight 700
        font-size .17rem
        background-color #ffbc47
      .quantity
        font-size .15rem
        color #999
        height .5rem
        box-shadow 0 1px 3px rgba(0,0,0,.85)
        @media screen and (max-width: 320px)
          font-size .13rem
        .quantity_title
          /*float: left*/
        .inputNumber
          width 1rem

  //element ui 样式需要穿透修改

  .inputNumber >>> .el-input-number__decrease {
    background: #fff
    border-right none
    border-radius .16rem 0 0 .16rem
    /*margin: .17rem 0;*/
    width .23rem
    line-height .2rem
  }

  .inputNumber >>> .el-input-number__increase {
    background: #fff
    border-left none
    border-radius 0 .16rem .16rem 0
    /*margin: .17rem 0*/
    width .23rem
    line-height .2rem
  }

  .inputNumber >>> .el-icon-minus:before {
    content '\e6b6'
    color #A2A2A2
    font-size .2rem
    line-height .26rem
  }

  .inputNumber >>> .el-icon-plus:before {
    content '\e6b7'
    color #F5A72C
    font-size .2rem
    line-height .26rem
  }

  .iconfont >>> [class*=" el-icon-"] {
    font-family "iconfont" !important
  }

  .iconfont >>> [class^=el-icon-] {
    font-family "iconfont" !important
  }

  .inputNumber >>> .el-input__inner {
    -webkit-border-radius: .16rem
    -moz-border-radius: .16rem
    border-radius: .16rem
  }
</style>
