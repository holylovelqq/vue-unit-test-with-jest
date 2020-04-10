<template>
  <div>
    <h1 class="title">this is overview</h1>
    <filter-test></filter-test>
    <axios-test></axios-test>
    <router-test></router-test>
    <vuex-test></vuex-test>
  </div>
</template>
<script>
import FilterTest from '@/components/FilterAddWatchTest.vue'
import AxiosTest from '@/components/AxiosTest.vue'
import RouterTest from '@/components/RouterTest.vue'
import VuexTest from '@/components/VuexTest.vue'
export default {
  name: 'OverView',
  components: {
    FilterTest,
    AxiosTest,
    RouterTest,
    VuexTest
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped>
</style>
