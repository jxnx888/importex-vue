<template>
    <div class="searchList">
       <ul>
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
        productList: Array
      },
      data() {
        return {
        }
      },
      methods: {}
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
