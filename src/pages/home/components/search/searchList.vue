<template>
    <div class="searchList">
       <ul>
         <router-link
           tag="li"
           v-for="item of searchList"
           :key="item.id"
           class="searchListItems"
           :to="'/searchResult/'+item.id"
          >
          {{ item.keyword }}
        </router-link>
      </ul>
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
            this.searchList = data.searchList;
            // console.log( JSON.stringify(this.searchList));
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
  height 100%
  width 100%
  background #fff
  z-index: 99
  position: fixed
  left: 0
  right: 0
  top: .9rem
  bottom: 0
  .searchListItems
    width: 97%;
    padding-left: 3%;
    height: .4rem;
    border-top: 1px solid #ececec;
    line-height: 0.40rem;
    font-size: .14rem
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
</style>
