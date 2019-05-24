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
              v-for="item of listResult"
              :key="item.id"
              v-html="item.category"
              class="content" >

            </router-link>
            <div v-html="listResult" class="content" ></div>
          </slot>
        </div>
      </div>

<!--      <div class="control" v-show="isLongContent" :class="{'show-more' : showMore}">-->
<!--        <button class="showMore" type="text" @click="_toggleShowMore" v-bind:class="{bgColor:buttonColor}">{{ showMore ? '收起' : '显示更多'}}</button>-->
<!--      </div>-->
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
        type: String,
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

<style scoped>

  .wrapper-container {
    position: relative;
    /*padding-bottom: 40px;*/
  }
  .control {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-top: 100px;
    text-align: center;
    /*background-image: linear-gradient( rgba(155, 155, 155, 0) 0%, #f7f7f7 100%);*/
    text-indent: 0rem;
  }
  .showMore {
    background-color: #f7f7f7;
    color:#9b9b9b;
    margin: 0 auto;
  }
  .bgColor {
    background-color:#eee;
    display: none;
  }
  .show-more {
     padding-top: 0;
     background: none;
   }
  .content {
    color:#9b9b9b;
    line-height:.4rem;
    font-size: .13rem;
  }


</style>
