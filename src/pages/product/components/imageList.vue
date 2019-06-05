<template>
    <div class="imageList">
      <div v-for="(item, index) in imageList">
        <img class="img" v-lazy="item">
      </div>
    </div>
</template>

<script>
    export default {
        name: "imageList",
      props:{
        imageList:Array
      }
    }
</script>

<style scoped lang="stylus">
.imageList
  width: 100%
  height: auto
  /*padding-bottom: 100%*/
  background-color: #fff

  .img
    width: 100%
    background-color: #fff


</style>
