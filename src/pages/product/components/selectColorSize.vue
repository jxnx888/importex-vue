<template>
    <div class="selectColorSize">
      <div
        class="selectColorSize_title col-xs-12"
        @click="ShowSelectOptionClick()"
      >
        Select: Color/Size
        <span class="iconfont">&#xe620;</span>
      </div>
      <div
        class="selectColorSize_option"
        v-show="showSelectOption">
          <div class="option_color">
            <div class=" col-xs-12">Color</div>
            <div class=" col-xs-3">Color</div>
            <div class=" col-xs-3">Color</div>
            <div class=" col-xs-3">Color</div>
            <div class=" col-xs-3">Color</div>
            <div class=" col-xs-3">Color</div>
            <div class=" col-xs-3">Color</div>
            <div class=" col-xs-3">Color</div>
            <div class=" col-xs-3">Color</div>
            <div class=" col-xs-3">Color</div>
            <div class=" col-xs-3">Color</div>
            <div class=" col-xs-3">Color</div>
            <div class=" col-xs-3">Color</div>
            <div class=" col-xs-3">Color</div>
            <div class=" col-xs-3">Color</div>
            <div class=" col-xs-3">Color</div>
            <div class=" col-xs-3">Color</div>

          </div>
        <div class="option_color">
          <div class=" col-xs-12">Size</div>
          <div class=" col-xs-3">Size</div>
          <div class=" col-xs-3">Size</div>
          <div class=" col-xs-3">Size</div>
          <div class=" col-xs-3">Size</div>
          <div class=" col-xs-3">Size</div>
          <div class=" col-xs-3">Size</div>
          <div class=" col-xs-3">Size</div>
          <div class=" col-xs-3">Size</div>
          <div class=" col-xs-3">Size</div>

        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "selectColorSize"
      ,
      data() {
        return {
          showSelectOption: false
        }
      },
      methods: {
        ShowSelectOptionClick(){
          this.showSelectOption = true
        }
      }
    }
</script>

<style scoped lang="stylus">

  .selectColorSize
    background #fff
    height .4rem
    width 100%
    line-height .4rem
    margin .1rem 0 0 0
    .selectColorSize_title
      font-size .15rem
      color #333
    .selectColorSize_title span
      float right
    .selectColorSize_option
      position: fixed
      height 50%
      overflow auto
      bottom 0
      background #fff
      z-index 10

</style>
