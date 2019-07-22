<template>
  <div class="inputNumber iconfont text-right col-xs-4">
    <span class="inputNumber_change inputNumber_decrease iconfont" @click="changeNum(-1)">&#xe6b6;</span>

    <span class="inputNumber_change inputNumber_increase iconfont" @click="changeNum(1)">&#xe6b7;</span>
    <div class="inputNumber_input" >
      <input  type="number" :value="itemNum">
    </div>
  </div>
</template>

<script>
    export default {
        name: "changeNumber",
      props: {
        itemNum: {
          type: Number,
          default: 1
        },
      },
      data(){
        return{
          Num:1
        }},
      methods:{
        changeNum(key){
          if(key===1)
          {
            this.itemNum +=1;
          }
          if(key===-1){
            if(this.itemNum>1){
              this.itemNum -=1;
            }
          }
          console.log("choosing item piece:" +this.itemNum);
        }
      }

    }
</script>

<style scoped lang="stylus">
  .inputNumber
    position: relative;
    display: inline-block;
    font-size: 12px;
    width 100%
    .inputNumber_change
      position: absolute;
      background: #fff;
      text-align: center;
      margin: 0.17rem 0;
      width: 0.23rem;
      line-height: 0.2rem;
      display: inline-block;
      vertical-align: baseline;
    .inputNumber_decrease
      border-radius: 0.16rem 0 0 0.16rem;
      border-right: none;
      left 17px
    .inputNumber_increase
      border-radius: 0 0.16rem 0.16rem 0;
      border-left: none;
      right 17px
    .inputNumber_input
      display: block;
      width 100%
    .inputNumber_input input
      width 100%
      background-color: #FFF;
      background-image: none;
      border-radius: 0.16rem;
      height: 28px;
      line-height: 28px;
      padding-left: 35px;
      padding-right: 35px;
      text-align: center;
      border: 1px solid #DCDFE6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      outline: 0;
      padding: 0 15px;
      -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);

</style>
