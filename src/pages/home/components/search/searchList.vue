<template>
    <div class="searchList">
       <ul>
         <router-link
           tag="li"
           class="searchListItems "
           :to="/searchResult/+ keyword" >
           <p class="col-xs-7">{{keyword}}</p>
            <span class="defaultCat col-xs-5">Default Category</span>
           <span class="inAllCat col-xs-12">in All Categories</span>
         </router-link>

         <router-link
           tag="li"
           v-for="(item, index) in productList"
           class="searchListItems"
           :to="/searchResult/+ item"
           v-html="item"
          >
<!--           因为接收的数据没有id，所以会有warning，因为没有key-->


<!--           <div v-html="productList" >{{ item }}</div>-->
        </router-link>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "searchList",
      props: {
        productList: Array,
        keyword:String
      },
      data() {
        return {
        }
      },
      methods: {

      }
    }
</script>

<style scoped lang="stylus">
.searchList
  height 100%
  width 100%
  background #fff
  z-index: 9
  left: 0
  right: 0
  top: .9rem
  bottom: 0
  .searchListItems
    width: 97%;
    padding-left: 5%;
    height: .4rem;
    border-top: 1px solid #ececec;
    line-height: 0.40rem;
    font-size: .14rem
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    .col-xs-7, .col-xs-5, .col-xs-12
      padding-left 0rem
      padding-right 0rem
    .defaultCat
      text-align: right
      height: .2rem;
      line-height: .2rem;
      color: #EF8D01;
      font-size: .14rem;
    .inAllCat
      height: .2rem;
      line-height: .2rem;
      font-size: 0.14rem;
      color: #999;

  .searchListItems p
    height: .2rem;
    line-height: .2rem;
    font-size: .14rem;
    color: #333;


</style>
