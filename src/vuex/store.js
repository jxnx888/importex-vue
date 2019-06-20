import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import state from './cart/state'
import getters from './cart/getters'
import mutations from './cart/mutations'
import actions from './cart/action'



export default new Vuex.Store({
  modules: {
    state,
    getters,
    mutations,
    actions
  },
  strict: process.env.NODE_ENV !== 'production', // 严格模式
})
