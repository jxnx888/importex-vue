<template>
  <div class="home">
    <home-top></home-top>
    <home-top-swiper :list="homeTopSwiperList"></home-top-swiper>
    <notification-swiper></notification-swiper>
    <menu1></menu1>
    <who-work-with-us></who-work-with-us>
    <menu2></menu2>
    <div style="clear:both"></div>
    <featured-product></featured-product>
    <footerBar></footerBar>
    <home-menu></home-menu>
  </div>
</template>

<script>
  import homeTop from './components/top'
  import homeTopSwiper from './components/scrollBar'
  import homeMenu from '@/common/menuNav/menuNav'
  import NotificationSwiper from "./components/notificationSwiper";
  import menu1 from "./components/menu1";
  import WhoWorkWithUs from "./components/whoWorkWithUs";
  import Menu2 from "./components/menu2";
  import FeaturedProduct from "./components/featuredProduct";
  import footerBar from "@/common/footer/footerBar"

  export default {
    name: "home",
    components: {
      FeaturedProduct,
      Menu2,
      WhoWorkWithUs,
      menu1,
      NotificationSwiper,
      homeTop,
      homeTopSwiper,
      homeMenu,
      footerBar

    },
    data() {
      return {
        homeTopSwiperList: [],
      }
    },
    methods: {

      getHomeInfo() {
        this.$ajax.get('./static/mock/index.json') // npm run build ==>  ./static/mock/index.json
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

</style>
