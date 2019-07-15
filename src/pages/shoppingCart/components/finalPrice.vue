<template>
    <div class="finalPrice">
      <div class="col-xs-12 ">
        <div class="Hint">
        Hint: Once shipping weight exceeds 21KG, you will enjoy much lower
        shipping rate (at least 20% less).
          <span>Current weight: 2.45KG</span>
        </div>
        <div class="Hint">
          Hint:  You can save up to $xxx by changing shipping method.
        </div>
      </div>

      <div class="finalPrice_price col-xs-12">
        <div class="col-xs-6">
          Total Price:
        </div>
        <div class="col-xs-6 text-right finalPrice_num" >
          $1163.82
        </div>
        <div class="col-xs-6">
          Shipping Price:
        </div>
        <div class="col-xs-6  text-right">
          <span style="text-decoration: line-through">($15.54)</span>
          <span class="finalPrice_num">$13</span>
        </div>
        <div class="col-xs-6">
          Initial Order Discount:
        </div>
        <div class="col-xs-6 text-right finalPrice_num" >
          -$3
        </div>
      </div>
      <!--<div class="finalPrice_bottom_checkout col-xs-12">
        <div class="col-xs-7">
          Grand Total:
          <span >$1163.82</span>
        </div>
        <div class="col-xs-5 text-center">
          Proceed To Checkout
        </div>
      </div>-->
    </div>
</template>

<script>
    export default {
        name: "finalPrice",
      data(){
          return {
            totalPrice: ''
          }
      },
      watch:{
        price(curVal) {
          var inputVal = curVal;
          // console.log(inputVal);
          this.getSearchList(inputVal);
          if (curVal == '' || inputVal.length < 2) { //bug搜索的时候，输入dresss点下一个s才会隐藏list
            this.listHide = false;
            this.showRecommand = true;
          } else {
            this.listHide = true;
            this.showRecommand = false;
          }
        },
      }
    }
</script>

<style scoped lang="stylus">


.finalPrice
  .col-xs-12
    padding 0 .1rem
    .Hint
      height auto
      background-color #F7D789
      border 1px solid rgba(247,215,137,1)
      font-size .1rem
      color #F97424
      line-height .15rem
      padding .08rem .06rem
      margin .07rem 0
    .Hint span
      color #999
      font-size .1rem
  .finalPrice_price.col-xs-12
    line-height .25rem
    padding 0
    padding-bottom:  .9rem
    font-size .12rem
    color #666
  .finalPrice_num
    color #000
  .finalPrice_bottom_checkout
    position: fixed;
    bottom 0
    height .5rem
    line-height .5rem
    font-size .13rem
    background-color #fff
    padding 0
    -webkit-box-shadow: 0 -0.06rem 0.1rem rgba(28,28,28,.2)
    -moz-box-shadow: 0 -0.06rem 0.1rem rgba(28,28,28,.2)
    box-shadow: 0 -0.06rem 0.1rem rgba(28,28,28,.2)
    z-index 9
    .col-xs-7 span
      color #FF0101
      font-weight bold
    .col-xs-5
      background-color #000
      color #fff
      @media screen and (max-width: 320px)
        font-size .11rem
        padding 0 .05rem
</style>
