<template>
  <!-- The scroll to top feature -->
<div id="scrollTop">
  <div class="scroll-top-wrapper" v-if="goTopShow" @click="goTop">
<!--    <span class="scroll-top-inner">-->
      <i class="iconfont" style="font-size:22px;color:#666">&#xe64d;</i>
<!--    </span>-->
  </div>
</div>
</template>
<script>

  export default {
    name: "scrollTop",
    data() {
      return {
        scrollTop:"",
        goTopShow: false,
        }
        },
    watch: {
      scrollTop(val) {
        if (this.scrollTop > 200) {
          this.goTopShow = true;
        } else {
          this.goTopShow = false;
        }
      }
      },
    methods: {
      handleScroll() {
        this.scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        if (this.scrollTop > 200) {
          this.goTopShow = true;
        }
      },
      goTop() {
        let timer = null,
          _that = this;
        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(function fn() {
          if (_that.scrollTop > 0) {
            _that.scrollTop -= 50;
            document.body.scrollTop = document.documentElement.scrollTop =
              _that.scrollTop;
            timer = requestAnimationFrame(fn);
          } else {
            cancelAnimationFrame(timer);
            _that.goTopShow = false;
          }
        });

      },


      },
    mounted() {
      // 给window添加一个滚动滚动监听事件，
      window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    }

  }
</script>

<style scoped >
  .scroll-top-wrapper {
    position: fixed;
    overflow: hidden;
    text-align: center;
    z-index: 99999999;
    background-color: #fff;
    width: .35rem;
    height: .35rem;
    line-height: .35rem;
    right: 10px;
    bottom: 15px;
    padding-top: 2px;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 25px;
    border: 1px solid #666;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    opacity: .7;
  }

  .scroll-top-wrapper:hover {
    background-color: #fff;
  }

  .scroll-top-wrapper.show {
    visibility: visible;
    cursor: pointer;
    opacity: 1.0;
  }

  .scroll-top-wrapper i.fa {
    line-height: inherit;
  }

</style>
