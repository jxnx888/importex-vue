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
      <span >Save for Later</span>
    </div>
    <div class="cartList_remove">
      <span class="iconfont">&#xe634;</span>
      <span >Remove</span>
    </div>
  </div>

<!--  购物车列表-->
  <div class="cartList_content">

      <div class="shopName">
        <div class="col-xs-1">
          <input type="checkbox" class="checkAll">
        </div>
        <div class="col-xs-11">Shop Name: yhalbbb</div>
      </div>

      <div class="coupon row">
        <span class="iconfont col-xs-1">&#xe647;</span>
        <span class="col-xs-9">Save $1.5 in processing fee if order over $15 from this seller.</span>
        <span class="col-xs-1 iconfont">&#xe6b7;</span>
      </div>

      <div class="items row">
        <div class="col-xs-2">
          <input type="checkbox" class="checkAll">
        </div>
        <div class="col-xs-10">
          <div class="col-xs-4">
            <img scr="" style="width:100px; height:100px;">
          </div>
          <div class="col-xs-8">
            <div class="col-xs-12">
                summer unexpected changes west beige asia long dress big size women's             </div>
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
      <div class="items_type row">
        <div class="col-xs-2">
          <input type="checkbox" class="checkAll">
        </div>
        <div class="col-xs-10">
          <div class="col-xs-12">
            <div class="col-xs-8">
              <div class="col-xs-12 specColor">
                <span>Spec: 98mm*8712mm</span>
                <span>Color: yellow</span>
              </div>
              <div class="col-xs-12 weight">Weight: 0.206kg</div>
              <div class="col-xs-12">
                <span class="currentPrice">$21.46</span>
                <span class="oldPrice">$23.46</span>
              </div>
            </div>
            <div class="col-xs-4">4</div>
          </div>
          <div class="col-xs-12 remove&save">
            <div clss="removeItem">Remove</div>
            <div clss="saveLateItem">Save for late</div>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "cartList"
    }
</script>

<style scoped lang="stylus">
  input[type='checkbox']{
     width: 20px;
     height: 20px;
     background-color: #fff;
     -webkit-appearance:none;
     border: 1px solid #c9c9c9;
     border-radius: 2px;
     outline: none;
     margin 0
   }
  input[type='checkbox']:checked{
    background-color: #000;
    color: #fff;
    font-size .1rem
  }
  input[type='checkbox']:checked::before{
    display: block;
    content: "\2714";
    text-align: center;
    font-size: 10px;
    color: white;
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
    margin-top .1rem
    background-color #fff
    .shopName
      height .29rem
      line-height .29rem
      font-size .12rem
      .col-xs-1
        padding 0 .1rem
    .coupon
      height .34rem
      line-height .34rem
      font-size .1rem
      border-top 1px solid #ECECEC
      border-bottom 1px solid #ECECEC

      .col-xs-1:nth-of-type(1)
        padding-left .25rem
      .iconfont:nth-of-type(1)
        color #FF612A
      .col-xs-9
        padding 0 0 0 .1rem
        white-space:nowrap
        overflow:hidden
        text-overflow:ellipsis
      .col-xs-1:last-child
        padding-left .1rem
    .items
      .col-xs-2
        width 10%
        padding-left .25rem
        padding-right 0
        height 1.18rem
        line-height 1.18rem
      .col-xs-10
        padding 0
        height 1.18rem
        line-height 1.18rem
        .col-xs-8
          line-height .15rem
          font-size .12rem
          padding .12rem 0 0 0
          .col-xs-12
            padding 0 0 0 .06rem
            .remark
              width 100%
              height .3rem
              border 1px solid #d1d1d1
              padding-left .06rem
          .col-xs-12:nth-of-type(2)
            padding .1rem 0 .1rem .06rem
            .freeShipping
              color #1FA32E
              font-size .11rem
            .shipOutDays
              font-size .11rem
              color #999
    .items_type
      font-size .11rem
      height .86rem
      .col-xs-2
        width 10%
        padding-left .25rem
        padding-right .15rem
        height .86rem
        line-height .86rem
      .col-xs-10
        width 80%
        padding 0
        margin-left .15rem
        height .86rem
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
        .remove&save
          .removeItem, .saveLateItem
            float: right
</style>
