<template>
<div class="chooseItemType" >
  <div class="cover" @click="handleItemTypeClick()"></div>
  <div class="container">
    <div class="top_title ">
      <div class="col-xs-12">
        <div class="col-xs-4 text-center">
          <img src=""  class="top_title_img">
        </div>
        <div class="col-xs-8 text-left">
          US $ 1.88/piece
        </div>
        <span class="closeIcon iconfont" @click="handleItemTypeClick()">&#xe62e;</span>
      </div>

    </div>

    <div class="selectType">
      <div class="col-xs-12">
        <div v-for="(value, key, index) in goodType" >
          <p class="text-left typeTitle">{{key}}:</p>
          <div v-for="(childItem, childIndex) in value" >
            <div
                 class="typeInfo"

                 >
              <div
                class="typeInfo_value"
                v-if="childItem.img == ''"
                v-bind:class="{active:childIndex==isActive}"
                @click="chooseTheType(childIndex, childItem.id, childItem.type, childItem.value)">
                {{childItem.value }}</div>
              <div class="typeInfo_img"
                   v-else
                   v-bind:class="{active:childIndex==isActive2}"
                   @click="chooseTheType2(childIndex, childItem.id, childItem.type, childItem.value)">
                <img :src="childItem.img" alt=""></div>

            </div>
<!--            <div v-if="childItem.img !== ''" class="typeInfo_img"-->
<!--                 v-bind:class="{active:childIndex==isActive2}"-->
<!--                 @click="chooseTheType2(childIndex, childItem.id, childItem.type, childItem.value)"-->
<!--            ><img :src="childItem.img" alt=""></div>-->

          </div>

        </div>
      </div>
    </div>

    <div class="row quantity_addCart ">
      <div class="quantity text-center ">
        <div class="col-xs-8 quantity_title">Quantity (Minimum Order: 1)</div>
        <el-input-number
          class="inputNumber iconfont text-right"
          v-model="num"
          @change="numberChange"
          size="mini"
          :min="0">
        </el-input-number>
      </div>
      <div class="addCart text-center " @click="addToCart()">
        ADD TO CART
      </div>
    </div>
  </div>

</div>
</template>

<script>

  export default {
        name: "chooseItemType",
      props:{
        goodColorSize: Array,
        productID:String,
        skuProducts:Array,
        goodType:Object,
      },
      data(){
          return{
            num:1,
            itemNum:1,
            itemPrice:0,
            isActive:-1,
            isActive2:-1,
            activeType:[],
            currentProductID:'',
            typePriceList:'',
            view_url:'',
            itemID:'',
            itemType:'',
            itemValue:'',
            itemID2:'',
            itemType2:'',
            itemValue2:'',
            addToCartInfo:'',
            chooseTypeOne:false,
            chooseTypeTwo:false,
          }
      },
      methods:{
        handleItemTypeClick() {
          this.$emit('hideItmeType');
        },
        // add_goods(goods){
        //   this.$emit('addToCart(goods)');
        // },
        /**
         * @method 添加到购物车
         * @param {Object} goods 商品
         */
        addToCart(goods) {
          this.getGoodType();
          var currentURL = window.location.href;
          let url = 'http://192.168.1.163:8085/addshopcart/add';
          this.$ajax.post(url,
            //pid 为传值的key
            this.$qs.stringify({itemId:this.productID, typePriceList:this.addToCartInfo,view_url:currentURL })
          )
            .then(this.addToCartSucc)
            .catch(function (res) {
              console.log("Error, No Data!")
            })
          },
        addToCartSucc(res) {
          // alert(JSON.stringify(res))
          console.log(JSON.stringify(res));

        },
        getGoodType(){
          // itemPrice 暂时默认为0
          if(this.chooseTypeOne == true && this.chooseTypeTwo == true){
            var str = this.itemID+"|"+this.itemID2+"@"+this.itemPrice+"@"+this.itemNum+"@"+ this.itemType+ ":" +this.itemValue+"|"+this.itemID+"&&"+this.itemType2+ ":"+this.itemValue2+"|"+this.itemID2;
          this.addToCartInfo = str;
          console.log(this.addToCartInfo);
          console.log("productID:"+this.productID);
            this.handleItemTypeClick();
          }
          else if(this.chooseTypeOne == true && this.chooseTypeTwo == false){
            var str = 0+"|"+this.itemID+"@"+this.itemPrice+"@"+this.itemNum+"@"+ this.itemType+ ":" +this.itemValue+"|"+this.itemID;
            this.addToCartInfo = str;
            console.log(this.addToCartInfo);
          }
          else if(this.chooseTypeOne == false && this.chooseTypeTwo == true){
            var str = 0+"|"+this.itemID2+"@"+this.itemPrice+"@"+this.itemNum+"@"+ this.itemType2+ ":"+this.itemValue2+"|"+this.itemID2;
            this.addToCartInfo = str;
            console.log(this.addToCartInfo);
          }
          else{
            console.log("pick type");

          }
        },
        chooseTheType(index,id, type, value){
          this.isActive=index;
          this.activeType.push(index);
          this.itemID = id;
          this.itemType = type;
          this.itemValue = value;
          this.chooseTypeOne = true;
          // this.chooseTypeTwo = true;
          console.log(this.itemID,this.itemType,this.itemValue)
        },
        chooseTheType2(index,id, type, value){
          this.isActive2=index;
          this.activeType.push(index);
          this.itemID2 = id;
          this.itemType2 = type;
          this.itemValue2 = value;
          this.chooseTypeTwo = true;

          console.log(this.itemID2,this.itemType2,this.itemValue2)
        },
        numberChange(value) {
          this.itemNum = value;
          console.log("choosing item piece:" +this.itemNum);
        },

      },
    watch: {
      goodType:function(newVal,oldVal){
        // console.log(newVal)
        // this.productID = newVal;
        // console.log(JSON.stringify(this.goodsInfo));
        // this.getCustomerReview();
      }
    },
  }
</script>

<style scoped lang="stylus">
.chooseItemType
  z-index: 9
  .cover
    position: fixed;
    top: 0
    left: 0
    height: 100%
    width: 100%
    background rgba(0, 0, 0, .5)
    z-index 12
  .container
    position: fixed
    bottom 0
    right: 0
    left 0
    top 20%
    background #fff
    z-index 99
    .top_title
      height .8rem
      line-height .8rem
      border-bottom 1px solid #e2e2e2
      .top_title_img
        width 1rem
        height 1rem
        position: absolute
        left 0
        top -0.3rem
        background #eee
      .closeIcon
        position: absolute
        margin-top -.2rem
        font-size .2rem
        color #666
    .selectType
      position: absolute;
      bottom: 1.1rem;
      top: .8rem
      left: 0;
      right: 0;
      overflow: auto;
      z-index 99
      .typeTitle
        padding .1rem 0
        line-height .25rem
        clear both
      .typeInfo
        float left
        padding 0 .05rem
        .typeInfo_value
          min-width .3rem
          line-height .25rem
          border 1px solid #000
          padding 0 .1rem
          margin 0 .05rem .1rem 0
        .typeInfo_img
          position: relative;
          width .44rem
          height .44rem
          border 1px solid #000
          margin 0 .05rem .1rem 0
        .typeInfo_img img
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          max-width: 100%;
          max-height: 100%;
    .quantity_addCart
      position: fixed;
      bottom 0
      line-height .5rem
      width 100%
      z-index 100
      .addCart
        height .5rem
        color #fff
        font-weight 700
        font-size .17rem
        background-color #ffbc47
      .quantity
        font-size .15rem
        color #999
        height .5rem
        box-shadow 0 1px 3px rgba(0,0,0,.85)
        @media screen and (max-width: 320px)
          font-size .13rem
        .quantity_title
          /*float: left*/
        .inputNumber
          width 1rem

  .active {
    border 1px solid red!important;
  }
  //element ui 样式需要穿透修改

  .inputNumber >>> .el-input-number__decrease {
    background: #fff
    border-right none
    border-radius .16rem 0 0 .16rem
    /*margin: .17rem 0;*/
    width .23rem
    line-height .2rem
  }

  .inputNumber >>> .el-input-number__increase {
    background: #fff
    border-left none
    border-radius 0 .16rem .16rem 0
    /*margin: .17rem 0*/
    width .23rem
    line-height .2rem
  }

  .inputNumber >>> .el-icon-minus:before {
    content '\e6b6'
    color #A2A2A2
    font-size .2rem
    line-height .26rem
  }

  .inputNumber >>> .el-icon-plus:before {
    content '\e6b7'
    color #F5A72C
    font-size .2rem
    line-height .26rem
  }

  .iconfont >>> [class*=" el-icon-"] {
    font-family "iconfont" !important
  }

  .iconfont >>> [class^=el-icon-] {
    font-family "iconfont" !important
  }

  .inputNumber >>> .el-input__inner {
    -webkit-border-radius: .16rem
    -moz-border-radius: .16rem
    border-radius: .16rem
  }
</style>
