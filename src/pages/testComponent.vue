<template>
   <div>
    <div class="wrapper" v-for="(item,index) in rootTreeCategory">
  <div class="sheet-list">
     
    <div class="sheet-header" @click="toggleSheet">
        <i class="icon iconfont icon-enter" ref="toggleicon"></i>
        <span class="sheet-header-span">{{item.category}}
      <!--  <span> ({{data_item.num}}) </span>-->
          </span>
        <i class="sheet-header-i icon iconfont icon-setup" @click.stop="showSheetMenu(item.category)"></i>
       
    </div>

     
    <div v-if="showSheets" class="sheet-content" v-for="i in item.childens">
       
      <div class="sheet-content-image">
        <!--        <img :src="i.details_image" width="50" height="50" style="padding: 5px;overflow: hidden">-->
         
      </div>
       
      <div class="sheet-content-middle">
              <p style="">{{i.category}}</p>
        <!--        <p style="margin-top: 10px;font-size: 14px;color: #666">{{i.details_num}}首歌曲</p>-->
         
      </div>
        <i class="icon iconfont icon-switch" @click.stop="showSheetMenu()"></i>
       
    </div>
     </div>
  </div></div>
</template>


<script>
  export default {
    components: {},
    props: {
      item: {
        type: Object
      }
    },
    data() {
      return {
        showSheets: false,
        rootTreeCategory:[],
      }
    },
    methods: {

//向右的小图标动画
      toggleSheet: function (index) {
        console.log(this.$refs);
        this.$refs.toggleicon.style.transform = !this.showSheets ? 'rotate(90deg)' : 'rotate(0)'
        this.showSheets = !this.showSheets
      },
      showSheetMenu: function () {
        alert(1111);
      },
      getSearchList(res) {
        var url = 'http://192.168.1.127:8085/mobileSearch';
        this.$ajax.post(url,
          this.$qs.stringify({keyword: 'dress'})
        )
          .then(this.getSearchListSucc)
          .catch(function (res) {
            // console.log("error")
          })
      },
      getSearchListSucc(res) {
        const data = res.data;
        let _this = this;
        this.productList = data.goodslist;
        this.rootTreeCategory = data.rootTree;
        // console.log("test: " + JSON.stringify(this.rootTreeCategory));
        // console.log("test: " + typeof this.productList);


      },
    },
    created() {
      // this.data_item = this.item;
      // console.log( 'test: '+JSON.stringify(this.data_item ))
    },
    mounted() {
      this.getSearchList();
    }
  }
</script>


<style scoped>
  .sheet-list {
    clear: both;
  }

  .sheet-header {
    height: 30px;
    background: #e5e5e5;
    position: relative;
  }

  .sheet-header i:nth-child(1) {
    line-height: 30px;
    position: absolute;
    left: 10px;
    color: #666;
    transition: all 0.5s;
  }

  .sheet-header-i {
    line-height: 30px;
    position: absolute;
    right: 10px;
  }

  .sheet-header-span {
    left: 40px;
    font-size: 14px;
    position: absolute;
    line-height: 30px;
  }

  .sheet-content {
    position: relative;
    width: 100%;
    display: flex;
  }

  .sheet-content i {
    font-size: 26px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(0, -50%);
  }

  .sheet-content-image {
    width: 60px;
    float: left;
    text-align: center;
  }

  .sheet-content-middle {
    position: relative;
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 10px;
    margin-top: 10px;
    margin-left: 10px;
  }

  .sheet-content-middle p {
    font-size: 16px;
    width: 70%;
    color: #666;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
</style>
