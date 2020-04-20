<template>

  <div>
    <table-test class="mb-4"></table-test>
    <v-divider></v-divider>
    <count-test class="mt-4"></count-test>
    <v-divider></v-divider>
    <picture-test class="my-4"></picture-test>
    <v-divider></v-divider>
    <slot-test class="ma-4">
      <template #default>
        slot测试自定义内容
      </template>
    </slot-test>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import tableTest from '@/components/Table/Table.vue'
import countTest from '@/components/Count/Count.vue'
import pictureTest from '@/components/Picture/Picture.vue'
import slotTest from '@/components/SlotTest/SlotTest.vue'

export default Vue.extend({
  name: 'Test',
  components: {
    tableTest,
    countTest,
    pictureTest,
    slotTest
  }
})
</script>
