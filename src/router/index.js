import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import searchDetail from '@/pages/home/components/search/searchDetail'
import searchResult from '@/pages/searchResult/searchResult'
import shoppingCar from '@/pages/shoppingCar/shoppingCar'
import productList from '@/pages/searchResult/components/productList'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/searchDetail',
      name: 'searchDetail',
      component: searchDetail
    },
    {
      path: '/searchResult/:keyword',
      name: 'searchResult',
      component: searchResult
    },
    {
      path: '/shoppingCar',
      name: 'shoppingCar',
      component: shoppingCar
    },
    {
      path: '/productList',
      name: 'productList',
      component: productList
    },
  ]
})
