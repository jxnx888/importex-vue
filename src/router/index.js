import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import searchDetail from '@/pages/home/components/search/searchDetail'
import searchResult from '@/pages/searchResult/searchResult'
import shoppingCar from '@/pages/shoppingCar/shoppingCar'
import product from '@/pages/product/product'

import filtertest from '../pages/filter/filter'

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
      path: '/product/:id',
      name: 'product',
      component: product
    },
    {
      path: '/filtertest',
      name: 'filtertest',
      component: filtertest
    },
  ]
})
