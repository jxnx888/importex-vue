<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 contact">
          <span class="iconfont">&#xe65f;</span>
          Need Help? We're availiable 24/7
          <router-link
            to="contact"
          class="contactUSFAQ">
            Contact Us / FAQ
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6 text-center">
          FAQ
        </div>
        <div class="col-xs-6 text-center">
          Return&Refund
        </div>
        <div class="col-xs-6 text-center">
          About Us
        </div>
        <div class="col-xs-6 text-center">
          Condition of Use
        </div>
        <div class="col-xs-6 text-center">
          Sample Order Tracking
        </div>
        <div class="col-xs-6 text-center">
          Privacy Notice
        </div>
        <div class="col-xs-6 text-center">
          IP/Cpoying/Trademark
        </div>
        <div class="col-xs-6 text-center">
          Locations We Ship To
        </div>
        <div class="col-xs-6 text-center">
          Commission
        </div>
        <div class="col-xs-6 text-center">
          Shipping Methods
        </div>
        <div class="col-xs-6 text-center">
          Membership Description
        </div>
        <div class="col-xs-6 text-center">
          Custom&Duty Related
        </div>
        <router-link tag="div"  to="contact" class="col-xs-6 text-center">
          Customer Service
        </router-link>
      </div>
      <div class="row mediaIcon">
        <router-link to="/facebook" class="col-xs-2 iconfont text-center">&#xe683;</router-link>
        <router-link to="/pinterest" class="col-xs-2 iconfont text-center">&#xe84b;</router-link>
        <router-link to="/youtube" class="col-xs-2 iconfont text-center">&#xe7da;</router-link>
        <router-link to="/twitter" class="col-xs-2 iconfont text-center">&#xe624;</router-link>
        <router-link to="/instagram" class="col-xs-2 iconfont text-center">&#xe7b0;</router-link>
        <router-link to="" class="col-xs-2 iconfont text-center">&#xe70e;</router-link>
      </div>

      <div class="row newsletter">
        <div class="col-xs-12">
          Subscribe To Our Newsletter
        </div>
        <div class="col-xs-12 subscribe">
          <div class="wrapper">
            <input class="subscribe_input" placeholder="Please enter your email" ></input>
            <button class="searchSubmit">SUBSCRIBE</button>
          </div>
        </div>
        <div class="col-xs-12 get_update text-center">Get Updates,Discounts,Special Offers And Big Prize</div>
        <div class="col-xs-12 copyright text-center">
          Copyright 2014-2019
          <router-link to="/" tag="span">Import Express</router-link>
          Inc. All rights reserved.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "footerBar"
  }
</script>

<style scoped lang="stylus">
.footer
  /*margin-top .2rem*/
  .container
    .row
      .contact
        height .35rem
        line-height .35rem
        font-size .14rem
        color #333
        background: rgba(230,230,230,1)
        .contactUSFAQ
          text-decoration underline
          color: #01a4ef;
    .row
      .col-xs-6
        line-height .28rem
        height .28rem
        font-size .13rem
        color #666
        @media screen and (max-width: 320px)
          font-size .12rem
    .mediaIcon
      margin-top .1rem
      .iconfont
        font-size .2rem
        color #999
    .newsletter
      font-size .15rem
      margin-top .2rem
      .subscribe
        height: .33rem
        line-height: .33rem
        width: 100%
        position: relative;
        margin-top .1rem
        .wrapper
          display: flex
          width: 100%
          height: .33rem
          line-height: .33rem
          .subscribe_input
            display: block
            width: 100%
            padding-left: .1rem;
            background: #fff
            font-size .14rem
            border 1px solid #ddd
          .searchSubmit
            float right
            color #fff
            text-align: center
            background #01a4ef
            font-size .15rem
            font-weight: 400
            padding 0 .1rem
      .get_update
        color #666
        font-size .13rem
        height .2rem
        line-height .2rem
        margin-top .2rem
      .copyright
        color #999
        font-size .12rem
        height .2rem
        line-height .2rem
        margin-bottom .7rem


</style>
