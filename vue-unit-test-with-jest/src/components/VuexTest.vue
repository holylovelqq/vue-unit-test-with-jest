<template>
    <!-- vuex的单元测试例 -->
    <div class="example vuex">
      <h2 class="example_title">vuex的单元测试例</h2>
      <div class="text">{{storeVal}}</div>
      <app-button size="lg" @click="changeVal">更改vuex内的变量值</app-button>
    </div>
</template>
<script>
export default {
  data () {
    return {
      storeVal: '伪造'
    }
  },
  methods: {
    changeVal () {

    }
  }
}
</script>
<style scoped>
</style>
