<template>
  <div class="searchFilter">
    <div class="searchFilterContainer">
      <div class="searchFilter_top">
        <span class="iconfont" @click="handleFilterClose">&#xe621;</span>
        <p class="text-center">Filter</p>
      </div>
      <div class="searchFilterTopFilter">
        <div class="row">
          <div class="col-xs-5 searchFilterLeft">
            Price(USD)
          </div>
          <div class="col-xs-7 text-right">
            <input class="searchFilterPriceInput text-center" placeholder="Min" type="text">
            <span>-</span>
            <input class="searchFilterPriceInput text-center" placeholder="Max" type="text">
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 searchFilterLeft">
            Free Shipping
          </div>
          <div class="col-xs-6  searchFilterSwitch text-right">
            <input class="mui-switch mui-switch-animbg" type="checkbox" checked>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 searchFilterLeft">
            New Arrival
          </div>
          <div class="col-xs-6  searchFilterSwitch text-right">
            <input class="mui-switch mui-switch-animbg" type="checkbox">
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 searchFilterLeft">
            Grading
          </div>
          <div class="col-xs-6  searchFilterSwitch text-right">
            <input class="mui-switch mui-switch-animbg" type="checkbox">
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 searchFilterLeft">
            Video
          </div>
          <div class="col-xs-6  searchFilterSwitch text-right">
            <input class="mui-switch mui-switch-animbg" type="checkbox">
          </div>
        </div>
      </div>
      <div class="searchFilterBottomFilter">
        <div class="row">
          <div class="col-xs-4 searchFilterLeft">
            Sort By
          </div>
          <div class="col-xs-8  searchFilterSelect text-right">
          <!-- 默认选择再create方法中-->
            <select name="sortBy" v-model="sortSelected" @change="getsortSelected">
              <option :value="sort.id" v-for="sort in sortList">{{sort.name}}</option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-4 searchFilterLeft">
            Category
          </div>
          <div class="col-xs-8  searchFilterSelect text-right" @click="catagoryShowClick()">
            <div class="">test</div>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-4 searchFilterLeft">
            Pattern
          </div>
          <div class="col-xs-8  searchFilterSelect text-right">
            <!-- 默认选择再create方法中-->
            <select name="sortBy" v-model="sortSelected" @change="getsortSelected">
              <option :value="sort.id" v-for="sort in sortList">{{sort.name}}</option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-4 searchFilterLeft">
            Combination
          </div>
          <div class="col-xs-8  searchFilterSelect text-right">
            <!-- 默认选择再create方法中-->
            <select name="sortBy" v-model="sortSelected" @change="getsortSelected">
              <option value="sort.id" v-for="sort in sortList">{{sort.name}}</option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-4 searchFilterLeft">
            Size
          </div>
          <div class="col-xs-8  searchFilterSelect text-right">
            <!-- 默认选择再create方法中-->
            <select name="sortBy" v-model="sortSelected" @change="getsortSelected">
              <option value="sort.id" v-for="sort in sortList">{{sort.name}}</option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-4 searchFilterLeft">
            Color
          </div>
          <div class="col-xs-8  searchFilterSelect text-right">
            <!-- 默认选择再create方法中-->
            <select name="sortBy" v-model="sortSelected" @change="getsortSelected">
              <option value="sort.id" v-for="sort in sortList">{{sort.name}}</option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-4 searchFilterLeft">
            Top Fly
          </div>
          <div class="col-xs-8  searchFilterSelect text-right">
            <!-- 默认选择再create方法中-->
            <select name="sortBy" v-model="sortSelected" @change="getsortSelected">
              <option value="sort.id" v-for="sort in sortList">{{sort.name}}</option>
            </select>
          </div>
        </div>

        <div class="">
          <div class="searchResult_Filter text-center" >
            More Details
            <span class="iconfont">&#xe6b5;</span>
          </div>

        </div>
        <div class="row">
          <div class="col-xs-6 searchResult_Filter_Button">
            <div class="text-center" >Reset</div>
          </div>
          <div class="col-xs-6 searchResult_Filter_Button">
            <div class="text-center" >Update</div>
          </div>
        </div>
      </div>

      <div class="searchFilterSlide searchFilterCatagorySlide" v-if="catagoryShow" >
        <div class="searchFilterCatagorySlide_top" >
          <span class="iconfont" @click="catagoryHideClick()">&#xe79b;</span>
          <p class="text-center">Category</p>
        </div>
        <div class="searchFilterCatagorySlide_bottom"
             v-for="(category, index ) in rootTreeCategory"
             >
          <div
            class="categoryFather"
            :class="{'selected': selectIndexTab = index}"
            @click="showChildClick(index)"
          >
          {{category.category}}
          </div>
          <div
            class="categoryChild"
            v-for="(childItem, childIndex) in category.childens"
            v-show="showChild"
            @click="clickChildbar(childItem, childIndex)"
            :class="{'selected': selectIndex = childIndex}">
            {{childItem.category}}
          </div>
        </div>
      </div>

<!--      <div class="searchFilterSlide searchFilterPatternSlide">-->

<!--      </div>-->

<!--      <div class="searchFilterSlide searchFilterCombinationSlide">-->

<!--      </div>-->

<!--      <div class="searchFilterSlide searchFilterSizeSlide">-->

<!--      </div>-->

<!--      <div class="searchFilterSlide searchFilterColorSlide">-->

<!--      </div>-->

<!--      <div class="searchFilterSlide searchFilterTopFlySlide">-->

<!--      </div>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "searchFilter",
    props: {
      rootTreeCategory: Array,
    },
    data() {
      return {
        catagoryShow:false,
        showChild:false,
        selectIndexTab: 0,
        currentSelectIndex: 0,
        sortList: [
          {
            id: '0',
            name: 'Best Match'
          },
          {
            id: '1',
            name: 'Price Low To High'
          },
          {
            id: '2',
            name: 'Best Selling'
          }
        ],
        sortSelected: '',
      }
    },
    created() {
      //如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
      this.sortSelected = this.sortList[2].id;

    },
    methods: {
      getsortSelected() {
        //获取选中的sort
        console.log(this.sortSelected)
      },
      handleFilterClose() {
        this.$emit('close')
      },
      catagoryShowClick(){
        this.catagoryShow = true
      },
      catagoryHideClick(){
        this.catagoryShow = false;
        this.showChild=false;
        this.selectIndexTab= 0;
        this.currentSelectIndex= 0
      },
      showChildClick(index){
        this.showChild = !this.showChild
      },

      // 筛选方法
      clickChildbar(v, i) {
        v.category[i].selectIndex = i;
        // debugger
        // if (!this.range[I]) {
        //   this.range[I] = {name: v.name, value: {}};
        //   this.range[I].value[i] = v.detailList[i].value;
        // } else {
        //   if (!this.range[I].value[i]) {
        //     this.range[I].value[i] = v.detailList[i].value;
        //   } else {
        //     delete this.range[I].value[i];
        //     v.detailList[i].selectIndex = -1;
        //   }
        // }
      },

    },
    mounted() {
    }
  }
</script>

<style scoped lang="stylus">
  .searchFilter
    position: fixed;
    top: 0
    left: 0
    height: 100%
    width: 100%
    background rgba(0, 0, 0, .6)
    z-index 999

    .searchFilterContainer
      position: fixed
      flex-direction: column
      top 0
      right: 0
      width 80%
      background #fff

      .searchFilter_top
        height .3rem
        line-height .3rem

      .searchFilter_top span
        position: absolute;

      .searchFilter_top p
        font-size .15rem
        font-weight 400
        color #333333

      .searchFilterTopFilter
        height 1.8rem
        border-top 1px solid #ECECEC
        border-bottom 1px solid #ECECEC

        .row
          margin-right 0
          margin-left 0
          height .35rem
          line-height .35rem

          .searchFilterLeft
            font-size .13rem
            font-weight 400
            color #666666

          .col-xs-7
            .searchFilterPriceInput
              width .5rem
              font-size .13rem
              font-weight 400
              color #999999
              border-bottom: 1px solid #999999

          .searchFilterSwitch
            .mui-switch
              width .5rem
              height .2rem

            .mui-switch:before
              width .19rem
              height .19rem
              top -1px

            .mui-switch.mui-switch-animbg:checked
              background-color: #000

            .mui-switch:checked
              border-color: #000

            .mui-switch:checked:before
              left .3rem
              top -1px

      .searchFilterBottomFilter
        .row
          margin-right 0
          margin-left 0
          height .35rem
          line-height .35rem
          .searchResult_Filter_Button
            height .4rem
            line-height .4rem
            fong-size .15rem
            font-weight: 400
            border-top 1px solid #D1D1D1
          .searchResult_Filter_Button:nth-of-type(1)
            color #333
          .searchResult_Filter_Button:nth-of-type(2)
            color #fff
            background #000
          .searchFilterLeft
            font-size .13rem
            font-weight 400
            color #666666
          .searchFilterSelect select
            font-size .13rem
            color #666666
            direction rtl //右对齐
            background #fff
            //清楚选择箭头
            appearance:none;
            -moz-appearance:none;
            -webkit-appearance:none;
          .searchFilterSelect select option
            border 1px solid #fff

      .searchFilterSlide
        position: fixed
        flex-direction: column
        top 0
        right: 0
        width 80%
        background #fff
        height 500px
        overflow: auto
      .searchFilterCatagorySlide
        .searchFilterCatagorySlide_top span
          position: absolute;
          left .15rem
          font-size .2rem
          color #999
        .searchFilterCatagorySlide p
          color #333
        .searchFilterCatagorySlide_bottom
          color #333
          font-weight 400

          .categoryFather
            color red
          .categoryChild
            color blue
</style>
