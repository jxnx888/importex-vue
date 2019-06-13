<template>
  <div class="personalInfo container">
    <div class="row personalInfo_top">
      <div @click="handleGoBackClick" >
        <span class="iconfont ">&#xe643;</span>
        <p class="text-center">Personal Information</p>
      </div>
    </div>

    <router-link
      tag="div"
      to="/myAccount/personalInfo/changeEmail"
      class="row margin-top"
      :personalInfo="personalInfo">
      <div class="col-xs-3">
        Email:
      </div>
      <div class="col-xs-9 iconfont text-right">
        <span class="email">{{personalInfo.email}}</span>&#xe620;
      </div>
    </router-link>
    <router-link
      tag="div"
      to="/myAccount/personalInfo/updateInfo"
      class="row ">
      <div class="col-xs-10">
        Update Contact Information
      </div>
      <div class="col-xs-2 iconfont  text-right">&#xe620;</div>
    </router-link>
    <div class="row ">
      <div class="col-xs-10">
        Delivery Address
      </div>
      <div class="col-xs-2 iconfont  text-right">
        <span class="itemNum">0</span>&#xe620;
      </div>
    </div>
    <div class="row ">
      <div class="col-xs-10">
        Change Password
      </div>
      <div class="col-xs-2 iconfont  text-right">&#xe620;</div>
    </div>
    <div class="row margin-top">
      <div class="col-xs-12 text-center">
        Sign Out
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "personalInfoDetail",
    data (){
      return{
        personalInfo:{}
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
    mounted() {
      this.getData();
    }
  }
</script>

<style scoped lang="stylus">
  .personalInfo
    background #eee
    .personalInfo_top
      height .45rem
      line-height .45rem
      font-size .13rem
      color #fff
      background #01a4ef!important
    .personalInfo_top span
      position: absolute;
      left .15rem
      font-size .2rem
      color #fff
    .personalInfo_top a
      color #fff
      font-size .15rem
    .margin-top
      margin-top .1rem
    .row
      background #fff
      line-height .45rem
      border 1px solid #ddd
      margin-bottom -1px
      .email
        color #999
      .col-xs-2
        padding-left 0
      .itemNum
        display: inline-block;
        min-width: 10px;
        padding: 4px 7px;
        font-size: 12px;
        font-weight: 700;
        line-height: .12rem;
        color: #fff;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        background-color: #777;
        border-radius: 10px;
</style>
