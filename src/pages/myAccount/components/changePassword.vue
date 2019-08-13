<template>
  <div class="changePassword container">
    <div class="row changePassword_header">
      <div @click="handleGoBackClick">
        <span class="iconfont ">&#xe643;</span>
        <p class="text-center">Change Password</p>
      </div>
    </div>
    <div class="row changePassword_content">
      <div class="col-xs-12 tip">
        It is very important to keep your passwords secure and to remember them:
      </div>
      <div class="col-xs-12 tip">
        <ul class="col-xs-12 change_word_txt2 notification">
          <li><p>Always use a strong password.</p></li>
          <li><p>Change your password regularly,and avoid reusing old passwords.</p></li>
          <li><p>Never send your password or any private account information over email.</p></li>
        </ul>
      </div>
    </div>
    <div class="row changeEmail_content">

      <div class="col-xs-12 text-left title">
        Current Password:
      </div>
      <div class="col-xs-12 text-left">
        <input type="password" class="newEmail" id="currentPassword" placeholder="Your current login password"
               @keyup.enter="submitChangeEmail()">
        <div class="validation" v-if="currentPassword">Please enter a current password.</div>
      </div>
      <div class="col-xs-12 text-left title">
        New Passowrd:
      </div>
      <div class="col-xs-12 text-left">
        <input type="password" class="newEmail" id="newPassword" placeholder="4 - 16 characters (A-Z, a-z, 0-9)"
               @keyup.enter="submitChangeEmail()">
        <div class="validation" v-if="newPassword">Please enter 6 - 20 characters.</div>
        <div class="validation" v-if="newPasswordSame">The new password is same as the old one.</div>
      </div>
      <div class="col-xs-12 text-left title">
        Enter new passowrd again:
      </div>
      <div class="col-xs-12 text-left">
        <input type="password" class="newEmail" id="newPasswordConfirm" placeholder="Confirm new password"
               @keyup.enter="submitChangeEmail()">
        <div class="validation" v-if="newPasswordConfirm">Two password inconsistencies.</div>
      </div>
      <div class="col-xs-12">
        <div class="submitBtn text-center" @click="submitChangePassword()">Submit</div>
      </div>
    </div>
    <div class="submitSucc" v-if="submitSucc">
      <div class="submitSuccTip">Submit success!</div>
    </div>
    <div class="currentPasswordDiff" v-if="currentPasswordDiff">
      <div class="currentPasswordDiffTip">The current password is wrong.</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "changePassword",
    data() {
      return {
        personalInfo: {},
        currentPassword: false,
        newPassword: false,
        newPasswordSame: false,
        newPasswordConfirm: false,
        currentPasswordDiff: false,
        submitSucc: false,
        currentPasswordIs: '',
      }
    },
    methods: {
      getInfo(res) {
        this.password = this.$route.params.password;
        // console.log(this.password)
        let url = 'http://192.168.1.163:8085/individual/userinfoJson';
        this.$ajax.get(url)
          .then(this.getInfoSucc)
          .catch(function (res) {
            console.log("error, no data")
          })
      },

      getInfoSucc(res) {
        const data1 = res.data;
        const data2 = JSON.parse(data1);
        const data = data2.userEx;
        // console.log(JSON.stringify(data2));
        this.currentPasswordIs = data2.pass;
        // console.log(this.currentPasswordIs);

      },
      changeInfo(res) {
        var currentPassword = $("#currentPassword").val();
        var newPasswordConfirm = $("#newPasswordConfirm").val();

        var url = 'http://192.168.1.163:8085/userController/mChengePass';
        this.$ajax.post(url,
          this.$qs.stringify({
            oldpass: currentPassword,
            passt: newPasswordConfirm,

          })
        )
          .then(this.changeInfoSucc)
          .catch(function (res) {
            // console.log("error")
          })
      },
      changeInfoSucc(res) {
        const data = res.data;
        // console.log(JSON.stringify(data))
        if (data.res) {
          // console.log("updataed")
          this.submitSucc = true;
          setTimeout(() => {
            this.$router.push("/myAccount")
          }, 1500);
        }
        else{
          this.currentPasswordDiff = true;
          setTimeout(() => {
            this.currentPasswordDiff = false;
          }, 2000);
          return
        }

      },
      handleGoBackClick() {
        this.$router.go(-1);
      },
      submitChangePassword() {
        var checkPassword = this.checkPassword();
        if (checkPassword) {
          this.changeInfo();
          console.log("test")
        }

      },
      checkPassword() {
        var currentPassword = $("#currentPassword").val();
        var newPassword = $("#newPassword").val();
        var newPasswordConfirm = $("#newPasswordConfirm").val();
        if (currentPassword == '') {
          this.currentPassword = true;
          setTimeout(() => {
            this.currentPassword = false;
          }, 5000);
          return
        } else if (currentPassword !== '') {

          if (newPassword == '') {
            this.currentPassword = false;
            this.newPassword = true;
            setTimeout(() => {
              this.newPassword = false;
            }, 5000);
            return
          } else if (newPassword !== '') {
            if (newPassword.length < 6) {
              this.currentPassword = false;
              this.newPassword = true;
              setTimeout(() => {
                this.newPassword = false;
              }, 5000);
              return
            } else {
              if(newPasswordConfirm ==''){
                this.currentPassword = false;
                this.newPassword = false;
                this.newPasswordConfirm = true;
                setTimeout(() => {
                  this.newPasswordConfirm = false;
                }, 5000);
                return
              }
              else {
                if(newPasswordConfirm !== newPassword){
                  this.currentPassword = false;
                  this.newPassword = false;
                  this.newPasswordConfirm = true;
                  setTimeout(() => {
                    this.newPasswordConfirm = false;
                  }, 5000);
                  return
                }
                else {
                  return true;
                }
              }
            }
          }
        }


      },
    },
    mounted() {
      this.getInfo();
    }
  }
</script>

<style scoped lang="stylus">
  .changePassword_header
    height .45rem
    line-height .45rem
    font-size .13rem
    color #fff
    background #01a4ef !important

  .changePassword_header span
    position: absolute;
    left .15rem
    font-size .2rem
    color #fff

  .changePassword_header a
    color #fff
    font-size .15rem

  .changePassword_content
    .notification
      color #999
      font-size .13rem
      line-height .18rem
      margin 5px 0

    .notification li
      list-style disc

    .tip
      font-size .13rem
      color #333
      font-weight 700
      line-height .18rem
      margin .05rem 0 .05rem 0

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

  .submitSucc, .currentPasswordDiff
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: rgba(0, 0, 0, 0.6);

    .submitSuccTip, .currentPasswordDiffTip
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
    .currentPasswordDiffTip
      width: 72%;
      color #ff0000
</style>
