<template>
  <div class="signin">
    <div class="row">
      <div class="col-xs-12 text-left title">
        YOUR COUNTRY:
      </div>
      <div class="col-xs-12 text-left title">
        <select name="country" id="country" >
          <option :value="item.id"
                  v-for="(item, index) in countryList"
                  :key="index"
                  class="currentCountry col-xs-8"
          >{{item.country}}</option>
        </select>
      </div>
      <div class="col-xs-12 text-left title">
        YOUR EMAIL:
      </div>
      <div class="col-xs-12 text-left">
        <input type="text" class="signin_input" id="signin_email" placeholder="Please enter the email" @keyup.enter="submitRegiste">
        <div class="validation" v-if="signin_email">Please enter a valid email address.</div>
      </div>
      <div class="col-xs-12 text-left title">
        YOUR PASSWORD:
      </div>
      <div class="col-xs-12 text-left">
        <input type="password" class="signin_input" id="signin_passowrd" placeholder="Please enter the password" @keyup.enter="submitRegiste">
        <div class="validation" v-if="signin_passowrd">Please enter 6 - 20 characters</div>
      </div>
      <div class="col-xs-12 text-left title">
        CONFIRM PASSWORD:
      </div>
      <div class="col-xs-12 text-left">
        <input type="password" class="signin_input" id="signin_passowrd_confirm" placeholder="Please confirm the password" @keyup.enter="submitRegiste">
        <div class="validation" v-if="signin_passowrd_confirm_null">Please enter 6 - 20 characters</div>
        <div class="validation" v-if="signin_passowrd_confirm">Please enter the same password as above</div>
      </div>
      <div class="col-xs-12 text-left title">
        WHATSAPP <span class="optional">(OPTIONAL)</span>:
      </div>
      <div class="col-xs-12 text-left">
        <input type="text" class="signin_input" placeholder="Please enter the WhatsApp number" @keyup.enter="submitRegiste">
      </div>
      <div class="col-xs-12 signin_button">
        <button class="signin_btn" @click="submitRegiste">SUBMIT</button>
      </div>
      <div class="col-xs-12 terms">
        <input type="checkbox" checked="checked" id="terms_input"
               v-model="status"
               @change="switchFn(status)">
        <span>I agree with</span>
        <span class="termsLink"> Terms and Conditions</span>
      </div>
      <div class="col-xs-12 checked_note" v-if="showNote">
        To complete the registration, you must agree to the consent above.
      </div>
      <div class="col-xs-12 tips">
        *Our website is designed for <b> business customers </b>
        only.  If you are
        buying for
        personal use, please don't register.
      </div>
    </div>
    <social-media></social-media>
  </div>
</template>

<script>
    import SocialMedia from "./socialMedia";
    export default {
        name: "signin",
      components: {SocialMedia},
      data(){
          return{
            countryList:[],
            showNote: false,
            status:true,
            signin_email:false,
            signin_passowrd:false,
            signin_passowrd_confirm_null:false,
            signin_passowrd_confirm:false,
          }
      },
      methods:{
        getCountryList(res) {
          let url = 'http://192.168.1.163:8085/user/queryZoneListJson';
          this.$ajax.get(url,)
            .then(this.getCountryListSucc)
            .catch(function (res) {
              console.log("error, no data")
            })
        },

        getCountryListSucc(res) {
          const data = res.data;
          // console.log(JSON.stringify(data));
          this.countryList =data;
        },
        switchFn(status){
          // console.log(status);
          if(status === true){
            this.showNote = false;
          }
          else {this.showNote = true;}
        },
        submitRegiste(){
          this.checkValidation()
        },
        checkValidation(){
          var signin_email = $("#signin_email").val();
          var signin_passowrd = $("#signin_passowrd").val();
          var signin_passowrd_confirm = $("#signin_passowrd_confirm").val();
          if(signin_email ==''){
            this.signin_email = true;
            setTimeout(() => {
              this.signin_email =false;
            },5000);
            return
          }
          else {
            var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if(!reg.test(signin_email)){
              this.signin_email = true;
              setTimeout(() => {
                this.signin_email =false;
              },5000);
              return
            }
            else if (signin_passowrd == ''){
              this.signin_passowrd = true;
              setTimeout(() => {
                this.signin_passowrd =false;
              },5000);
              return
            }
            else {
              if(signin_passowrd.length <6){
                this.signin_passowrd = true;
                setTimeout(() => {
                  this.signin_passowrd =false;
                },5000);
                return
              }
              else {
                if(signin_passowrd_confirm == ''){
                  this.signin_passowrd_confirm_null = true;
                  this.signin_passowrd_confirm =false;
                  setTimeout(() => {
                    this.signin_passowrd_confirm_null =false;
                  },5000);
                  return
                }
                else {
                  if(signin_passowrd_confirm !==signin_passowrd){
                    this.signin_passowrd_confirm_null =false;
                    this.signin_passowrd_confirm = true;
                    setTimeout(() => {
                      this.signin_passowrd_confirm =false;
                    },5000);
                    return
                  }
                  else{
                    alert("good")
                  }
                }
              }
            }
          }
        }
      },
      mounted() {
        this.getCountryList();
      },
      watch:{

      }
    }
</script>

<style scoped lang="stylus">
  .signin
    .title
      font-size .14rem
      color #333
      line-height .16rem
      margin-bottom .1rem
      margin-top .2rem
      #country
        width 100%
        height .4rem
        border 1px solid #a9a9a9
        -webkit-border-radius: 2px
        -moz-border-radius: 2px
        border-radius: 2px
        padding-left .1rem
      .optional
        color #999
        font-size .12rem
    .validation
      font-size: 0.13rem;
      color: red;
      line-height: 0.2rem;
    .signin_input
      width 100%
      height: 0.40rem;
      border: 1px solid #A9A9A9;
      color: #333;
      font-size: 0.14rem;
      padding-left: 0.10rem;
      border-radius: 2px;
    .signin_button
      .signin_btn
        width 100%
        height .45rem
        line-height .45rem
        background-color #01A4EF
        font-size .17rem
        color #fff
        -webkit-border-radius: 2px
        -moz-border-radius: 2px
        border-radius: 2px
        margin-top: .3rem
    .terms
      margin .07rem 0 0 0
      height .2rem
      line-height .2rem
      font-size .14rem
      #terms_input
        margin 0
      .termsLink
        color: #01A4EF;
    .checked_note
      color red
      font-size .1rem
    .tips
      color #999
      font-size .13rem
      line-height .14rem
      margin .1rem 0
</style>
