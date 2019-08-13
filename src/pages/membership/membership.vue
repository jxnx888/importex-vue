<template>
  <div class="membership ">
    <div class="searchResult_Nav ">
      <a @click="handleGoBackClick()">
        <span class="iconfont ">&#xe669;</span>
      </a>
      <router-link to="/searchDetail">
        <span class="iconfont ">&#xe615;</span>
      </router-link>
      <router-link to="/shoppingCart">
        <span class="iconfont ">&#xe64c;</span>
      </router-link>
      <div class="iconfont smallNavIcon" @click="showSmallNav = ! showSmallNav">
        &#xe60f;
      </div>
      <small-nav v-if="showSmallNav"></small-nav>
    </div>
    <div class="container">
      <div class="row howToJoin">
        <div class="topBanner">
          <img src="https://img.kidsproductwholesale.com/importcsvimg/webpic/img/cl_72/membership/memb_ban1.jpg" alt="">
        </div>
        <div class="col-xs-12 welcome">
          Welcome to join Biz Membership of Our website. Biz Membership provides extensive
          professional customer service and additional benefits. Hope you will have a joyful
          online shopping experience. Join biz Membership now and get more profits on your products!
        </div>
      </div>
      <div class="row howToJoin">
        <div class="col-xs-12 title text-center">
          How to join Biz membership?
        </div>
        <div class="col-xs-6 text-center boxWrapper">
          <div class="col-xs-12 boxes">
            <img class="image"
                 src="https://img.kidsproductwholesale.com/importcsvimg/webpic/img/cl_72/membership/memb01.png" alt="">
            <p class="titleName" style="margin-top:0.1rem">Shopping</p>
          </div>
        </div>
        <div class="col-xs-6 text-center boxWrapper">
          <div class="col-xs-12 boxes2">
            <img class="image"
                 src="https://img.kidsproductwholesale.com/importcsvimg/webpic/img/cl_72/membership/memb02.png" alt="">
            <p class="titleName" >Check</p>
            <p class="titleName"> 'Buy Biz Membership Club' when you make a payment</p>
          </div>
        </div>
        <div class="col-xs-6 text-center boxWrapper">
          <div class="col-xs-12 boxes">
            <img class="image"
                 src="https://img.kidsproductwholesale.com/importcsvimg/webpic/img/cl_72/membership/memb03.png" alt="">
            <p class="titleName">Membership levels up automatically</p>
          </div>
        </div>
        <div class="col-xs-6 text-center boxWrapper">
          <div class="col-xs-12 boxes4">
            <img class="image"
                 src="https://img.kidsproductwholesale.com/importcsvimg/webpic/img/cl_72/membership/memb04.png" alt="">
            <p class="titleName" style="margin-top:0.15rem">Enjoy discounts</p>
            <p class="titleName"> on purchase</p>
          </div>
        </div>
      </div>
      <div class="row memberShipLevel">
        <div class="col-xs-12 title text-center">
          LEVELS AND DISCOUNTS
        </div>
        <div class="col-xs-12">
          <div class="col-xs-12  box1">
              <h1 >VIP</h1>
              <h2 class="text-center">BizClub Member</h2>
              <p >No minimum spending required</p>
              <p>Enjoy a 3% discount on each order</p>
          </div>
        </div>
        <div class="col-xs-6 boxWrapper">
          <div class="col-xs-12 box2">
              <h1 >VIP</h1>
              <h2 class="text-center">Silver VIP</h2>
              <p class="text-center">Spend $1,000 per year Enjoy a 5% discount on each order </p>
          </div>
        </div>
        <div class="col-xs-6 boxWrapper">
          <div class="col-xs-12 box2">
              <h1 >VIP</h1>
              <h2 class="text-center">Gold VIP</h2>
              <p class="text-center">Spend $5,000 per year Enjoy a 7% discount on each order</p>
          </div>
        </div>
        <div class="col-xs-6 boxWrapper">
          <div class="col-xs-12 box2">
            <h1 >VIP</h1>
            <h2 class="text-center">Platinum VIP</h2>
            <p class="text-center">Spend $20,000 per year  Enjoy a 9% discount on each order </p>
          </div>
        </div>
        <div class="col-xs-6 boxWrapper">
          <div class="col-xs-12 box2">
            <h1 >VIP</h1>
            <h2 class="text-center">Diamond VIP</h2>
            <p class="text-center">Spend $100,000 per year Enjoy a 12% discount on each order</p>
          </div>
        </div>
        <div class="col-xs-12 notice">
          Notice: The membership level is calculated based on the amount of spending accumulated
          within the past 12 months of the current day. You should pay the membership fee before enjoying the
          discount which is related to your membership level. There is no limit on use of discounts.
        </div>
      </div>
      <div class="row notice">
        <div class="text-center title">
          NOTICE
        </div>
        <div class="col-xs-2 listNum">
          <i class="listIcon"></i>
          <strong>1</strong>
        </div>
        <div class="col-xs-10 listNotice">
          This membership is valid for three months from the date of purchase. After three months, you can renew your membership on the payment page.
        </div>
        <div class="col-xs-2 listNum">
          <i class="listIcon"></i>
          <strong>2</strong>
        </div>
        <div class="col-xs-10 listNotice">
          Member discounts can be used with other coupons at the same time
          (special coupons
          excluded).
        </div>
        <div class="col-xs-2 listNum">
          <i class="listIcon"></i>
          <strong>3</strong>
        </div>
        <div class="col-xs-10 listNotice">
          The membership is updated automatically base on members' accumulated
          spending on Our website. If you do not renew the membership, your consumption record will be
          saved and you will not be able to enjoy the member benefits anymore. After you renew the membership, you
          will be able to enjoy the benefits again based on your accumulated spending.
        </div>
        <div class="col-xs-2 listNum">
          <i class="listIcon"></i>
          <strong>4</strong>
        </div>
        <div class="col-xs-10 listNotice">
          Members can use the discounts unlimitedly on all orders (in a year).
        </div><div class="col-xs-2 listNum">
        <i class="listIcon "></i>
        <strong>5</strong>
      </div>
        <div class="col-xs-10 listNotice listNotice5">
          Membership fee is not refundable.
        </div>


        </div>
      <div class="row agreement">
        <div class="col-xs-12 title text-center">
          AGREEMENT
        </div>
        <div class="col-xs-12">
          <p class="topIf">If a member's behavior meets one of the following situations, the member's benefits will be
            deducted  or be cancelled without prior notice from Our website:
          </p>
          <p>1. Damage the reputation of our company seriously.</p>
          <p>2. Return and exchange products frequently for no reason.</p>
          <p>3. Extort, cheat or abuse customer service from our website.</p>
          <p>4. Delay or exceed the period of return intentionally without cotacting customer services.</p>
          <p>5. The above final interpretation right belongs to Our website. If you have any questions, please contact our online customer service.</p>

        </div>
      </div>
      </div>
    <FooterBar></FooterBar>
    </div>
</template>

<script>
  import SmallNav from "../../common/smallNav/smallNav";
  import FooterBar from "../../common/footer/footerBar";

  export default {
    name: "membership",
    components: {FooterBar, SmallNav},
    data() {
      return {
        showSmallNav: false,
      }
    },
    methods: {
      handleGoBackClick() {
        this.$router.go(-1);
      },
    }
  }
</script>

<style scoped lang="stylus">
  .searchResult_Nav
    float: left
    width 100%
    height .5rem
    line-height .5rem
    background-color #fff

    .smallNavIcon
      float: right
      padding-right .25rem

  .searchResult_Nav span
    /*position: absolute;*/
    left .15rem
    font-size .2rem
    color #999999

  .searchResult_Nav a
    display: inline-block
    height .5rem
    line-height .5rem
    color #fff
    font-size .15rem
    margin 0 .13rem

  .searchResult_Nav p
    color #fff
    font-size .15rem
  .howToJoin
    .topBanner
      width 100%

    .topBanner img
      width 100%

    .welcome
      font-size .14rem
      color #333
      line-height .2rem
      margin-top .1rem

    .title
      font-weight bold
      font-size .2rem
      color #333
      margin .1rem 0
    .boxWrapper:nth-child(2n)
      padding-right .02rem
    .boxWrapper:nth-child(2n+1)
      padding-left .02rem
    .boxWrapper
      margin .08rem 0
      .boxes2
        background-color: #21180A!important
        color #C3AC7E
      .boxes4
        background-color: #C3AC7F!important
      .boxes,.boxes2,.boxes4
        border-radius .2rem
        background-color #D8D8D8
        height 1.25rem
        padding 0 .05rem
        .image
          width 27%
          margin .15rem 0 .1rem
        .titleName
          font-weight bold
          font-size .15rem
          line-height .15rem
          @media screen and (max-width: 320px)
            font-size .13rem
  .memberShipLevel
    background url(https://img.kidsproductwholesale.com/importcsvimg/webpic/img/cl_72/membership/memb_bg1.jpg) repeat-y top center
    height 6rem
    .title
      color #C3AC7F
      font-size .2rem
      font-weight bold
      margin-top .2rem
      margin-bottom .1rem
    .box1
      height 1.3rem
      border-radius: 15px;
      box-shadow: 0px 11px 10px 0px rgba(226,226,224,0.14);
      background: -webkit-linear-gradient(right top, #c1c1c1 , #e2e2e0);
      background: -o-linear-gradient(bottom left,#c1c1c1 , #e2e2e0);
      background: -moz-linear-gradient(bottom left, #c1c1c1 , #e2e2e0);
      background: linear-gradient(to bottom left, #c1c1c1 , #e2e2e0);
      padding .1rem
    .box1 h1
      color: #fff;
      font-size: 0.25rem;
      font-weight: bold;
      text-shadow: 0px 1px 0px rgba(28,28,28,0.27);
    .box1 h2
      color: #544221;
      font-size: 0.30rem;
      font-weight: bold;
      text-transform: uppercase;
    .box1 p
      color: #544221;
      font-size: .15rem
      line-height .2rem
      text-align center
    .boxWrapper:nth-child(2n)
      padding-right .05rem
      padding-left .02rem
    .boxWrapper:nth-child(2n+1)
      padding-left .05rem
      padding-right .02rem
    .boxWrapper
      margin: 0.08rem 0;
      .box2
        height: 1.35rem;
        border-radius: 15px;
        padding: 0.10rem;
        box-shadow: 0px 11px 10px 0px rgba(126,91,34,0.4);
        background: -webkit-linear-gradient(right top, #bea172 , #ddceac);
        background: -o-linear-gradient(bottom left,#bea172 , #ddceac);
        background: -moz-linear-gradient(bottom left, #bea172 , #ddceac);
        background: linear-gradient(to bottom left, #bea172 , #ddceac);
      .box2 h1
        color: #fff;
        font-size: 0.22rem;
        font-weight: bold;
        text-shadow: 0px 1px 0px rgba(28,28,28,0.27)
      .box2 h2
        color: #544221;
        font-size: 0.250rem;
        font-weight: bold;
        text-transform: uppercase;
      .box2 p
        font-size .1rem
    .notice
      color #999
      font-size .14rem
      line-height .17rem
      margin-top .1rem
  .notice
    .title
      font-weight bold
      font-size .2rem
      color #333
      margin .2rem 0
    .listNum
      padding-top .1rem
      .listIcon
        width: 0.3rem;
        height: 0.3rem;
        display: block;
        margin-top: .1rem;
        background-color: #c3ac7f;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        position: relative;
    .listNum strong
      color: #654d0d;
      font-size: 0.15rem;
      font-weight bold
      position: absolute;
      top: .27rem
      left: .25rem
    .listNotice
      padding-top .1rem
      font-size .1rem
      line-height .2rem
      color #333
    .listNotice5
      padding-top .2rem
  .agreement
    margin-top .2rem
    margin-bottom .2rem
    background: url(https://img.kidsproductwholesale.com/importcsvimg/webpic/img/cl_72/membership/memb_bg2.jpg) repeat-y top center;
    .title
      color #C3AC7F
      font-weight bold
      font-size .2rem
      margin .2rem 0 .1rem 0
    .topIf
      line-height unset!important
  .agreement p
    color #fff
    font-size .1rem
    line-height .2rem
  .agreement p:nth-of-type(2)
    padding-top .1rem
</style>
