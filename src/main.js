// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'lib-flexible'

Vue.use(elementUI)
Vue.use(VueAxios, axios) // 可全局调用 this.axios.post()
Vue.prototype.$qs = qs // 可全局调用 this.$qs
Vue.prototype.$api = 'http://localhost:8080'
Vue.config.productionTip = false

axios.defaults.withCredentials = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  $,
  components: { App },
  template: '<App/>'
})
