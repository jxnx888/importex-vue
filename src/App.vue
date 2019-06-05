<template>
  <div id="app">
    <keep-alive>
     <router-view/>

    </keep-alive>
    <scroll-top></scroll-top>
  </div>
</template>

<script>
  import scrollTop from './common/scrollTop/scrollTop'
export default {
  name: 'App',
  components:{
    scrollTop
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
