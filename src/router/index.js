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
const login = () => import('@/pages/login/login');
const categories = () => import('@/pages/categories/categories');
const myAccount = () => import('@/pages/myAccount/myAccount');
const currentOrder = () => import('@/pages/orders/currentOrder/currentOrder');
const currentOrderDetail = () => import('@/pages/orders/currentOrder/currentOrderDetail');
const OrderHistory = () => import('@/pages/orders/OrderHistory/OrderHistory');
const OrderHistoryDetail = () => import('@/pages/orders/OrderHistory/OrderHistoryDetail');
const unpaidOrder = () => import('@/pages/orders/unpaidOrder/unpaidOrder');
const unpaidOrderDetail = () => import('@/pages/orders/unpaidOrder/unpaidOrderDetail');
const personalInfo = () => import('@/pages/myAccount/components/personalInfoDetail');
const updateInfo = () => import('@/pages/myAccount/components/updateInfo');
const changeEmail = () => import('@/pages/myAccount/components/changeEmail');
const searchDetail = () => import('@/pages/home/components/search/searchDetail');
const searchResult = () => import('@/pages/searchResult/searchResult');
const shoppingCart = () => import('@/pages/shoppingCart/shoppingCart');
const product = () => import('@/pages/product/product');
const contact = () => import('@/pages/customerService/customerService');
const test = () => import('@/pages/test');
const productTest = () => import('@/pages/productTest/product');


Vue.use(Router);

export default new Router({
  // mode: 'history', //去掉地址栏的#,但是去掉后，服务器上无法运行，需要配置（搜索）https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90
  routes: [
    {
      mode: 'history',
      path: '/',
      name: '/Home',
      component: Home,
      meta: {
        title: 'home',
        keepAlive: true
      }
    },
    {
      mode: 'history',
      path: '/login',
      name: '/login',
      component: login,
    },
    {
      mode: 'history',
      path: '/categories',
      name: '/categories',
      component: categories,
    },
    {
      mode: 'history',
      path: '/myAccount',
      name: '/myAccount',
      component: myAccount,
    },
    {
      path: '/myAccount/unpaidOrder',
      name: '/myAccount/unpaidOrder',
      component:unpaidOrder,
    },
    {
      path: '/myAccount/unpaidOrder/Detail',
      name: '/myAccount/unpaidOrder/Detail',
      component:unpaidOrderDetail,
    },
    {
      path: '/myAccount/currentOrder',
      name: '/myAccount/currentOrder',
      component:currentOrder,
    },
    {
      path: '/myAccount/currentOrderDetail',
      name: '/myAccount/currentOrderDetail',
      component:currentOrderDetail,
    },
    {
      path: '/myAccount/OrderHistory',
      name: '/myAccount/OrderHistory',
      component:OrderHistory,
    },
    {
      path: '/myAccount/OrderHistoryDetail',
      name: '/myAccount/OrderHistoryDetail',
      component:OrderHistoryDetail,
    },
    {
        path: '/myAccount/personalInfo',
        name: '/personalInfo',
        component: personalInfo
    },
    {
      path: '/myAccount/personalInfo/updateInfo',
      name: '/updateInfo',
      component: updateInfo
    },
    {
      path: '/myAccount/personalInfo/changeEmail',
      name: '/changeEmail',
      component: changeEmail
    },
    {
      path: '/contact',
      name: '/contact',
      component: contact
    },
    {
      mode: 'history',
      path: '/searchDetail',
      name: '/searchDetail',
      // component: searchDetail
      component: searchDetail

    },
    {
      mode: 'history',
      path: '/searchResult/:keyword',
      name: '/searchResult',
      component: searchResult,
      meta: {
        title: 'searchDetail',
        keepAlive: true
      }
    },
    {
      mode: 'history',
      path: '/shoppingCart',
      name: '/shoppingCart',
      component: shoppingCart,
      meta: {
        title: 'searchDetail',
        keepAlive: true
      }
    },
    {
      mode: 'history',
      path: '/product/:id',
      name: '/product',
      component: product
    },
    {
      mode: 'history',
      path: '/test',
      name: '/test',
      component: test
    },
    {
      mode: 'history',
      path: '/productTest',
      name: '/productTest',
      component: productTest
    },
    {
      path: '/facebook',
      beforeEnter() {location.href = 'https://www.facebook.com/importexpressofficial/'}
    },
    {
      path: '/pinterest',
      beforeEnter() {location.href = 'https://www.pinterest.com/importexpressofficial'}
    },
    {
      path: '/twitter',
      beforeEnter() {location.href = 'https://twitter.com/importexpresss'}
    },
    {
      path: '/youtube',
      beforeEnter() {location.href = 'https://www.youtube.com/channel/UCQ1BcpyhuJdpCXzJuOswOKw'}
    },
    {
      path: '/instagram',
      beforeEnter() {location.href = 'https://www.instagram.com/importexpressofficial/'}
    },
    {
      path: '/blog',
      beforeEnter() {location.href = ''}
    },

  ],
  // history模式下的一个属性
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
