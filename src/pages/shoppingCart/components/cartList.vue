<template>
  <div class="cartList">
    <div class="wrapper_top">
      <div class="cartList_select">
        <div class="select">
          <input type="checkbox" id="checkAll" class="checkAll">
          <label for="checkAll">Select all</label>
        </div>
      </div>

      <div class="cartList_save">
        <span class="iconfont">&#xe6ee;</span>
        <span>Save for Later</span>
      </div>
      <div class="cartList_remove">
        <span class="iconfont">&#xe634;</span>
        <span>Remove</span>
      </div>
    </div>

    <!--  购物车列表-->
    <div class="cartList_content" v-if="shoppingCartInfor.length > 0">
      <div v-for="(item, index) in shoppingCartInfor">
        <div style="clear:both;"></div>
        <div class="shopName">
          <div class="col-xs-1">
            <input type="checkbox" class="checkAll">
          </div>
          <div class="col-xs-11">Shop Name: {{item.shopNameEn}}</div>
        </div>

        <div class="coupon col-xs-12">
          <span class="iconfont col-xs-1">&#xe647;</span>
          <span class="col-xs-9">Save $1.5 in processing fee if order over $15 from this seller.</span>
          <span class="col-xs-2 iconfont">&#xe6b7;</span>
        </div>

        <div class="items col-xs-12" v-for="(childItem, childIndex) in item.spiderBeans">
          <div class="col-xs-2">
            <input type="checkbox" class="checkAll">
          </div>
          <div class="col-xs-10">
            <div class="col-xs-4">
              <img :scr="item.img" class="item_img"  >
            </div>
            <div class="col-xs-8">
              <div class="col-xs-12">
                {{item.itemName}}
              </div>
              <div class="col-xs-12">
                <span class="freeShipping">Free shipping</span>
                <span class="iconfont">&#xe688;</span>
                <span class="shipOutDays">Ship out in 3-6 Days</span>
              </div>
              <div class="col-xs-12">
                <input class="remark" placeholder="Remark:">
              </div>
            </div>
          </div>
        </div>

        <!--different type of item-->
        <div class="items_type col-xs-12" v-for="(childItem, childIndex) in item.itemType">
          <div class="col-xs-2">
            <input type="checkbox" class="checkAll">
          </div>
          <div class="col-xs-10">
            <div class="col-xs-12">
              <div class="col-xs-8">
                <div class="col-xs-12 specColor">
                  <span>Spec: {{childItem.itemSize}}</span>
                  <span>Color: {{childItem.itemColor}}</span>
                </div>
                <div class="col-xs-12 weight">Weight: {{childItem.itemWeight}}kg</div>
                <div class="col-xs-12">
                  <span class="currentPrice">${{childItem.currentPrice}}</span>
                  <span class="oldPrice">${{childItem.oldPrice}}</span>
                </div>
              </div>
              <div class="col-xs-4">
                <el-input-number
                  class="inputNumber iconfont"
                  v-model="itemPiece[childIndex]"
                  @change="handleChange(itemPiece[childIndex],childItem.currentPrice, childIndex)"
                  size="mini"
                  :min="1"
                  :key="childIndex"
                  label="描述文字 "></el-input-number>


              </div>
            </div>
            <div class="col-xs-12 removeSave">
              <div class="saveLateItem">Save for late</div>
              <div class="removeItem">Remove</div>
            </div>
          </div>
        </div>
        <div style="clear:both;"></div>
      </div>

    </div>
  </div>
</template>

<script>

  export default {
    name: "cartList",
    props: {
      shoppingCartInfor: Array
    },
    data() {
      return {
        count1: 1,
        itemPiece: [],
        totalPrice:0
      }
    },
    methods: {
      getItemPeice() {
        console.log('this.itemPiece  new: ' + this.itemPiece)
        for (var i = 0; i < this.shoppingCartInfor.length; i++) {
          // this.itemPiece = [];
            for (var j = 0; j < this.shoppingCartInfor[i].itemType.length; j++) {
              let itemType = this.shoppingCartInfor[i].itemType[j]
              if (itemType.itemPiece !== '' || itemType.itemPiece !== null || itemType.itemPiece !== undefined) {
                console.log(itemType.itemPiece);
                this.itemPiece.push(itemType.itemPiece);
                console.log('this.itemPiece:  ' + this.itemPiece)
                console.log('this.itemPiece: ' + JSON.stringify(this.itemPiece))
              }
    }
  }
  },
      handleChange(pieces, price, index) {
        console.log("pieces:" +pieces," price: " + price +" index: "+index );

        var totlePrice = pieces* price
        console.log("totleprice:" + totlePrice)

      },
      getItemPeice1() {
      }

  },
  mounted()
  {
    this.getItemPeice();
  }
  }
</script>

<style scoped lang="stylus">
  input[type='checkbox'] {
    width: 20px;
    height: 20px;
    background-color: #fff;
    -webkit-appearance: none;
    border: 1px solid #c9c9c9;
    border-radius: 2px;
    outline: none;
    margin 0
  }

  input[type='checkbox']:checked {
    background-color: #000;
    color: #fff;
    font-size .1rem
  }

  input[type='checkbox']:checked::before {
    display: block;
    content: "\2714";
    text-align: center;
    font-size: 10px;
    color: white;
  }

  //element ui 样式需要穿透修改
  .inputNumber >>> .el-input-number__decrease {
    background: #fff
    border-right none
    border-radius .16rem 0 0 .16rem
    margin: .17rem 0;
    width .23rem
    line-height .2rem
  }

  .inputNumber >>> .el-input-number__increase {
    background: #fff
    border-left none
    border-radius 0 .16rem .16rem 0
    margin: .17rem 0
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

  .wrapper_top
    height .4rem
    width 100%
    background-color #fff
    margin .1rem 0

    .cartList_select
      height .4rem
      line-height .4rem
      font-size .14rem
      padding-left 10px
      float left

      .select label
        margin-bottom 0

    .cartList_remove
      height .4rem
      line-height .4rem
      font-size .14rem
      float: right

    .cartList_save
      height .4rem
      line-height .4rem
      font-size .14rem
      float: right
      padding 0 15px

  .cartList_content

    .shopName
      height .29rem
      line-height .29rem
      font-size .12rem
      margin-top .1rem
      background-color #fff

      .col-xs-1
        padding 0 .1rem

    .coupon
      width 100%
      height .34rem
      line-height .34rem
      font-size .1rem
      border-top 1px solid #ECECEC
      border-bottom 1px solid #ECECEC
      padding 0
      background #fff

      .col-xs-1
        padding-left .1rem

      .iconfont:nth-of-type(1)
        color #FF612A

      .col-xs-9
        padding 0 0 0 .1rem
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis

    /*.col-xs-1:last-child*/
    /*  padding-left .1rem*/

    .items
      padding 0
      background-color #fff

      .col-xs-2
        width 10%
        padding-left .1rem
        padding-right 0
        height 1.18rem
        line-height 1.18rem

      .col-xs-10
        padding 0
        height 1.18rem
        line-height 1.18rem
        width 86%

        .col-xs-4
          padding 0
          .item_img
            width 1rem
            height 1rem
            @media screen and (max-width: 320px)
              width .9rem
              height .9rem
        .col-xs-8
          line-height .15rem
          font-size .12rem
          padding .12rem 0 0 0

          .col-xs-12
            padding 0 0 0 .06rem
            overflow: hidden
            display: -webkit-box
            /* autoprefixer: ignore next */
            -webkit-box-orient: vertical;
            /*! autoprefixer: off */
            -webkit-box-orient:vertical;
            /* autoprefixer: on */
            /* autoprefixer: off */
            -webkit-box-orient:vertical;
            /* autoprefixer: on */
            -webkit-line-clamp: 2


            .remark
              width 100%
              height .3rem
              border 1px solid #d1d1d1
              padding-left .06rem
              @media screen and (max-width: 320px)
                height .25rem

          .col-xs-12:nth-of-type(2)
            padding .1rem 0 .1rem .06rem
            @media screen and (max-width: 320px)
              padding .02rem 0 .02rem .06rem
            .freeShipping
              color #1FA32E
              font-size .11rem

            .shipOutDays
              font-size .11rem
              color #999

    .items_type
      font-size .11rem
      height .9rem
      padding 0
      background-color #fff
      padding-bottom .1rem

      .col-xs-2
        width 10%
        padding-left .1rem
        padding-right .15rem
        height .86rem
        line-height .86rem

      .col-xs-10
        padding 0
        height .83rem
        color #666
        background-color #F7F7F7

        .col-xs-12:nth-of-type(1)
          .col-xs-8
            padding 0

            .col-xs-12
              padding 0

            .specColor
              padding-top .06rem
              line-height .2rem
              font-size .11rem

            .weight
              line-height .2rem
              font-size .11rem

            .currentPrice
              font-size .13rem
              color #333

            .oldPrice
              font-size .13rem
              text-decoration line-through

          .col-xs-4
            padding 0

            .el-input-number
              width 100%
              padding .17rem 0

        .removeSave
          .removeItem, .saveLateItem
            float: right
            padding 0 .1rem
</style>
