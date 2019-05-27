// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引用axios传输数据
import axios from 'axios'
axios.defaults.withCredentials =true; //允许请求携带cookie

// 如果想要发送带json格式参数的请求，则需要使用qs模块来处理参数
import qs from 'qs'
Vue.prototype.$qs = qs;


// 移动端 取消 按钮点击300ms延迟
import fasteClick from 'fastclick'

// 引入轮播图插件库和css
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

// import Bootstrap
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// 引入jQuery
import 'jquery'
import jquery from 'jquery'
import $ from 'jquery'
// 引用bootstrap
import './assets/bootstrap-3.3.7/css/bootstrap.css'
import './assets/bootstrap-3.3.7/js/bootstrap.js'


//reset styles
import './assets/styles/reset.css'
import './assets/styles/border.css'
// iconfont引用
import './assets/styles/iconfont.css'

Vue.config.productionTip = false;
// 移动端 取消 按钮点击300ms延迟
fasteClick.attach(document.body);
// Use Bootstrap
// Vue.use(BootstrapVue);
// 使用axios
Vue.prototype.$ajax = axios;
// Vue.prototype.$http = axios;

// axios.defaults.baseURL = 'http://192.168.1.192:10004/';//配置你的接口请求地址
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;//配置token,看情况使用
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';//配置请求头信息。


Vue.use(VueAwesomeSwiper, /* { default global options } */);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
