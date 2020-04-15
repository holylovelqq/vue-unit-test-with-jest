<template>
  <table-test></table-test>
</template>

<script lang="ts">
import Vue from 'vue'
import tableTest from '@/components/Table/Table.vue'

export default Vue.extend({
  name: 'Test',
  components: {
    tableTest
  }
})
</script>
