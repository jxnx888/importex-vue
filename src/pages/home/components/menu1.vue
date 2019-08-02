<template>
  <div class="container wrapper">
    <div class="row">
      <router-link
        tag="div"
        to="/children"
        class="col-xs-6 ">
        <div class="col-xs-12 children">
          <div class="title">SELECTED BABIE'S & CHILDREN'S FASHION</div>
          <ul>
            <li class="sub_title">-New babies</li>
            <li class="sub_title">-Girls</li>
            <li class="sub_title">-Boys</li>
          </ul>
        </div>
      </router-link>
      <router-link
        tag="div"
        to="/pet"
        class="col-xs-6">
        <div class="col-xs-12 pet">
          <div class="title">WHOLESALE PET SUPPLIES</div>
          <ul>
            <li class="sub_title">-Clothing</li>
            <li class="sub_title">-Pet carrie</li>
            <li class="sub_title">-Toys</li>
          </ul>
        </div>
      </router-link>
      <router-link
        tag="div"
        to="/supplies"
        class="col-xs-6 ">
        <div class="col-xs-12 supplies">
          <div class="title">PARTY & CELEBRATION SUPPLIES</div>
          <ul>
            <li class="sub_title">-Candlestick</li>
            <li class="sub_title">-Candle</li>
            <li class="sub_title">-Curtain</li>
          </ul>
        </div>
      </router-link>
      <router-link
        tag="div"
        to="/sellers"
        class="col-xs-6 ">
        <div class="col-xs-12 sellers">
          <div class="title">GOOD PARTNER OF E-COMMERCE SELLERS</div>
          <ul>
            <li class="sub_title">-Low minimum order</li>
            <li class="sub_title">-Low price</li>
          </ul>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "goToSubPages"
  }
</script>

<style scoped lang="stylus">
  .wrapper
    .col-xs-6:nth-child(2n)
      padding 0 .1rem .1rem .05rem

    .col-xs-6
      padding 0 .05rem .1rem .1rem

      .col-xs-12
        padding 0
        height 1.1rem

      .children
        background url(https://img.import-express.com/importcsvimg/webpic/img/zxf/5-10-8.png) no-repeat bottom right
        background-size: 50%;
        background-color: #F1EEE5;

      .pet
        background: url(https://img.import-express.com/importcsvimg/webpic/img/zxf/5-10-4.png) no-repeat bottom right;
        background-size: 60%;
        background-color: #EBE9F4

      .supplies
        background: url(https://img.import-express.com/importcsvimg/webpic/img/zxf/5-10-2.png) no-repeat bottom right;
        background-size: 50%;
        background-color: #EFE9EB;

      .sellers
        background: url(https://img.import-express.com/importcsvimg/webpic/img/zxf/5-10-1.png) no-repeat bottom right;
        background-size: 50%;
        background-color: #ECEFE6;

      .children, .pet, .supplies, .sellers
        padding .05rem

        .title
          font-size: .13rem;
          width: 85%;
          font-weight: 700;
          color: #333333;

        .sub_title
          position: relative;
          padding-left: .1rem;
          font-size: .12rem;
          color: #999;
          margin: .08rem 0;

</style>
