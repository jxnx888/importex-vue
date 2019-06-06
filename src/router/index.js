import Vue from 'vue'
import Router from 'vue-router'

// 普通路由模式
// import Home from '@/pages/home/home'
// import searchDetail from '@/pages/home/components/search/searchDetail'
// import searchResult from '@/pages/searchResult/searchResult'
// import shoppingCart from '@/pages/shoppingCart/shoppingCart'
// import product from '@/pages/product/product'
// import filtertest from '../pages/filter/filter'

//路由懒加载模式
const Home = () => import('@/pages/home/home');
const myAccount = () => import('@/pages/myAccount/myAccount');
const searchDetail = () => import('@/pages/home/components/search/searchDetail');
const searchResult = () => import('@/pages/searchResult/searchResult');
const shoppingCart = () => import('@/pages/shoppingCart/shoppingCart');
const product = () => import('@/pages/product/product');
const test = () => import('@/pages/test');


Vue.use(Router);

export default new Router({
  // mode: 'history', //去掉地址栏的#,但是去掉后，服务器上无法运行，需要配置（搜索）https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90
  routes: [
    {
      mode: 'history',
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'home',
        keepAlive: true
      }
    },
    {
      mode: 'history',
      path: '/myAccount',
      name: 'myAccount',
      // component: searchDetail
      component: resolve => require(['../pages/myAccount/myAccount.vue'], resolve),//懒加载,

    },
    {
      mode: 'history',
      path: '/searchDetail',
      name: 'searchDetail',
      // component: searchDetail
      component: resolve => require(['../pages/home/components/search/searchDetail.vue'], resolve),//懒加载,

    },
    {
      mode: 'history',
      path: '/searchResult/:keyword',
      name: 'searchResult',
      component: resolve => require(['@/pages/searchResult/searchResult.vue'], resolve),//懒加载,
      meta: {
        title: 'searchDetail',
        keepAlive: true
      }
    },
    {
      mode: 'history',
      path: '/shoppingCart',
      name: 'shoppingCart',
      // component: shoppingCart,
      component: resolve => require(['@/pages/shoppingCart/shoppingCart.vue'], resolve),//懒加载,
      meta: {
        title: 'searchDetail',
        keepAlive: true
      }
    },
    {
      mode: 'history',
      path: '/product/:id',
      name: 'product',
      component: resolve => require(['@/pages/product/product.vue'], resolve),//懒加载,
    },
    {
      mode: 'history',
      path: '/test',
      name: 'test',
      component: resolve => require(['@/pages/test.vue'], resolve),//懒加载,
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})
