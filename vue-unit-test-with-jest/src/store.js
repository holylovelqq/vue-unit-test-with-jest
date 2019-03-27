import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    TZone: -(new Date().getTimezoneOffset())
  },
  mutations: {
    tzChange (state, data) {
      state.TZone = data
    }
  },
  actions: {
    
  }
})
