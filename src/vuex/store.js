import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    name:'Alan',
    age: '18'
  },
  mutations:{
    newImg(state, msg){
      sessionStorage.setItem('headImg', JSON.stringify(msg))
      state.headImg = msg;
    }
  }
})
