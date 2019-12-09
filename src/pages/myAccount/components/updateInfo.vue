<template>
  <div class="updateInfo">
    <div class="row updateInfo_header">
      <div @click="handleGoBackClick">
        <span class="iconfont ">&#xe643;</span>
        <p class="text-center">Update Contact Information</p>
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
            <input type="text" id="alternaticeEmail" placeholder="Please enter a email" :value="currentEmail"></input>
            <div class="validation" v-if="alternaticeEmail">Please enter a correct email.</div>
          </div>

          <div class="col-xs-5">
            Alternative Phone:
          </div>
          <div class="col-xs-7">
            <input type="text" id="alternaticePhone" placeholder="Please enter a valid phone" :value="currentPhone"></input>
          </div>

          <div class="col-xs-5">
            WhatsApp:
          </div>
          <div class="col-xs-7">
            <input type="text" id="WhatsApp"  placeholder="Please enter WhatsApp" :value="currentWhatsApp"></input>
          </div>

          <div class="col-xs-5">
            Kik:
          </div>
          <div class="col-xs-7">
            <input type="text" id="Kik"   placeholder="Please enter Kik" :value="currentKik"></input>
          </div>

          <div class="col-xs-5">
            Skype:
          </div>
          <div class="col-xs-7">
            <input type="text" id="Skype" placeholder="Please enter Skype:" :value="currentSkype"></input>
          </div>

          <div class="col-xs-5">
            Facebook:
          </div>
          <div class="col-xs-7">
            <input type="text" id="Facebook" placeholder="Please enter Facebook" :value="currentFacebook"></input>
          </div>

          <div class="col-xs-5">
            Twitter
          </div>
          <div class="col-xs-7">
            <input type="text" id="Twitter" placeholder="Please enter Twitter" :value="currentTwitter"></input>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="btn btn-primary" @click="submitContact()">
            Submit
          </div>
        </div>
      </div>
    </div>
    <div class="submitSucc" v-if="submitSucc">
      <div class="submitSuccTip">Submit success!</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "updateInfo",
    data() {
      return {
        personalInfo: {},
        alternaticeEmail:false,
        submitSucc:false,
        currentEmail:'',
        currentPhone:'',
        currentWhatsApp:'',
        currentKik:'',
        currentSkype:'',
        currentFacebook:'',
        currentTwitter:'',
      }
    },
    methods: {
      getInfo(res) {
        this.password = this.$route.params.password;
        // console.log(this.password)
        let url = '..//individual/userinfoJson?infomation=1';
        this.$ajax.get(url)
          .then(this.getInfoSucc)
          .catch(function (res) {
            console.log("error, no data")
          })
      },

      getInfoSucc(res) {
        const data1 = res.data;
        const data2 =JSON.parse(data1);
        const data = data2.userEx;
        console.log(JSON.stringify(data));
          this.currentEmail=data.otheremail;
          this.currentPhone=data.otherphone;
          this.currentWhatsApp=data.whatsapp;
          this.currentKik=data.kiki;
          this.currentSkype=data.skype;
          this.currentFacebook=data.facebook;
          this.currentTwitter=data.tweater;

      },
      changeInfo(res) {
        var alternaticeEmail = $("#alternaticeEmail").val();
        var alternaticePhone = $("#alternaticePhone").val();
        var WhatsApp = $("#WhatsApp").val();
        var Kik = $("#Kik").val();
        var Skype = $("#Skype").val();
        var Facebook = $("#Facebook").val();
        var Twitter = $("#Twitter").val();
        var url = '..//individual/insertInformation';
        this.$ajax.post(url,
          this.$qs.stringify({
            otheremail: alternaticeEmail,
            otherphone:alternaticePhone,
            whatsapp:WhatsApp,
            kiki:Kik,
            skype:Skype,
            facebook:Facebook,
            tweater:Twitter})
        )
          .then(this.changeInfoSucc)
          .catch(function (res) {
            // console.log("error")
          })
      },
      changeInfoSucc(res) {
        const data = res.data;
        console.log(JSON.stringify(data))
        if(data.ok){
          console.log("updataed")
          this.submitSucc = true;
          setTimeout(() => {
            this.$router.push("/myAccount")
          },1500);
        }

      },
      handleGoBackClick() {
        this.$router.go(-1);
      },
      submitContact(){
        var alternaticeEmail = this.checkEmailPW();
        if(alternaticeEmail){
          this.changeInfo();
        }

      },
      checkEmailPW(){
        var alternaticeEmail = $("#alternaticeEmail").val();
        if(alternaticeEmail == '' ){
          this.alternaticeEmail = true;
          setTimeout(() => {
            this.alternaticeEmail =false;
          },5000);
          return
        }
        else if(alternaticeEmail !==''){
          var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
          if(!reg.test(alternaticeEmail)){
            this.alternaticeEmail = true;
            setTimeout(() => {
              this.alternaticeEmail =false;
            },5000);
            return
          }
          else {return true;}
        }
      },
    },
    mounted() {
      this.getInfo();
    }
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
    .validation
      color: red;
      font-size: .13rem;
      line-height: .2rem;
  .submitSucc
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: rgba(0,0,0,0.6);
    .submitSuccTip
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 45%;
      height: .5rem;
      margin: auto;
      border-radius: 10px;
      background: #fff;
      z-index: 11;
      color #4CBD27
      padding .2rem
</style>
