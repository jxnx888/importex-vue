<template>
    <div class="whoWorkWithUs">
      <div class="title col-xs-12">
        Who work with us
      </div>
      <div class="col-xs-12 swiperWrapper">
        <swiper :options="swiperOption" class="swiperContainer">
          <swiper-slide
            v-for="(item, index) in this.swiperList"
            :key="index"
          >
            <router-link
              :to="item.url">
              <img class="swiper_img"
                   v-lazy="item.imgUrl">
              <p class="partnerName">{{item.name}}</p>

            </router-link>
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
</template>

<script>
    export default {
        name: "whoWorkWithUs",
      data() {
        return {
          swiperOption: {
            spaceBetween: 10,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
          },
          swiperList:[
            {
              "imgUrl":"https://img.import-express.com/importcsvimg/webpic/img/m-index/work-01.png",
              "name":"SHOE STORES",
              "url":"shoestorecase"
            },
            {
              "imgUrl":"https://img.import-express.com/importcsvimg/webpic/img/m-index/work-02.png",
              "name":"Wedding Supplies",
              "url":"wigsdropcase"
            },
            {
              "imgUrl":"https://img.import-express.com/importcsvimg/webpic/img/m-index/work-03.png",
              "name":"PET SHOP",
              "url":"petstorecase"
            },
            {
              "imgUrl":"https://img.import-express.com/importcsvimg/webpic/img/m-index/work-04.png",
              "name":"Jewelry company",
              "url":"jewelrycase"
            },
            {
              "imgUrl":"https://img.import-express.com/importcsvimg/webpic/img/m-index/work-05.png",
              "name":"CAFE BAR",
              "url":"cafebarcase"
            },
            {
              "imgUrl":"https://img.import-express.com/importcsvimg/webpic/img/m-index/work-06.png",
              "name":"Electronic Retailer",
              "url":"electronicstorecase"
            }
            ,
            {
              "imgUrl":"https://img.import-express.com/importcsvimg/webpic/img/m-index/work-07.png",
              "name":"Fashion Boutique",
              "url":"clothtagcase"
            },
            {
              "imgUrl":"https://img.import-express.com/importcsvimg/webpic/img/m-index/work-08.png",
              "name":"DOLLAR SHOP",
              "url":"dollarshopcase"
            },
            {
              "imgUrl":"https://img.import-express.com/importcsvimg/webpic/img/m-index/work-09.png",
              "name":"COSMETICS SHOP",
              "url":"falsenailcase"
            },
            {
              "imgUrl":"https://img.import-express.com/importcsvimg/webpic/img/m-index/work-10.png",
              "name":"STATIONERY STORE",
              "url":"schoolsalecase"
            }
          ]
        }
      }
    }
</script>

<style scoped lang="stylus">
.swiper-button-prev, .swiper-button-next >>> .swiper-button-prev, .swiper-button-next
  height 21px
  top 59%

/*.swiper-button-prev  >>> .swiper-button-prev
  background-image url(https://img.import-express.com/importcsvimg/webpic/img/m-index/arrow-left.png);
.swiper-button-next >>> .swiper-button-next
  background-image url(https://img.import-express.com/importcsvimg/webpic/img/m-index/arrow-right.png);*/
.whoWorkWithUs
  background: #f5f5f5;
  height 1.85rem
  .title
    height: 0.3rem;
    line-height: 0.3rem;
    float: left;
    font-size: 0.14rem;
    font-weight: bold;
    color: rgba(255,136,31,1);
  .swiperWrapper
    height 1.42rem
    width 100%
    .swiperContainer
      width 100%
      .swiper-slide
        width 1.0833rem !important
        position: relative;
      .swiper_img
        width 100%
        height: 1.42rem
      .partnerName
        position absolute
        bottom 0
        left 0
        width: 100%;
        height: .3rem;
        background: rgba(0,0,0,.6);
        color: #fff;
        text-align: center;
        font-size: .13rem;
        line-height: .3rem;
        text-transform: uppercase;
</style>
