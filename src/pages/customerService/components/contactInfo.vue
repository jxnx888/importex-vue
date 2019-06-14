<template>
  <div class="contactInfo">
    <div class="container">
      <div class="row contactInfo_title">
        <div class="col-xs-12 text-center contactInfo_title">
          Customer Service
        </div>
      </div>
      <div class="row contactInfo_form">

        <div class="col-xs-12 contactInfo_form_title">
          <span class="iconfont" style="color:#7636de;">&#xe665;</span>
          Customer Contact Form:
          <span class="recom">(Highly Recommended!)</span>
        </div>
        <div class="col-xs-12">
          <router-link
            to=""
            tag="div"
            class=" contactInfo_form_btn text-center">
            Click here and tell us if any inquiries/issues.
          </router-link>
        </div>
      </div>
      <div class="row contactInfo_whatsapp">
        <div class="col-xs-12 contactInfo_whatsapp_title">
          <span class="iconfont" style="color:#88fc72;font-size:.17rem">&#xe98f;</span>
          WhatsApp: +86 15556180301
        </div>
        <div class="col-xs-12">
          <div class="contactInfo_whatsapp_content  ">
            You can send us a written message or leave us a voice message,and get instant assistance by using WhatsApp.
          </div>
        </div>
      </div>
      <div class="row contactInfo_email">

        <div class="col-xs-12 contactInfo_email_title">
          <span class="iconfont" style="color:#6e86e4;">&#xe701;</span>
          Email:
          <span class="recom">(Reply within 24hrs)</span>
        </div>
        <div class="col-xs-12">
          <a class="contactInfo_email_btn text-center" href="mailto:contact@import-express.com">
            service@import-express.com</a>
        </div>
      </div>
      <div class="row contactInfo_phone">
        <div class="col-xs-12 contactInfo_phone_title">
          <span class="iconfont" style="color:#37c1f3">&#xe98f;</span>
          Our Phone Number:
        </div>
        <div class="col-xs-12">
          <div class="contactInfo_phone_content  ">
            (If you are our existing customer, before you call us, please make sure you know your
            <span class="customerID">customer ID</span> and tell us on the phone or sometime if our service assistant is
            temporary away, please leave a message with your
            <span class="customerID">customer ID</span>, it will help us to match you with our system and your orders.)
          </div>
          <div class="contactInfo_phone_table">
            <table>
              <tbody>
              <tr>
                <td class="ctteltd1">+16079682368</td>
                <td class="ctteltd2">USA</td>
              </tr>
              <tr>
                <td class="ctteltd1">+27105006938</td>
                <td class="ctteltd2">South Africa</td>
              </tr>
              <tr>
                <td class="ctteltd1">+44 (1213)680012</td>
                <td class="ctteltd2">Europe</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "contactInfo"
  }
</script>

<style scoped lang="stylus">
  .contactInfo
    .contactInfo_title
      color #FF9900
      font-size .17rem
      line-height .2rem
      margin .1rem 0
      font-weight 700

    .contactInfo_form
      .contactInfo_form_title
        font-size .14rem
        font-weight 700
        line-height .3rem

        .recom
          font-size .13rem
          color #FF812D
          font-weight normal

      .contactInfo_form_btn
        height .3rem
        line-height .3rem
        background #00A0E9
        color #fff
        -webkit-border-radius: .05rem
        -moz-border-radius: .05rem
        border-radius: .05rem

    .contactInfo_whatsapp
      .contactInfo_whatsapp_title
        font-size .14rem
        font-weight 700
        line-height .3rem

      .contactInfo_whatsapp_content
        color #999
        font-size .13rem
        line-height .15rem
        padding-left .2rem

    .contactInfo_email
      .contactInfo_email_title
        font-size .14rem
        font-weight 700
        line-height .3rem

        .recom
          font-size .13rem
          color #FF812D
          font-weight normal

      .contactInfo_email_btn
        display: inline-block
        width 100%
        height .3rem
        line-height .3rem
        background #00A0E9
        color #fff
        -webkit-border-radius: .05rem
        -moz-border-radius: .05rem
        border-radius: .05rem

    .contactInfo_phone
      .contactInfo_phone_title
        font-size .14rem
        font-weight 700
        line-height .3rem

      .contactInfo_phone_content
        color #999
        font-size .13rem
        line-height .15rem
        padding-left .2rem
        padding-bottom .1rem
        .customerID
          color #FF812D
      .contactInfo_phone_table table
        margin-left: .2rem;
        width: 88%
        border-collapse: collapse;
      .contactInfo_phone_table td
        border: 1px solid #D1D1D1;
        height: .36rem;
        line-height: .36rem;
        text-align: left;
        padding-left .1rem

</style>
