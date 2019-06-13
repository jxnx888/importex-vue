<template>
    <div class="changeEmail">
      <div class="row changeEmail_header">
        <div @click="handleGoBackClick">
          <span class="iconfont ">&#xe643;</span>
          <p class="text-center">Update Sign in Email</p>
        </div>
      </div>
      <div class="changeEmail_content">
        <div class="col-xs-12">
          {{personalInfo.email}}
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "changeEmail",
      props:{
        personalInfo:Object
      },
      methods:{
        handleGoBackClick() {
          this.$router.go(-1);
        },
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

</style>
