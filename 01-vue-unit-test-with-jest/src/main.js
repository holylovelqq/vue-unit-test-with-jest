import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import Moment from 'moment'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
import '@/assets/css/color-dark.css'
import AppButton from '@/basics/AppButton'

Vue.component('AppButton', AppButton)

Vue.prototype.$moment = Moment
Vue.prototype.$axios = Axios
// 伪造的数据库地址
Axios.defaults.baseURL = 'http:xxx.com/api/'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
