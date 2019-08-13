<template>
    <div class="changeEmail container">
      <div class="row changeEmail_header">
        <div @click="handleGoBackClick">
          <span class="iconfont ">&#xe643;</span>
          <p class="text-center">Update Sign in Email</p>
        </div>
      </div>
      <div class="row changeEmail_content">
        <div class="col-xs-12 text-center currentEmail">
          {{userEmail}}
        </div>
        <div class="col-xs-12 text-left title">
          New Email:
        </div>
        <div class="col-xs-12 text-left">
          <input type="text" class="newEmail" id="newEmail" placeholder="Enter new email" @keyup.enter="submitChangeEmail()">
          <div class="validation" v-if="newEmail">Please enter a valid email address.</div>
        </div>
        <div class="col-xs-12 text-left title">
          Enter new email again:
        </div>
        <div class="col-xs-12 text-left">
          <input type="text" class="newEmail" id="newEmailConfirm" placeholder="Confirm new email again" @keyup.enter="submitChangeEmail()">
          <div class="validation" v-if="newEmailConfirm">Two mailbox inconsistencies.</div>
        </div>
        <div class="col-xs-12">
          <div class="submitBtn text-center" @click="submitChangeEmail()">Submit</div>
        </div>
      </div>
      <div class="submitSucc" v-if="submitSucc">
        <div class="submitSuccTip">Submit success!</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "changeEmail",
      props:{
      },
      data(){
          return {
            userEmail:'',
            newEmail:false,
            newEmailConfirm:false,
            submitSucc:false,
            password:'',
          }
      },
      methods:{
        handleGoBackClick() {
          this.$router.go(-1);
        },
        getEmailInfo(res) {
          this.password = this.$route.params.password;
          // console.log(this.password)
          let url = 'http://192.168.1.163:8085/individual/userinfoJson';
          this.$ajax.get(url)
            .then(this.getEmailInfoSucc)
            .catch(function (res) {
              console.log("error, no data")
            })
        },

        getEmailInfoSucc(res) {
          const data1 = res.data;
          const data =JSON.parse(data1);
          // console.log(JSON.stringify(data));
          this.userEmail = data.email;
        },
        submitChangeEmail(){
          var checkedEmail = this.checkEmailPW();
          if(checkedEmail){
          var newEmail = $("#newEmail").val();
          var newEmailConfirm = $("#newEmailConfirm").val();
          // console.log(newEmail,newEmailConfirm)
          var url = 'http://192.168.1.163:8085/userController/mChengeEmail';
          this.$ajax.post(url,
            this.$qs.stringify({oldEmail: this.newEmail,newEmail:newEmailConfirm, pass:this.password})
          )
            .then(this.submitChangeEmailSucc)
            .catch(function (res) {
              // console.log("error")
            })
          }
        },
        submitChangeEmailSucc(res) {
          const data = res.data;
          if(data.userBean &&data.userBean!="undefined"){
            console.log("Change email succeeded:  "+ JSON.stringify(data));
            this.submitSucc = true;
            setTimeout(() => {
              this.$router.push("/myAccount")
            },1500);

          }


        },
        checkEmailPW(){
          var newEmail = $("#newEmail").val();
          var newEmailConfirm = $("#newEmailConfirm").val();
          if(newEmail == '' ){
            this.newEmail = true;
            setTimeout(() => {
              this.newEmail =false;
            },5000);
            return
          }
          else if(newEmail !==''){
            var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if(!reg.test(newEmail)){
              this.newEmail = true;
              setTimeout(() => {
                this.newEmail =false;
              },5000);
              return
            }
            else if (newEmailConfirm == ''){
              this.newEmail =false;
              this.newEmailConfirm = true;
              setTimeout(() => {
                this.newEmailConfirm =false;
              },5000);
              return
            }
            else if (newEmailConfirm !== ''){
              if(newEmailConfirm !== newEmail){
                this.newEmail =false;
                this.newEmailConfirm = true;
                setTimeout(() => {
                  this.newEmailConfirm =false;
                },5000);
                return
              }
              else {
                console.log("valid email, and same")
                return true;
              }
            }
          }
        },
      },
      mounted() {
        this.getEmailInfo();
      }
    }
</script>

<style scoped lang="stylus">
  .changeEmail_header
    height .45rem
    line-height .45rem
    font-size .13rem
    color #fff
    background #01a4ef !important

  .changeEmail_header span
    position: absolute;
    left .15rem
    font-size .2rem
    color #fff

  .changeEmail_header a
    color #fff
    font-size .15rem
  .changeEmail_content
    .currentEmail
      font-weight bold
      line-height .6rem
      font-size .15rem
    .title
      font-size .14rem
      color #333
      line-height .16rem
      margin-bottom .1rem
      margin-top .2rem
    .newEmail
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
    .submitBtn
      width 100%
      height .4rem
      line-height .4rem
      background-color #01a4ef
      -webkit-border-radius: 4px
      -moz-border-radius: 4px
      border-radius: 4px
      margin-top .5rem
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
