import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    isShow: false
  }),

  methods: {
    changeShowLazy () {
      setTimeout(() => {
        this.isShow = !this.isShow
      }, 1000)
    }
  }
})
