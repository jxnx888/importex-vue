<template>
  <div class="relatedSearches">
    <div class="wrapper">

    <div class="relatedSearches_title">
      Related Searches
    </div>
    <router-link
      class="relatedSearches_link"
      v-for="(item, index) in list"
      :key="index"
      :to="'/searchResult/'+ item"
      >
      {{item}}
    </router-link>
  </div>
  </div>
</template>

<script>
  export default {
    name: "relatedSearches",
    data() {
      return {
      list:["Crown Chain", "Assemble Ornament Pendant", "Key Pendant Necklace", "Ornament Pendant", "Sweater Chain"]
      }
    }
  }
</script>

<style scoped lang="stylus">
.relatedSearches
  margin-top .1rem
  background-color #fff
  .wrapper
    padding 0 15px
    .relatedSearches_title
      font-size .15rem
      font-weight bold
      line-height .3rem
      border-bottom 1px solid #eee
    .relatedSearches_link
      font-size .15rem
      line-height .2rem
      color #333
      text-decoration underline #333
      padding-right .1rem

</style>
