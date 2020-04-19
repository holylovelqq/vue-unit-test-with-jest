<template>
<div>
    <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>

   <v-btn
   @click="fetchData"
   class="mt-4"
   large
   depressed
   color="error"
   >
   点我获取mockData(axios测试用例)
   </v-btn>
</div>

</template>

<script lang="ts" src="./Table.ts"></script>
