import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import searchDetail from '@/pages/home/components/search/searchDetail'
import searchBar from '@/pages/home/components/search/searchBar'
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
      path: '/searchBar',
      name: 'searchBar',
      component: searchBar
    },
  ]
})
