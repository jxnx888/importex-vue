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

    <!--<div class="selectType">
      <div class="col-xs-12">
        <div v-for="(item,index) in goodColorSize" class="">
          <div v-if="item.type[index-1] === item.type[index] && item.img === ''" class="sizeType">
            <p class="text-left">{{item.type}}123123:</p>
            {{item.value}}</div>
          <div v-else-if="item.type[index-1] === item.type[index] && item.img !== ''" class="sizeType" >
            <p class="text-left">{{item.type}}:</p>
            {{item.img}}
          </div>
          <div v-else class="sizeType" >
            <p class="text-left">{{item.type}}::::::::::::</p>
            {{item.value}}
          </div>
        </div>
      </div>
    </div>-->
    <div class="row color_Size">
      <div class="col-xs-12" >
        <div class="size" >
          <div v-for="(item, index) in goodColorSize">

            <p class="text-left" v-if="index<1 && item.type === 'Size'" >Size:</p>
            <div class="sizeType" v-if="item.type === 'Size'"
                 v-bind:class="{active:index==isSizeActive}"
                 @click="chooseTheTypeSize(index,item.id, item.type, item.value)">
              <span > {{item.value}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-12">
        <div class="height">
          <div v-for="(itemHeight, indexHeight) in goodColorSize">
            <p class="text-left" v-if="itemHeight.type === 'Height'&&  indexHeight<1 " >Height:</p>
            <div class="" v-if="itemHeight.type === 'Height'"
                 @click="chooseTheTypeHeight(indexHeight, itemHeight.id, itemHeight.type, itemHeight.value)">
              <div class="heightType"
                   v-bind:class="{active:indexHeight==isHeightActive}" >
                <span v-if="itemHeight.img == ''"> {{itemHeight.value}}</span>
                <img v-else class="colorType_img" :src="itemHeight.img" alt="white" title="white">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-12">
        <div class="color">
          <div v-for="(itemColor, indexColor) in goodColorSize">
            <p class="text-left" v-if="(itemColor.type == 'Colour' || itemColor.type == 'Color') &&  indexColor<1 " >Colour:</p>
            <div class="col-xs-2" v-if="itemColor.type == 'Colour' || itemColor.type == 'Color'"
                 @click="chooseTheTypeColor(indexColor, itemColor.id, itemColor.type, itemColor.value)">
              <div class="colorType"
                   v-bind:class="{active:indexColor==isColorActive}" >
                <span v-if="itemColor.img == ''"> {{itemColor.value}}</span>
                <img v-else class="colorType_img" :src="itemColor.img" >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xs-12">
        <div class="Specifications">
          <div v-for="(itemSpec, indexSpec) in goodColorSize">
            <p class="text-left" v-if="indexSpec<1 && itemSpec.type !== 'Colour'&& itemSpec.type !== 'Color' && itemSpec.type !== 'Size' && itemSpec.type !== 'Height'">Specifications:</p>
            <div
                 v-if="itemSpec.type !== 'Colour'&& itemSpec.type !== 'Color' && itemSpec.type !== 'Size' && itemSpec.type !== 'Height'"
                 @click="chooseTheTypeSpec(indexSpec, itemSpec.id)">
              <div class="SpecificationsType"
                   v-bind:class="{active:indexSpec==isSpecActive}">
                <span v-if="itemSpec.img == ''"> {{itemSpec.value}}</span>
                <img v-else class="colorType_img" :src="itemSpec.img" alt="white" title="white">

              </div>
            </div>
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
  <input type="hidden" :value="this.productID"></input>

</div>
</template>

<script>

  export default {
        name: "chooseItemType",
      props:{
        goodColorSize: Array,
        productID:String,
        skuProducts:Array
      },
      data(){
          return{
            num:0,
            itemNum:0,
            itemPrice:0,
            isSizeActive:-1,
            isColorActive:-1,
            isSpecActive:-1,
            isHeightActive:-1,
            currentProductID:'',
            typePriceList:'',
            view_url:'',
            sizeID:'',
            sizeType:'',
            sizeValue:'',
            heightID:'',
            heightType:'',
            heightValue:'',
            colorID:'',
            colorValue:'',
            colorType:'',
            specID:'',
            specType:'',
            specValue:'',
            addToCartInfo:'',
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
          if(this.sizeID){
            var str = this.sizeID+"|"+this.colorID+"@"+this.itemPrice+"@"+this.itemNum+"@"+ this.sizeType+ ":" +this.sizeValue+"|"+this.sizeID+"&&"+this.colorType+ ":"+this.colorValue+"|"+this.colorID
          }
          if(this.heightID){
            var str = this.heightID+"|"+this.colorID+"@"+this.itemPrice+"@"+this.itemNum+"@"+ this.heightType+ ":" +this.heightValue+"|"+this.heightID+"&&"+this.colorType+ ":"+this.colorValue+"|"+this.colorID
          }
           if(this.specID){
            var str = this.specID+"|"+this.colorID+"@"+this.itemPrice+"@"+this.itemNum+"@"+ this.heightType+ ":" +this.heightValue+"|"+this.heightID+"&&"+this.colorType+ ":"+this.colorValue+"|"+this.colorID
          }
          if(this.colorID){
            var str = "0|"+this.colorID+"@"+this.itemPrice+"@"+this.itemNum+"@"+this.colorType+ ":"+this.colorValue+"|"+this.colorID
          }
          this.addToCartInfo = str;
          console.log(this.addToCartInfo)
          console.log("productID:"+this.productID)
        },
        chooseTheTypeSize(index,id, type, value){
          this.isSizeActive=index;
          this.sizeID = id;
          this.sizeType = type;
          this.sizeValue = value;
          console.log(this.sizeID,this.sizeType,this.sizeValue)
        },
        chooseTheTypeHeight(index,id, type, value){
          this.isHeightActive=index;
          this.heightID =id;
          this.heightType = type;
          this.heightValue = value;
          console.log(this.heightID,this.heightType,this.heightValue)
        },
        chooseTheTypeColor(index,id, type, value){
          this.isColorActive=index;
          this.colorID = id;
          this.colorType = type;
          this.colorValue = value;
          console.log(this.colorID,this.colorType,this.colorValue)
        },
        chooseTheTypeSpec(index,id, type, value){
          this.isSpecActive=index;
          this.specID = id;
          this.specType = type;
          this.specValue = value;
          console.log(this.specID,this.specType,this.specValue)
        },
        numberChange(value) {
          this.itemNum = value;
          console.log("choosing item piece:" +this.itemNum);
        },

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
    .color_Size
      .size
        .sizeType
          float left
          height .25rem
          min-width .3rem
          line-height .25rem
          border 1px solid #000
          padding 0 .05rem
          margin 0 2% 0 0
      .height
        .heightType
          float: left;
          height .3rem
          line-height .3rem
          margin 2% 2% 2% 0
          padding 0 .05rem
          border 1px solid #000
      .color
        .col-xs-2
          padding 0
          height .5rem
        .colorType
          position: relative;
          width .44rem
          height .44rem
          border 1px solid #000
          .colorType_img
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            max-width: 100%;
            max-height: 100%;
      .SpecificationsType
        float: left;
        height .3rem
        line-height .3rem
        margin 2% 2% 2% 0
        padding 0 .05rem
        border 1px solid #000
    .quantity_addCart
      position: fixed;
      bottom 0
      line-height .5rem
      width 100%
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
    .selectType
      overflow hidden
      .sizeType
        float left
        height .25rem
        min-width .3rem
        line-height .25rem
        border 1px solid #000
        padding 0 .05rem
        margin 0 2% 0 0
      .colorType
        position: relative;
        width .44rem
        height .44rem
        border 1px solid #000

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
