<template>
  <div>
    <div class="wrapper-container">
      <!-- overflow: hidden：清除子元素相对父元素的超界溢出 -->
      <div style="overflow: hidden;" :style="{height : showMore ? 'auto': showHeight + 'px'}">
        <div ref="content">
          <slot>
<!--             当外界 <show-more> 标签中有元素时，使用 <show-more> 标签中的元素进行渲染，否则使用下面这个 div 进行渲染-->
            <router-link
              tag="div"
              v-for="item of content"
              :key="item.id"
              :to="'/Class/'+item.id"
              v-html="' [' + item.category + ']&nbsp;'"
              class="content" >
             </router-link>
<!--            <div v-html="listResult" class="content" ></div>-->
          </slot>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    props: {
      showHeight: {
        type: Number,
        required: true,
        default: 40
      },
      content: {
        type: Array,
        default: null
      },
      listResult: Array
    },
    data () {
      return {
        showMore: false,
        isLongContent: false,
        buttonColor: false
      }
    },
    watch: {
      // 每当内容变化时都重新计算一次高度
      content () {
        this._calculateHeight();
      },

    },
    methods: {
      refresh () {
        this._calculateHeight()
      },
      _calculateHeight () {
        // $nextTick()，等待内容获取完毕再计算高度，异步处理
        this.$nextTick().then(() => {
          let contentHeight = this.$refs.content.clientHeight
          if (contentHeight > this.showHeight) {
            this.isLongContent = true
          } else {
            this.isLongContent = false
          }
        })
      },
      _toggleShowMore () {
        this.showMore = !this.showMore;
        // this.buttonColor = !this.buttonColor
      }
    }
  }

</script>

<style scoped lang="stylus">

  .wrapper-container
    position relative
    z-index 9
    .content
      color #999999
      line-height .4rem
      font-size .12rem
      float: left


</style>
