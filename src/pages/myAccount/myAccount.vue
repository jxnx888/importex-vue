<template>
<div class="myAccount">
  <top-header></top-header>
  <personal-info :personalInfo="personalInfo"></personal-info>
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

      },
      mounted() {
        this.getData();
      }
    }
</script>

<style scoped lang="stylus">
.myAccount
  background #eee
</style>
