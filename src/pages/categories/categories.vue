<template>
  <div class="categoriesWrapper container">
    <div class="row">
      <router-link tag="div" to="/searchDetail" class="searchDetail_searchBox">
        <div class="wrapper">
          <label class="iconfont search_Icon">&#xe615;</label>
          <div
            class="searchDetail_input"
            id="searchDetail"
          >
            Search by keywords or SKU...
          </div>
          <!--        清空文本-->
          <div ref="cancleBtn" class="searchSubmit">
            Search
          </div>

        </div>
      </router-link>
    </div>
    <div class="categories">
      <div class="menu_left">
        <div class=" text-center">
            <div
              v-for="(item, index) in this.menuList"
              class="menu_left_items text-center"
              @click="getCurrentType(item.name,index)"
              :class="{active:index==isActive}"
            >
              <span class="text">{{item.name}}</span>
            </div>
        </div>
      </div>
      <div class="menu_right">
            <div
              v-for="(item, index) in this.menuList"
              v-show="item.name == currentCate"
              class="menue_right_title">
              <div v-for="(childItem, childIndex) in item.child" >
                <div class="childItem_name ">
                  {{childItem.name}}
                </div>
                <div class="menu_right_items ">
                  <router-link tag="div" :to="/searchResult/+ subChildItem.name"
                               v-for="(subChildItem, subChildIndex) in childItem.child"
                               :key="subChildIndex"
                    class="col-xs-12 subChildItemWrapper ">
                    <div class="col-xs-3">
                      <div class="subChildItem">
                        <img v-lazy="subChildItem.imgSrc" class="subChildItem_img">
                      </div>
                    </div>
                    <div class="subChildItem_title col-xs-9">{{subChildItem.name}}</div>
                  </router-link>

                </div>
              </div>
            </div>

      </div>
    </div>
    <menu-nav class="row"></menu-nav>
  </div>
</template>

<script>
  import MenuNav from "../../common/menuNav/menuNav";

  export default {
    name: "categories",
    components: {MenuNav},
    data() {
      return {
        menuList: [],
        currentCate: "Women's Clothing",
        isActive: 0,
      }
    },
    methods: {
      getCategoriesInfo() {
        this.$ajax.get('./static/mock/categories.json') // npm run build ==>  ./static/mock/index.json
          .then(this.getCategoriesInfoSucc)
      },
      getCategoriesInfoSucc(res) {
        const data = res.data.ul_up;
        // console.log(JSON.stringify(data));
        this.menuList = data;
      },
      getCurrentType(type,index) {
        // console.log(type);
        this.currentCate = type;
        this.isActive = index;
      },
    },
    mounted() {
      this.getCategoriesInfo()
    },
    computed: {},
    created() {

    },

  }
</script>

<style scoped lang="stylus">
  .categoriesWrapper
    height 100%
    .searchDetail_searchBox
      /*background-color: #eee*/
      height: .45rem
      line-height: .45rem
      width: 100%
      /*position: fixed*/
      /*top 0*/
      /*left 0*/

      .wrapper
        display: flex
        width: 95%
        height: .45rem
        line-height: .45rem
        margin: 0 auto

      .search_Icon, .searchDetail_input, .searchSubmit
        height .32rem
        line-height .32rem
        margin-top .07rem

      .search_Icon
        display: block
        float: left
        margin-left .1rem
        padding-left .1rem
        -webkit-border-radius .04rem 0 0 .04rem
        -moz-border-radius .04rem 0 0 .04rem
        border-radius .04rem 0 0 .04rem
        background #f2f2f2
        font-size .25rem
        color #999

      .searchDetail_input
        display: block
        width: 100%
        -webkit-border-radius: 0 .04rem .04rem 0
        -moz-border-radius: 0 .04rem .04rem 0
        border-radius: 0 .04rem .04rem 0
        padding-left: .1rem;
        background: #f2f2f2
        font-size .14rem
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis

      .searchSubmit
        float right
        background #fff
        font-size .15rem
        font-weight: 400
        padding 0 .1rem

    .categories
      position: absolute;
      top .45rem
      bottom .56rem
      right 0
      left 0
      .menu_left
        background-color #fff
        float: left
        width 25%
        height 100%
        overflow: auto
        .menu_left_items
          font-size .13rem
          padding .1rem
          display: table
          height .54rem
          line-height .17rem
          border-bottom: 1px solid #e9e9e9;
          border-right: 1px solid #e9e9e9;

          .text
            display: table-cell
            vertical-align middle

      .menu_right
        background-color #fff
        float: left
        width 75%
        height 100%
        overflow: auto

        .menue_right_title

          .childItem_name
            background-color #f5f5f5
            color #333
            font-size .13rem
            line-height .4rem
          .menu_right_items
            .subChildItemWrapper
              height .71rem
              line-height .71rem
              border-bottom: 1px solid #e9e9e9;
              padding 0
              width: 100%;
              overflow: hidden;
              background-color #fff
              .col-xs-3
                padding 0
                .subChildItem
                  position: relative;
                  width: .7rem
                  height: .7rem

                  .subChildItem_img
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: auto;
                    max-width: 100%;
                    max-height: 100%;
              .subChildItem_title
                font-size .14rem
                color #666
    .active
      border-left: 0.03rem solid #01A4EF;
      color: #01A4EF;
      background: #f5f5f5;
      border-bottom: 0;
</style>
