import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'

import fastclick from 'fastclick'// 解决移动端点击300ms的延迟问题 第一步

import 'common/stylus/index.styl'

Vue.config.productionTip = false// 解决移动端点击300ms的延迟问题 第二步

fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})