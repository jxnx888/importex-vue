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
      :to="{name:'/myAccount/personalInfo/changeEmail', params:{password:this.password}}"
      class="row margin-top"
    >
      <div class="col-xs-3">
        Email:
      </div>
      <div class="col-xs-9 iconfont text-right">
        <span class="email">{{email}}</span>&#xe620;
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
    <router-link tag="div" to="/myAccount/personalInfo/changeAddress" class="row ">
      <div class="col-xs-10">
        Delivery Address
      </div>
      <div class="col-xs-2 iconfont  text-right">
        <span class="itemNum">{{addressNum}}</span>&#xe620;
      </div>
    </router-link>
    <router-link
      tag="div"
      to="/myAccount/personalInfo/changePassword"
      class="row ">
      <div class="col-xs-10">
        Change Password
      </div>
      <div class="col-xs-2 iconfont  text-right">&#xe620;</div>
    </router-link>
    <div class="row margin-top">
      <div class="col-xs-12 text-center" @click="signout()">
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
        personalInfo:{},
        email:'',
        addressNum:0,
        password:'',
      }
    },
    methods:{
      getpersonalInfo(res) {
        let url = '../individual/getUserinfoJson';
        this.$ajax.get(url)
          .then(this.getpersonalInfoSucc)
          .catch(function (res) {
            console.log("error, no data")
          })
      },

      getpersonalInfoSucc(res) {
        const data1 = res.data;
        const data =JSON.parse(data1);
        // console.log(JSON.stringify(data));
        const userInfo = data.bean;
        this.email = userInfo.email;
        this.addressNum = data.total;
        this.password = userInfo.pass;
      },
      handleGoBackClick() {
        this.$router.go(-1);
      },
      signout(){
        this.$router.push('../../login')
      }
    },
    mounted() {
      this.getpersonalInfo();
    },
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
