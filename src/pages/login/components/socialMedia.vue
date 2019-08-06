<template>
    <div class="row socialMedia">
      <div class="col-xs-12 facebook">
        <div class="facebook_btn text-center">
          <img src="https://www.import-express.com/img/m-login/login-facebook.png" alt="">
          Sign In With Facebook
        </div>
      </div>
      <div class="col-xs-12 gmail">
        <div class="gmail_btn text-center" >
          <img src="https://www.import-express.com/img/m-login/login-google.png" alt="">
          Sign In With Gmail
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "socialMedia"
    }
</script>

<style scoped lang="stylus">
.socialMedia
  margin-bottom .2rem
  .facebook, .gmail
    margin-top .2rem
    .facebook_btn, .gmail_btn
      width 100%
      height .4rem
      color #fff
      line-height .4rem
      font-size .15rem
      border-radius: 2px;
      background-color #4F68A8
    .facebook_btn img
      width .11rem
      height .2rem
    .gmail_btn img
      width .25rem
      height .22rem
    .gmail_btn
      background-color #cc4e3d
</style>
