<template>
  <div class="login container">
    <div class="row header ">
      <div @click="handleGoBackClick" class="col-xs-2 login_back">
        <span class="iconfont ">&#xe79b;</span>
      </div>
      <div class="header_img col-xs-8 text-center">
        <img src="https://www.import-express.com/newindex/img/logo.png" alt="">
      </div>
      <router-link
        tag="div"
        class="goHome col-xs-2"
        to="/">
        Home
      </router-link>
    </div>
    <div style="clear:both"></div>
    <div class="row top_title">
      <div class="col-xs-6 text-center"@click="registerClick">
        <p :class="{selected:shows === 1}" >Register</p>
      </div>
      <div class="col-xs-6 text-center" @click="signInClick">
        <p  :class="{selected:shows === 2}" >Sign In</p>
      </div>
    </div>
    <signin v-if="showSignIn"></signin>
    <register v-if="showRegister"></register>
  </div>
</template>

<script>
  import Signin from "./components/signin";
  import register from "./components/register";
  export default {
    name: "login",
    components: {Signin,register},
    data() {
      return {
        shows: 2, //导航默认值
        showSignIn: true,
        showRegister: false,
      }
    },
    methods: {
      handleGoBackClick() {
        this.$router.go(-1);
      },
      registerClick() {
        this.shows = 1;
        this.showRegister=true;
        this.showSignIn = false;
      },
      signInClick() {
        this.shows = 2;
        this.showRegister=false;
        this.showSignIn = true;
      },
    }
  }
</script>

<style scoped lang="stylus">
  .login
    .header
      height .45rem
      line-height .45rem
      box-shadow: 0 0 1px rgba(0, 0, 0, .85);

      .login_back span
        font-size .2rem

    .header_img img
      width 100%
    .top_title
      height .5rem
      line-height .5rem
      font-size .17rem
      color #999
    .selected
      color #01a4ef
      border-bottom 2px solid #01a4ef !important

</style>
