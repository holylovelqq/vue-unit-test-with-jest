<template>
    <!-- vuex的单元测试例 -->
    <div class="example vuex">
      <h2 class="example_title">vuex的单元测试例</h2>
      <div class="text">Clicked: [ {{ $store.state.count }} ] times, count is [ {{ evenOrOdd }} ]</div>
      <app-button class="add" size="lg" @click="increment">+1</app-button>&nbsp;&nbsp;&nbsp;
      <app-button class="minus" size="lg" @click="decrement">-1</app-button>
      &nbsp;&nbsp;&nbsp;
      <app-button class="dispatchAdd" size="lg" @click="dispatchIncrement">通过dispatch+1</app-button>
      &nbsp;&nbsp;&nbsp;
      <app-button class="mutationsMinus" size="lg" @click="mutationsDecrement">通过mutations-1</app-button>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'increment',
      'decrement'
    ]),
    // 为了展示测试方法而存在
    dispatchIncrement () {
      this.$store.dispatch('increment')
    },
    // 为了展示测试方法而存在
    mutationsDecrement () {
      this.$store.commit('decrement')
    }
  },
  computed: mapGetters([
    'evenOrOdd'
  ])
}
</script>
<style scoped>
</style>
