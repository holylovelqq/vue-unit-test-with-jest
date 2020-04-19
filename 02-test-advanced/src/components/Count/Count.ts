import Vue from 'vue'

export default Vue.extend({
  data: () => ({
  }),

  computed: {
    /**
     * 当前vue版本下不建议使用mapGetters/mapState/mapActions/mapMutations函数
     * 因为：1.ts不能识别其类型，2.对测试不友好
     * vue3.x开始对ts支持可能会更好
     */
    count (): number {
      return this.$store.state.count.count
    },

    evenOrOdd (): 'even'|'odd' {
      return this.$store.getters.evenOrOdd
    }
  },

  methods: {
    plus () {
      this.$store.dispatch('increment')
    },

    minus () {
      this.$store.dispatch('decrement')
    }
  }
})
