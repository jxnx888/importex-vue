<template>
  <div class="home">
    <home-top></home-top>
    <home-top-swiper :list="homeTopSwiperList"></home-top-swiper>
    <home-menu></home-menu>
  </div>
</template>

<script>
  import homeTop from './components/top'
  import homeTopSwiper from './components/scrollBar'
  // import axios from 'axios'
  import homeMenu from '@/common/menuNav/menuNav'

  export default {
    name: "home",
    components: {
      homeTop,
      homeTopSwiper,
      homeMenu

    },
    data() {
      return {
        homeTopSwiperList: [],
      }
    },
    methods: {

      getHomeInfo() {
        this.$ajax.get('/static/mock/index.json') // npm run build ==>  /static/mock/index.json
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.homeTopSwiperList = data.homeTopSwiperList;
        }
      }
    },
    mounted() {
      this.getHomeInfo()
    }

  }
</script>

<style scoped lang="stylus">
  .home
    height: 3000px
</style>
