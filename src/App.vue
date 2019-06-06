<template>
  <div id="app">
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view :key="key"></router-view>
    </keep-alive>
    <router-view v-else :key="key"></router-view>
    <scroll-top></scroll-top>
  </div>
</template>

<script>
  import scrollTop from './common/scrollTop/scrollTop'
export default {
  name: 'App',
  components:{
    scrollTop
  },
  computed: {
    key() {
      // 或者 :key="$route.fullPath" 只要保证key唯一就可以了
      return this.$route.name !== undefined? this.$route.name + +new Date(): this.$route + +new Date()
    }
  }
}
</script>

<style>
  img[lazy=loading] {
    display: block;
    width:.3rem;
    height: .3rem!important;
    margin:0 auto;
    padding-top: 13%;
  }

</style>
