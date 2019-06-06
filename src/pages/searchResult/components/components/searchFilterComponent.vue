<template>
  <div class="sheet-list">
     
    <div class="sheet-header col-xs-12" @click="toggleSheet">
      <div class="col-xs-1">
        <div class="iconCircleOutline">
          <i class="iconCircle iconfont icon-enter" ></i>
         </div>
     </div>
      <div class="col-xs-10">
        <span class="sheet-header-title">{{singleItem.category}}</span>
       <i class="sheet-header-i icon iconfont icon-setup" @click.stop="showSheetMenu(singleItem.category)"></i>
      </div>
      <div class="col-xs-1">
        <span class="iconfont" > {{showSheets?'&#xe635; ':'&#xe63c;'}}</span>
      </div>
      </div>
     
    <div
      v-if="showSheets"
      class="sheet-content col-xs-12"
      v-for="childenItem in singleItem.childens">
        <div class="col-xs-1">
          <div class="iconCircleOutline">
            <i class="iconCircle iconfont icon-enter" ></i>
          </div>
        </div>
        <div class="col-xs-11" @click.stop="showSheetMenu()">
          {{childenItem.category}}
        </div> 
      </div>
       
     
  </div>
</template>

<script>
  export default {
    name: "searchFilterComponent",
    props: {
      singleItem:{
        type:Object
      }
    },
    data(){
      return{
        showSheets:false,
        data_item:{}
      }
    },
    methods:{

//向右的小图标动画
      toggleSheet:function(index){
        this.showSheets = !this.showSheets
      },
      showSheetMenu:function(){
        alert(1111);
      }
    },
    created(){
    },
  }
</script>

<style scoped lang="stylus">
.sheet-list
  clear both
  .sheet-header
    position: relative;
    height .4rem
    line-height .4rem
    font-size .12rem
    border 1px solid #eee
    .col-xs-1, .col-xs-10
      height .4rem
      padding 0
      .iconCircleOutline
        position: absolute;
        left: 3%
        top: 25%
        width: .2rem;
        height: .2rem;
        border: 1px solid #f5a72c;
        border-radius: 50%;
        line-height: .4rem
        .iconCircle
          display: none;
          position: absolute;
          right: 0;
          top: 0;
          left: 0;
          bottom: 0;
          margin: auto;
          width: .12rem;
          background: #f5a72c;
          height: .12rem;
          line-height: .4rem
          border-radius: 50%;
      .sheet-header-title
        padding-left .15rem
        position:absolute

  .sheet-content
    height .4rem
    line-height .4rem
    font-size .12rem
    border 1px solid #e6e6e6
    background-color #f6f6f6
    .col-xs-1,.col-xs-11
      height .4rem
      padding 0
    .col-xs-11
      padding-left .15rem
      white-space:nowrap
      overflow:hidden
      text-overflow:ellipsis
    .col-xs-1
      .iconCircleOutline
        position: absolute;
        left: 3%
        top: 25%
        width: .2rem;
        height: .2rem;
        border: 1px solid #f5a72c;
        border-radius: 50%;
        line-height: .4rem
        .iconCircle
          display: none;
          position: absolute;
          right: 0;
          top: 0;
          left: 0;
          bottom: 0;
          margin: auto;
          width: .12rem;
          background: #f5a72c;
          height: .12rem;
          line-height: .4rem
          border-radius: 50%;

</style>
