import Vue from 'vue'
import App from './App.vue'
import 'swiper/dist/css/swiper.css'
import router from './router/index'
//应用mock
import './mock/mockServer'
import store from './store/index'
import Search from './components/Search/Search.vue'
import Header from './components/Header/Header.vue'
import lazyLoad from 'vue-lazyload'

//注册search全局组件
Vue.component('Search',Search)
Vue.component('HeaderTop',Header)

import loading from  '../static/image/loading2.gif'

Vue.use(lazyLoad,{
  loading
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store,  //应用store
  router   //注册路由
})
