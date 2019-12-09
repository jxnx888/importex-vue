<template>
  <div class="chengeAddress container">
    <div class="col-xs-12 chengeAddress_back">
      <div @click="handleGoBackClick">
        <span class="iconfont ">&#xe79b;</span>
        <p class="text-center">Delivery Address</p>
      </div>
    </div>
    <div v-if="addressList.length !== 0"
      v-for="(item,index) in addressList"
      class="row chengeAddress_Content"
      :class="'index_'+ index">
      <div class="col-xs-4 title">
        Contact Name:
      </div>
      <div class="col-xs-8 title name">
        {{item.recipients}}
      </div>
      <div class="col-xs-4 title">
        Phone:
      </div>
      <div class="col-xs-8 title">
        {{item.phone_number}}
      </div>
      <div class="col-xs-4 title">
        Address:
      </div>
      <div class="col-xs-8 title">

        {{item.address}}
        <span v-if="item.street">, {{item.street}}</span>
        <span v-if="item.address2">, {{item.address2}}</span>
        <span v-if="item.statename">, {{item.statename}}</span>
        <span v-if="item.countryname">, {{item.countryname}}</span>
        <span v-if="item.zip_code">, {{item.zip_code}}</span>
      </div>
      <div class="col-xs-12 edit">
        <div class="row">
          <div class="col-xs-6" @click="changeDefault(index)">
            <i class="circle "
               :class="{active:index ==isActive}"
            >
              <i class="iconfont">&#xe631;</i>
            </i>
            <span class="title">Default</span>
          </div>
          <div class="col-xs-3 title"
               @click="editAddress(2,item.id, item.recipients,item.address,item.street, item.address2,item.statename,item.countryname, item.country,item.zip_code,item.phone_number)">
            <span class="iconfont ">&#xe62d;</span> Edit
          </div>
          <div class="col-xs-3 title" @click="deleteAddressConfirm(item.id)"><span class="iconfont ">&#xe634;</span>
            Delete
          </div>
        </div>
      </div>
    </div>
   <div class="row addNewAddress">
     <div class="col-xs-12">
    <div class="addNewAddress_btn text-center" @click="addNewAddressFn(1)">Add Address</div>
     </div>
   </div>
    <div v-if="addressList.length == 0" class="noAddress">
      <div class="noAddress_content">
        <div class="noAddress_title text-center"> You currently have no delivery address</div>
        <div class="noAddress_btn text-center" @click="addNewAddressFn(1)">Add Address</div>
      </div>
    </div>

    <div class=addressChange v-if="editAddressShow">
      <div class="col-xs-12 chengeAddress_back">
        <div>
          <span class="iconfont " @click="editAddressShow = ! editAddressShow">&#xe79b;</span>
          <p class="text-center">Delivery Address</p>
        </div>
      </div>
      <div class="col-xs-12 header text-center">
        Please provide your shipping address
      </div>
      <div class="col-xs-3 title">Recipients:</div>
      <div class="col-xs-9 addressInput">
        <input class="input" type="text" name="" id="recipients" :value="currentRecipients">
        <div class="validation" v-if="validationRecipients">Please add Recipients!</div>
      </div>
      <div class="col-xs-3 title">Street:</div>
      <div class="col-xs-9 addressInput">
        <input class="input" type="text" name="" id="street1" :value="currentStreet1">
        <input class="input" type="text" name="" id="street2" :value="currentStreet2">
        <div class="validation" v-if="validationStreet">Please add Street!</div>
      </div>
      <div class="col-xs-3 title">City:</div>
      <div class="col-xs-9 addressInput">
        <input class="input" type="text" name="" id="city" :value="currentCity">
        <div class="validation" v-if="validationCity">Please add City!</div>
      </div>
      <div class="col-xs-3 title">State:</div>
      <div class="col-xs-9 addressInput">
        <input class="input" type="text" name="" id="state" :value="currentState">
        <div class="validation" v-if="validationState">Please add State!</div>
      </div>
      <div class="col-xs-3 title">Country:</div>
      <div class="col-xs-9 addressInput">
        <select name="country" id="country" class="input" v-model="selected">
          <option :value="item.id"
                  v-for="(item, index) in countryList"
                  :key="index"
                  class="input col-xs-8"
          >{{item.country}}
          </option>
        </select>
      </div>
      <div class="col-xs-3 title zipCode">Zip Code:</div>
      <div class="col-xs-9 addressInput">
        <input class="input" type="number" name="" id="zipcode" :value="currentZipcode">
      </div>
      <div class="col-xs-3 title">Phone:</div>
      <div class="col-xs-9 addressInput">
        <input class="input" type="number" name="" id="phone" :value="currentPhone">
        <div class="validation" v-if="validationPhone">Please add the phone number!</div>
        <div class="validation" v-if="validationPhone1">Please fill in the correct phone number!</div>
      </div>
      <div class="cancelAndSave" style="clear: both;">
        <div class="cancel col-xs-6 text-center" @click="cancel">Cancel</div>
        <div class="save col-xs-6 text-center" @click="save">Save</div>
      </div>
    </div>

    <div class=addressChange v-if="addNewAddressShow">
      <div class="col-xs-12 chengeAddress_back">
        <div>
          <span class="iconfont " @click="addNewAddressShow = ! addNewAddressShow">&#xe79b;</span>
          <p class="text-center">Delivery Address</p>
        </div>
      </div>
      <div class="col-xs-12 header text-center">
        Please provide your shipping address
      </div>
      <div class="col-xs-3 title">Recipients:</div>
      <div class="col-xs-9 addressInput">
        <input class="input" type="text" name="" id="recipientsNew">
        <div class="validation" v-if="validationRecipients">Please add Recipients!</div>
      </div>
      <div class="col-xs-3 title">Street:</div>
      <div class="col-xs-9 addressInput">
        <input class="input" type="text" name="" id="street1New" >
        <input class="input" type="text" name="" id="street2New">
        <div class="validation" v-if="validationStreet">Please add Street!</div>
      </div>
      <div class="col-xs-3 title">City:</div>
      <div class="col-xs-9 addressInput">
        <input class="input" type="text" name="" id="cityNew">
        <div class="validation" v-if="validationCity">Please add City!</div>
      </div>
      <div class="col-xs-3 title">State:</div>
      <div class="col-xs-9 addressInput">
        <input class="input" type="text" name="" id="stateNew">
        <div class="validation" v-if="validationState">Please add State!</div>
      </div>
      <div class="col-xs-3 title">Country:</div>
      <div class="col-xs-9 addressInput">
        <select name="country" id="countryNew" class="input" v-model="selected">
          <option :value="item.id"
                  v-for="(item, index) in countryList"
                  :key="index"
                  class="input col-xs-8"
          >{{item.country}}
          </option>
        </select>
      </div>
      <div class="col-xs-3 title zipCode">Zip Code:</div>
      <div class="col-xs-9 addressInput">
        <input class="input" type="number" name="" id="zipcodeNew">
      </div>
      <div class="col-xs-3 title">Phone:</div>
      <div class="col-xs-9 addressInput">
        <input class="input" type="number" name="" id="phoneNew">
        <div class="validation" v-if="validationPhone">Please add the phone number!</div>
        <div class="validation" v-if="validationPhone1">Please fill in the correct phone number!</div>
      </div>
      <div class="cancelAndSave" style="clear: both;">
        <div class="cancel col-xs-6 text-center" @click="cancel">Cancel</div>
        <div class="save col-xs-6 text-center" @click="save">Save</div>
      </div>
    </div>
    <div class="deleteConfirm" v-if="deleteConfirm">
      <div class="deleteConfirm_content">
        <div class="col-xs-12 top">Are you sure you want to delete this address?</div>
        <div class="row">
          <div class="col-xs-6 confirm_btn text-center" @click="closeDeleteWindow">Close</div>
          <div class="col-xs-6 confirm_btn text-center" @click="confirmDeleteWindow">Ok</div>
        </div>
      </div>
    </div>
    <div class="submitSucc" v-if="submitSucc">
      <div class="submitSuccTip">Submit success!</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "changeAddress",
    data() {
      return {
        countryList: [],
        addressList: [],
        isActive: 0,
        editAddressShow: false,
        addNewAddressShow: false,
        NewaddressAdd: false,
        deleteConfirm: false,
        currentId: '',
        currentRecipients: '',
        currentStreet1: '',
        currentStreet2: '',
        currentCity: '',
        currentState: '',
        currentCountry: '',
        currentZipcode: '',
        currentPhone: '',
        selected: '',
        submitSucc: false,
        editOrNewAddress: 0,
        validationRecipients: false,
        validationStreet: false,
        validationCity: false,
        validationState: false,
        validationPhone: false,
        validationPhone1: false,
      }
    },
    methods: {
      handleGoBackClick() {
        this.$router.go(-1);
      },
      getAddressList(res) {
        let url = '..//orderinfonew/getUserAddressInfoJson';
        this.$ajax.get(url,)
          .then(this.getAddressListSucc)
          .catch(function (res) {
            console.log("error, no data")
          })
      },
      getAddressListSucc(res) {
        const data = JSON.parse(res.data);
        // console.log(JSON.stringify(data));
        this.countryList = data.zonelist;
        this.addressList = data.addresslist;
        // console.log(this.addressList.length)
      },
      editAddress(editType, id, recipients, street1, street2, city, state, country, countryId, zipcode, phone) {
        this.editAddressShow = true;
        this.currentId = id;
        this.selected = countryId;
        this.currentRecipients = recipients;
        this.currentStreet1 = street1;
        this.currentStreet2 = street2;
        this.currentCity = city;
        this.currentState = state;
        this.currentCountry = country;
        this.currentZipcode = zipcode;
        this.currentPhone = phone;
        this.editOrNewAddress = editType;
        // console.log("editOrNewAddress: "+this.editOrNewAddress )
        // console.log(this.selected )
      },
      addNewAddressFn(editType) {
        this.addNewAddressShow = true;
        this.selected = this.countryList[0].id;
        this.editOrNewAddress = editType;
        // console.log("editOrNewAddress: "+this.editOrNewAddress );
        // console.log(this.selected )
      },
      changeDefault(index) {
        this.isActive = index;
      },
      deleteAddressConfirm(id) {
        this.deleteConfirm = true;
        this.currentId = id;
        // console.log(this.currentId )
      },
      closeDeleteWindow() {
        this.deleteConfirm = false;
      },
      confirmDeleteWindow() {
        this.deleteAddress();
        this.deleteConfirm = false;
      },
      deleteAddress() {
        var url = '..//orderinfonew/delAddress';
        var nextId = undefined;
        // console.log(this.currentId )
        this.$ajax.post(url,
          this.$qs.stringify({id: this.currentId, nextId: nextId})
        )
          .then(this.deleteAddresstSucc)
          .catch(function (res) {
            console.log("error")
          })
      },
      deleteAddresstSucc(res) {
        const data = res.data;
        if(data.code=="0"){
          this.getAddressList();
        }
      },
      cancel() {
        this.editAddressShow = false;
        this.addNewAddressShow = false;
      },
      save() {
        if(this.editOrNewAddress == 2){
          this.editAddressSubmit()
        }
        if(this.editOrNewAddress == 1) {
          this.currentId = 0
          this.addNewAddressSubmit()
        }

      },
      editAddressSubmit(){
        var recipients = $("#recipients").val();
        var street1 = $("#street1").val();
        var street2 = $("#street2").val();
        var city = $("#city").val();
        var state = $("#state").val();
        var countryName = $("#country option:selected").text();
        var zipcode = $("#zipcode").val();
        var phone = $("#phone").val();
        var countryID = $("#country option:selected").val();
        var noEmptyInput = this.checkEmptyInput(recipientsNew,street1New,cityNew,stateNew,phoneNew)
        if (noEmptyInput) {
          let url = '..//orderinfonew/mUpdateUserAddress';
          this.$ajax.post(url,
            //pid 为传值的key
            this.$qs.stringify({
              recipients: recipients,
              address: street1,
              country: countryID,
              zipcode: zipcode,
              phonenumber: phone,
              address2: city,
              statename: state,
              street: street2,
              countryname: countryName,
              id: this.currentId,
              type: this.editOrNewAddress
            })
          )
            .then(this.editAddressFnSucc)
            .catch(function (res) {
              console.log("error, no data")
            })
        }
      },
      addNewAddressSubmit() {
        var recipientsNew = $("#recipientsNew").val();
        var street1New = $("#street1New").val();
        var street2New = $("#street2New").val();
        var cityNew = $("#cityNew").val();
        var stateNew = $("#stateNew").val();
        var countryNameNew = $("#countryNew option:selected").text();
        var zipcodeNew = $("#zipcodeNew").val();
        var phoneNew = $("#phoneNew").val();
        var countryIDNew = $("#countryNew option:selected").val();
        var noEmptyInput = this.checkEmptyInput(recipientsNew,street1New,cityNew,stateNew,phoneNew)
        if(noEmptyInput){
        // console.log("this.editOrNewAddress: "+ this.editOrNewAddress);
        // console.log("this.currentId: "+ this.currentId);
          let url = '..//orderinfonew/mUpdateUserAddress';
          this.$ajax.post(url,
            //pid 为传值的key
            this.$qs.stringify({
              recipients: recipientsNew,
              address: street1New,
              country: countryIDNew,
              zipcode: zipcodeNew,
              phonenumber: phoneNew,
              address2: cityNew,
              statename: stateNew,
              street: street2New,
              countryname: countryNameNew,
              id: this.currentId,
              type: this.editOrNewAddress
            })
          )
            .then(this.addNewAddressFnSucc)
            .catch(function (res) {
              console.log("error, no data")
            })
        }
      },
      checkEmptyInput(recipients,street1,city,state,phone){
        if(recipients == ''){
          this.validationRecipients = true;
          setTimeout(() => {
            this.validationRecipients =false;
          },3000);
          return false
        }
        else if(street1 == "") {
          this.validationStreet = true;
          setTimeout(() => {
            this.validationStreet =false;
          },3000);
          return false
        }
        else if(city == "" ) {
          this.validationCity = true;
          setTimeout(() => {
            this.validationCity =false;
          },3000);
          return false
        }
        else if(state == "") {
          this.validationState = true;
          setTimeout(() => {
            this.validationState =false;
          },3000);
          return false
        }
        else if(phone == "" ) {
          this.validationPhone = true;
          setTimeout(() => {
            this.validationPhone =false;
          },3000);
          return false
        }
        return true
      },
      editAddressFnSucc(res) {
        const data = res.data;
        // console.log(res)
        if(data){
          this.editAddressShow = false;
          this.getAddressList();
        }
      },
      addNewAddressFnSucc(res) {
        const data = res.data;
        if(data){
          this.addNewAddressShow = false;
          this.getAddressList();
        }
      },
    },
    mounted() {
      this.getAddressList();
    },

  }
</script>

<style scoped lang="stylus">
  .chengeAddress
    background-color #f7f7f7

    .chengeAddress_back
      height .45rem
      line-height .45rem
      background-color #01A4EF
      position: fixed
      top 0
      left 0
      right 0
      z-index 5

    .chengeAddress_back span
      position: absolute;
      /*left 0.3rem*/
      font-size .2rem
      color #fff

    .chengeAddress_back a, .chengeAddress_back p
      color #fff
      font-size .15rem

    .index_0
      padding-top .45rem

    .chengeAddress_Content
      background-color #fff
      margin-top .1rem

      .title, .content
        color #999
        font-size .13rem
        line-height .25rem
        @media screen and (max-width: 320px)
          font-size .12rem
          padding 0 .1rem

      .name
        color #333
        font-weight bold

      .edit
        border-top 1px solid #ececec
        height .4rem
        line-height .4rem

        .circle
          display: inline-block;
          width: 0.18rem;
          height: 0.18rem;
          border: 1px solid #d1d1d1;
          border-radius: 100%;
          background: #f1f1f1;
          line-height: 0.15rem;
          text-align: center;

          .iconfont
            font-size .12rem
            color #FFF

        .active
          background-color #4CBD27

        .title
          font-size .13rem
          color #333
          line-height .4rem

          .iconfont
            font-size .2rem

    .addressChange
      position: fixed
      top .45rem
      left 0
      bottom 0
      right 0
      background-color #fff
      z-index 6

      .header
        font-size .14rem
        color #9FA3A7
        line-height .3rem

      .title
        font-size .14rem
        line-height .33rem
        margin-top .1rem
        @media screen and (max-width: 320px)
          font-size .12rem

      .zipCode
        padding-right .1rem

      .addressInput
        line-height .33rem
        margin-top .1rem

        .input
          width 100%
          height: 0.3rem;
          border-radius: 6px;
          border: 1px solid #e6e6e6;
          padding-left: 4%;
          background: #FAFAFA;
      .validation
        color: red;
        font-size: .13rem;
        line-height: .2rem;
      .cancelAndSave
        line-height .5rem
        height .5rem
        color #fff
        padding-top .5rem

        .cancel
          background-color #b9b9b9

        .save
          background-color #F5A72C

    .deleteConfirm
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      z-index: 10;
      background: rgba(0, 0, 0, 0.6);

      .deleteConfirm_content
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 85%;
        height: 1.17rem;
        margin: auto;
        border-radius: 10px;
        background: #fff;
        z-index: 11;
        color #666
        padding .2rem .1rem

        .top
          line-height .22rem
          padding-bottom .1rem

        .row
          margin 0 -0.1rem

          .confirm_btn
            border-top 1px solid #D5D5D6
            line-height .42rem

          .confirm_btn:nth-child(2n)
            border-left 1px solid #D5D5D6
            color #0BB20C

    .noAddress
      position: absolute;
      top: 0.45rem;
      left: 0;
      bottom: 0;
      height: auto;
      overflow: auto;
      width: 100%;
      background-color: #f7f7f7;
      .noAddress_content
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 80%;
        height: 1.0rem;
        font-size .15rem
        .noAddress_title
          color #999
        .noAddress_btn
          background-color #F5A72C
          width 1.65rem
          line-height .4rem
          color #fff
          margin auto
          -webkit-border-radius: 4px
          -moz-border-radius: 4px
          border-radius: 4px
          margin-top: .2rem
  .addNewAddress
    background-color #fff
    .addNewAddress_btn
      background-color #F5A72C
      width 1.65rem
      line-height .4rem
      color #fff
      margin auto
      -webkit-border-radius: 4px
      -moz-border-radius: 4px
      border-radius: 4px
      margin-top: .2rem
</style>
