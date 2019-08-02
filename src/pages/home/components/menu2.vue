<template>
  <div class="menu2">

    <div v-for="(item, index) in this.List">
      <router-link
        :to="item.url"
      >
        <div class="col-xs-6 wrapper">
          <div class="col-xs-12 title">
            {{item.name}}
          </div>
          <div class="col-xs-6 image">
            <img class="img1" :src="item.imgUrl1" alt="">
          </div>
          <div class="col-xs-6 image">
            <img class="img2" :src="item.imgUrl2" alt="">
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "menu2",
    data() {
      return {
        List: [
          {
            "imgUrl1": "https://img.import-express.com/importcsvimg/webpic/img/m-index-new/vickyindex/supply_1.jpg",
            "imgUrl2": "https://img.import-express.com/importcsvimg/webpic/img/m-index-new/vickyindex/supply_2.jpg",
            "name": "Fashion Boutique",
            "url": "fashion"
          },
          {
            "imgUrl1": "https://img.import-express.com/importcsvimg/webpic/img/m-index-new/vickyindex/supply_3.jpg",
            "imgUrl2": "https://img.import-express.com/importcsvimg/webpic/img/m-index-new/vickyindex/supply_4.jpg",
            "name": "Wedding Supplies",
            "url": "WeddingSupplies"
          }, {
            "imgUrl1": "https://www.import-express.com/img/m-index-A/cloth-07.png",
            "imgUrl2": "https://img.import-express.com/importcsvimg/webpic/img/m-index-new/vickyindex/supply_6.jpg",
            "name": "Bags",
            "url": "Bags"
          }, {
            "imgUrl1": "https://img.import-express.com/importcsvimg/webpic/img/m-index-new/vickyindex/supply_7.jpg",
            "imgUrl2": "https://img.import-express.com/importcsvimg/webpic/img/m-index-new/vickyindex/supply_8.jpg",
            "name": "Cosmetics & Beauty",
            "url": "Cosmetics & Beauty"
          }, {
            "imgUrl1": "https://img.import-express.com/importcsvimg/webpic/img/m-index-new/vickyindex/supply_9.jpg",
            "imgUrl2": "https://img.import-express.com/importcsvimg/webpic/img/m-index-new/vickyindex/supply_10.jpg",
            "name": "Jewelty Sets & More",
            "url": "Jewelty Sets & More"
          }, {
            "imgUrl1": "https://img.import-express.com/importcsvimg/webpic/img/m-index-new/vickyindex/supply_11.jpg",
            "imgUrl2": "https://img.import-express.com/importcsvimg/webpic/img/m-index-new/vickyindex/supply_12.jpg",
            "name": "Pet Supplies",
            "url": "Pet Supplies"
          },
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">
  .menu2
    .wrapper
      border: 1px solid #D0D0D0;
      padding: .1rem .15rem;
      .col-xs-12, .col-xs-6
        padding 0
      .title
        font-weight bold
        font-size .13rem
        color #333
        height .3rem
        line-height .3rem

      .image
        position: relative;
        height .73rem

      .image img
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        max-width: 100%;
        max-height: 100%;

</style>
