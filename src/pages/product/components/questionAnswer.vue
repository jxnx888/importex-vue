<template>
  <div class="questionAnswer">
      <div class="col-xs-12 text-left questionAnswer_title">Customer Questions & Answers</div>
      <div class="col-xs-12 questionAnswer_input"
      >
        <textarea placeholder="Have a question? Ask the seller here." rows="4"></textarea>

      </div>

      <div class="wrapper-container col-xs-12 questionAnswer_content">
        <div v-for="(item, index) in showList"
             class="content "
        >
          <div class="row">
            <div class="col-xs-2 ">
              <div class="questionIcon text-center">Q</div>
            </div>
            <div class="col-xs-10 question">
              {{item.question}}
            </div>
          </div>
          <div class="row">
            <div class="col-xs-2">
              <div class="answerIcon text-center">A</div>
            </div>
            <div class="col-xs-10 answer">
              {{item.answer}}
            </div>
          </div>
        </div>
        <div @click="showAll = !showAll" class="show-more text-center">
          {{showAll?'Close ':'View All '}}
          <span class="iconfont">{{showAll?'&#xe65b;':'&#xe639;'}}</span>
        </div>

      </div>
  </div>
</template>

<script>
  export default {
    name: "questionAnswer",
    props: {
      questionAnswer: Array,

    },
    data() {
      return {
        showAll: false,  //标记数据是否需要完全显示的属性
      }
    },
    methods: {},
    computed: {
      showList: function () {

        if (this.showAll === false) {                    //当数据不需要完全显示的时候
          var showList = [];
          if (this.questionAnswer.length > 1) {　　　　　　　//这里我们先显示前三个
            for (var i = 0; i < 1; i++) {
              showList.push(this.questionAnswer[i])
            }
          } else {
            showList = this.questionAnswer
          }
          return showList;　　　　　　　　　　　　　　　　 //返回当前数组
        } else {
          return this.questionAnswer;
        }
      },

    },
    watch: {}
  }
</script>

<style scoped lang="stylus">
  .questionAnswer
    margin-top .1rem
    background-color #fff
    .questionAnswer_title
      height .34rem
      line-height .34rem
      font-size .15rem
      color #333
      background-color #fff
    .questionAnswer_input
      background-color #fff
    .questionAnswer_input textarea
      width 100%
      border 1px solid #D1D1D1
      padding .1rem
      font-size .12rem
      line-height .15rem

    .questionAnswer_content
      position: relative;
      background-color #fff
      .content
        border-bottom 1px solid #eee
       .row
          margin .08rem 0
        .question, .answer
          font-size .14rem
          line-height .15rem
          text-transform capitalize

        .question
          color #333

        .answer
          color #666

        .questionIcon, .answerIcon
          width: 0.3rem;
          height: 0.3rem;
          line-height: 0.3rem;
          font-size: .15rem;
          color: #fff;
          border-radius: .15rem;

        .questionIcon
          background-color: #000;

        .answerIcon
          background-color: #57AD3C;

      .show-more
        height .4rem
        line-height .4rem
        font-size .15rem
        font-weight bold


</style>
