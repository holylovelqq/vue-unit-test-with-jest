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
import FilterTest from '@/components/FilterTest.vue'
import AxiosTest from '@/components/AxiosTest.vue'
import RouterTest from '@/components/RouterTest.vue'
import VuexTest from '@/components/VuexTest.vue'
export default {
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
.title {
  margin-bottom: 20px;
}
.example {
  text-align: center;
  padding: 20px;
  border: 1px dashed red;
  margin-bottom: 50px;
}
.example_title {
  margin-bottom: 20px;
  color: blueviolet;
}
.input {
  width: 500px;
  margin-bottom: 20px;
}
.text {
  width: 500px;
  height: 30px;
  background-color: darkkhaki;
  margin: 0 auto;
  line-height: 30px;
  margin-bottom: 20px;
  font-weight: 700;
  color: deeppink;
}
</style>
