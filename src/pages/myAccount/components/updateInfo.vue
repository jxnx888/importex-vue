<template>
  <div class="updateInfo">
    <div class="row updateInfo_header">
      <div @click="handleGoBackClick">
        <span class="iconfont ">&#xe643;</span>
        <p class="text-center">Update Contact Informationn</p>
      </div>
    </div>
    <div class="updateInfo_content">
      <div class="col-xs-12 notification">
        ImportExpress will verify your payment within 24 hours
        once you placed your order. When the payment passes
        verification, we will confirm payment received and your
        order will be in normal process. If it does not pass verification,
        you will be informed via email.
      </div>
      <div class="col-xs-12 tip">
        More ways to get in timely contact with you regardding
        your order, please provide us at least one altrnative
        ways below
      </div>
      <div class=" information">
        <div class="inputSection">
          <div class="col-xs-5">
            Alternative Email:
          </div>
          <div class="col-xs-7">
            <input type="text" placeholder="Please enter a email"></input>
          </div>

          <div class="col-xs-5">
            Alternative Phone:
          </div>
          <div class="col-xs-7">
            <input type="text" placeholder="Please enter a valid phone"></input>
          </div>

          <div class="col-xs-5">
            WhatsApp:
          </div>
          <div class="col-xs-7">
            <input type="text" placeholder="Please enter WhatsApp"></input>
          </div>

          <div class="col-xs-5">
            Kik:
          </div>
          <div class="col-xs-7">
            <input type="text" placeholder="Please enter Kik"></input>
          </div>

          <div class="col-xs-5">
            Skype:
          </div>
          <div class="col-xs-7">
            <input type="text" placeholder="Please enter Skype:"></input>
          </div>

          <div class="col-xs-5">
            Facebook:
          </div>
          <div class="col-xs-7">
            <input type="text" placeholder="Please enter Facebook"></input>
          </div>

          <div class="col-xs-5">
            Twitter
          </div>
          <div class="col-xs-7">
            <input type="text" placeholder="Please enter Twitter"></input>
          </div>
        </div>
        <div class="col-xs-12">
          <button class="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "updateInfo",
    data() {
      return {
        personalInfo: {}
      }
    },
    methods: {
      getData() {
        this.$ajax.get('/static/mock/index.json') // npm run build ==>  /static/mock/index.json
          .then(this.getDataSucc)
      },
      getDataSucc(res) {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.personalInfo = data.personalInfo;
          // console.log(JSON.stringify(this.shoppingCartInfors))//object
        }
      },
      handleGoBackClick() {
        this.$router.go(-1);
      },
    },
  }
</script>

<style scoped lang="stylus">
  .updateInfo_header
    height .45rem
    line-height .45rem
    font-size .13rem
    color #fff
    background #01a4ef !important

  .updateInfo_header span
    position: absolute;
    left .15rem
    font-size .2rem
    color #fff

  .updateInfo_header a
    color #fff
    font-size .15rem

  .updateInfo_content
    .notification
      color #999
      font-size .13rem
      line-height .18rem
      margin 5px 0

    .tip
      font-size .13rem
      color #333
      font-weight 700
      line-height .18rem
    .information
      .inputSection
        line-height .4rem
        font-size .13rem
        @media screen and (max-width: 320px)
          font-size .1rem
      .btn-primary
        background-color #01a4ef
        border-color #01a4ef
        width 100%
        margin .3rem 0
    .information input
      height .35rem
      width 100%
      padding-left .1rem
      color: #555;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
</style>
