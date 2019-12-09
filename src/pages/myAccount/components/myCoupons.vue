<template>
    <div class="myCoupons container">
      <div class="col-xs-12 myCoupons_back">
        <div @click="handleGoBackClick">
          <span class="iconfont ">&#xe79b;</span>
          <p class="text-center">Coupon List</p>
        </div>
      </div>

      <div class="row coupon_container index_0">
        <div class="col-xs-12 ">
          <div class="col-xs-12 coupon_border">
            <i class="top_semicircle"></i>
            <div class="coupon_text">
              <p>0002-557992-9999</p>
              <strong>If order over $200</strong>
              <p>05/01/2019-08/31/2019</p>
            </div>
            <div class="coupon_right">
              <div class="coupon_price">
                <span>$<em class="coupon_price_num">20.0</em></span>
                <p>One time only</p>
              </div>
            </div>
            <i class="bottom_semicircle"></i>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "myCoupons",
      methods:{
        handleGoBackClick() {
          this.$router.go(-1);
        },
        getCouponList(res) {
          let url = '../coupon/listCouponsJson';
          this.$ajax.get(url,)
            .then(this.getCouponListSucc)
            .catch(function (res) {
              console.log("error, no data")
            })
        },

        getCouponListSucc(res) {
          const data = JSON.parse(res.data);
          // const data = res.data;
          console.log(JSON.stringify(data));
        },
      },
      mounted() {
          this.getCouponList();
      }
    }
</script>

<style scoped lang="stylus">
  .myCoupons_back
    height .45rem
    line-height .45rem
    background-color #01A4EF
    position: fixed
    top 0
    left 0
    right 0
    z-index 5

  .myCoupons_back span
    position: absolute;
    /*left 0.3rem*/
    font-size .2rem
    color #fff

  .myCoupons_back a, .myCoupons_back p
    color #fff
    font-size .15rem
  .coupon_container
  .index_0
    margin-top .45rem
    .coupon_border
      display: flex;
      min-height: .76rem;
      width: 100%;
      margin: 0.1rem 0;
      padding-left: 8%;
      border: 1px solid #E95412;
      border-radius: 4px;
      position: relative;
      .top_semicircle
        position: absolute;
        left: 2.085rem;
        top: -0.05rem;
        width: 0.08rem;
        height: 0.08rem;
        background-color: #fff;
        background-image: url(https://img.kidsproductwholesale.com/importcsvimg/webpic/img/wh89/coupon/m_coupon_semicircle.png);
        background-repeat: no-repeat;
        background-size: cover;
      .bottom_semicircle
        position: absolute;
        left: 2.085rem;
        bottom: -0.05rem;
        width: 0.08rem;
        height: 0.08rem;
        background-color: #fff;
        background-image: url(https://img.kidsproductwholesale.com/importcsvimg/webpic/img/wh89/coupon/m_coupon_semicircle.png);
        background-repeat: no-repeat;
        background-size: cover;
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        transform: rotate(180deg)
      .coupon_text
        width: 65%;
        height: 100%;
        padding: 0.05rem 0.05rem 0.05rem 0;
      .coupon_text p:first-child
        font-size: 0.13rem;
        line-height: 0.15rem;
        color: #333;
        padding-top: 0.05rem;
        padding-bottom: 0.05rem;
      .coupon_text p:last-child
        font-size: 0.12rem;
        line-height: 0.12rem;
        color: #999999;
        padding-top: 0.04rem;
      .coupon_text strong
        display: inline-block;
        color: #333333;
        font-size: 0.13rem;
        line-height: 0.13rem;
      .coupon_right
        width: 33%;
        margin-top: 0.08rem;
        margin-bottom: 0.08rem;
        padding-left: 2%;
        border-left: 1px dashed #E95412;
        display: flex;
        justify-content: center
        .coupon_price
          width: .9rem;
          text-align: center;
          background-color: #EA5E40;
          display: flex;
          flex-direction: column;
          justify-content: center;
        .coupon_price span
          font-size: 0.17rem;
          font-weight: 700;
          color: #fff;
          .coupon_price_num
            font-size: 0.25rem;
            font-weight: 700;
            margin-left: 0.01rem;
        .coupon_price p
          font-size: 0.12rem;
          padding-top: 0.05rem;
          color: #fff;
</style>
