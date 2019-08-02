<template>
    <div class="featuredProduct">
      <div class="col-xs-12 title">Featured Products</div>
      <div class="col-xs-12 title2">Resellers,agents wanted</div>
      <div class="col-xs-12">
        <div class="col-xs-12 content">
        <ul class="seller_ul">
          <li class="seller_li">
            <span class="seller_dot"></span>
            <span class="seller_text">Access to millions of products with China direct price</span>
          </li>
          <li class="seller_li">
            <span class="seller_dot"></span>
            <span class="seller_text">Inventory updates</span>
          </li>
          <li class="seller_li">
            <span class="seller_dot"></span>
            <span class="seller_text">Drop shipping API support (You sell,We ship)</span>
          </li>
          <li class="seller_li">
            <span class="seller_dot"></span>
            <span class="seller_text">VIP Business Service</span>
          </li>
          <router-link
            tag="li"
            to=""
            class="send_btn">
            Send Inquires
          </router-link>
        </ul>
      </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "featuredProduct"
    }
</script>

<style scoped lang="stylus">
.featuredProduct
  background: #f5f5f5;
  height 2.4rem
  .title
    margin-top .1rem
    height .3rem
    line-height .3rem
    color rgba(255,136,31,1)
    background #fff
    font-weight bold
    font-size .13rem
    border-bottom: 1px solid #D0D0D0;
  .title2
    color: #333;
    text-align: left;
    font-size: .17rem;
    line-height: .37rem;
  .content
    background url("https://img.import-express.com/importcsvimg/webpic/img/m-index/sell-bg.png") no-repeat 100% 100%
    padding 0 0 .1rem 0
  .seller_ul
    position: relative;
    width: 100%;
    height: 100%;
    .seller_li
      overflow: hidden;
      width: 100%;
      line-height: .35rem;
      .seller_dot
        float: left;
        display: block;
        margin: .12rem .1rem 0;
        width: .1rem;
        height: .1rem;
        border-radius: 100%;
        background: #e5a442;
      .seller_text
        float: left;
        display: block;
        width: 3.125rem;
        color: #666;
        word-wrap: break-word;
        font-size: .13rem;
    .send_btn
      position: absolute;
      right: .15rem;
      bottom: 0rem;
      width: 1rem;
      height: .3rem;
      line-height .3rem
      border-radius: 4px;
      background: #3ebdf8;
      color: #fff;
      text-align: center;
      font-size: .14rem;
      padding-bottom .1rem
</style>
