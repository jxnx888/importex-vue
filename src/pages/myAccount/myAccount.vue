<template>
<div class="myAccount">
  <top-header></top-header>
  <personal-info :personalInfo="personalInfo" :dataInfo="dataInfo"></personal-info>
</div>
</template>

<script>
    import TopHeader from "./components/topHeader";
    import PersonalInfo from "./components/personalInfo";
    export default {
        name: "myAccount",
      components: {PersonalInfo, TopHeader},
      data (){
        return{
          personalInfo:{},
          dataInfo:{}
        }
      },
      methods: {

        getPersonalInfo(res) {
          let url = 'http://192.168.1.163:8085/individual/getCenterJson';
          this.$ajax.get(url)
            .then(this.getPersonalInfoSucc)
            .catch(function (res) {
              console.log("error, no data")
            })
        },

        getPersonalInfoSucc(res) {
          console.log(res)
          const data = res.data.data;
          // console.log(JSON.stringify(data))
          this.personalInfo =data.userBean;
          this.dataInfo = data;
        },

      },
      mounted() {
        this.getPersonalInfo();
      }
    }
</script>

<style scoped lang="stylus">
.myAccount
  background #eee
</style>
