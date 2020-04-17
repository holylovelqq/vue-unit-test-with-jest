import Vue from 'vue'
import Vuetify from 'vuetify'
import Axios from 'axios'

// 测试全局引入vuetify，识别vuetify组件
Vue.use(Vuetify)

/**
 * **推荐**
 * 测试全局引入axios
 * 最简单的axios测试方法：使用插件nock：https://github.com/nock/nock#how-does-it-work
 * 原理：
 *  1. 全局引入axios，识别this.$axios -> 测试时不报错
 *  2. 使用nock覆盖node http请求，并模拟正常情况下的返回值，和错误情况下的错误码
 * 参考nock的配置项和使用方法
 */

/**
 * axios 测试还提供了第二种测试方法：使用jest mock的方法（不使用nock）
 * 参见 @/src/componets/Table/Table.spec.ts
 *
 */

const axios = Axios.create()

Vue.prototype.$axios = axios;
