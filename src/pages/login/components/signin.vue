<template>
  <div class="signin">
    <div class="row">
      <div class="col-xs-12 text-left title">
        YOUR EMAIL:
      </div>
      <div class="col-xs-12 text-left">
        <input type="text" class="signin_input" id="signin_email" placeholder="Email/User Name" @keyup.enter="signInSubmit">
        <div class="validation" v-if="signin_email">Please enter a valid email address.</div>
      </div>
      <div class="col-xs-12 text-left title">
        YOUR PASSWORD:
      </div>
      <div class="col-xs-12 text-left">
        <input type="password" class="signin_input" id="signin_passowrd" placeholder="Password" @keyup.enter="signInSubmit">
        <div class="validation" v-if="signin_passowrd">Please enter 6 - 20 characters</div>
      </div>
      <div class="col-xs-12 signin_button">
        <button class="signin_btn"  @click="signInSubmit()" >SIGN IN</button>
      </div>
      <div class="col-xs-12 forgotPW">
        Forgot password or don't have one？
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
      data() {
        return {
          signin_email:false,
          signin_passowrd:false,
        }
      },
      methods:{
        signInSubmit(){
          this.checkEmailPW();
          var signin_email = $("#signin_email").val();
          var signin_passowrd = $("#signin_passowrd").val();

          var url = '..//user/loginNew';
          this.$ajax.post(url,
            this.$qs.stringify({email: signin_email,pass:signin_passowrd})
          )
            .then(this.signInSubmitSucc)
            .catch(function (res) {
              // console.log("error")
            })
        },
        signInSubmitSucc(res) {
          const data = res.data;
          console.log("Sign in succeeded:  "+ data);
          this.$router.push("/shoppingCart")
        },
        checkEmailPW(){
          var signin_email = $("#signin_email").val();
          var signin_passowrd = $("#signin_passowrd").val();
          if(signin_email == '' ){
            this.signin_email = true;
            setTimeout(() => {
              this.signin_email =false;
            },5000);
            return
          }
          else if(signin_email !==''){
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
          }
        },

        checkSignInAccount(mes){
          var stimer=false;
          if(mes == "oEmail"){
            var emailVal = $("#"+mes).val();
            var re = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
            if(!$.trim(emailVal)){
              clearInterval(textTimer55);
              $(".login_user").css('visibility','visible').text("Please enter the username");
              /*textTimer1 = setInterval("changeColor('login_user')", 300);*/
              textTimer44 =setTimeout(clearNotice,4000);
              stimer = false;
              return false;
            }else if(!re.test(emailVal)){
              clearInterval(textTimer55);
              $(".login_user").css('visibility','visible').text("Please enter a valid email address.");
              /*textTimer1 = setInterval("changeColor('login_user')", 300);*/
              textTimer44 =setTimeout(clearNotice,4000);
              stimer = false;
              return false;
            }
            stimer = true;
          }else if(mes == "oPassword"){
            var passVal = $("#"+mes).val();
            if($.trim(passVal).length < 6 || $.trim(passVal).length > 35){
              clearInterval(textTimer44);
              $(".login_user").css('visibility','visible').text("Please enter 6 - 20 characters");
              /*textTimer2 = setInterval("changeColor('login_user')", 300);*/
              textTimer55 = setTimeout(clearNotice,4000);
              stimer = false;
              return false;
            }else{
              var pass = $.trim($('#oPassword').val());
              var email = $.trim($('#oEmail').val());
              stimer = true;
            }
          }
          return stimer;
        }

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
    .signin_input
      width 100%
      height: 0.40rem;
      border: 1px solid #A9A9A9;
      color: #333;
      font-size: 0.14rem;
      padding-left: 0.10rem;
      border-radius: 2px;
    .validation
      color: red;
      font-size: .13rem;
      line-height: .2rem;
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
    .forgotPW
      margin .3rem 0
      font-size .14rem
      color: #01A4EF;
</style>
