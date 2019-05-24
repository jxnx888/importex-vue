<template>
    <div class="searchList">
      this is search show list page
<!--      <ul>-->
<!--        <li-->
<!--          v-for="item of list"-->
<!--          :key=""item.id>-->
<!--          {{ item.productName }}-->
<!--        </li>-->
<!--      </ul>-->
    </div>
</template>

<script>
    export default {
        name: "searchList",
      data() {
        return {
          searchList: [],

        }
      },
      // created:function(){
      //   this.$http.get("https://www.import-express.com/searchAutocomplete",{"keyword":"dress"}).then(res=>{
      //     console.log(res.data);
      //   });
      // },
      methods: {

        getSearchList() {
          // this.$http.get('https://www.import-express.com/searchAutocomplete') // npm run build ==>  /static/mock/index.json
          //   .then(this.getSearchListSucc)
          this.$http.get('/api/index.json') // npm run build ==>  /static/mock/index.json
            .then(this.getSearchListSucc)
        },
        getSearchListSucc(res) {
          res = res.data;
          if (res.ret && res.data) {
            const data = res.data;
            this.searchList = data.dress;
            console.log( JSON.stringify(this.searchList));
          }
        }
      },
      mounted() {
        this.getSearchList()
      }
    }
</script>

<style scoped lang="stylus">
.searchList
  height 1000px
  background #eee

</style>
