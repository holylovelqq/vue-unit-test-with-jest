<template>
  <div class="ml-4">
    <div> store 测试：</div>
    <div class="mt-2">
      <v-btn small @click="minus" color="primary" class="mr-2">-</v-btn>
       {{ count }}
       <v-btn small @click="plus" color="primary" class="ml-2">+</v-btn>

       <v-chip class="ma-2"> {{ evenOrOdd }}</v-chip>
    </div>
  </div>
</template>

<script lang="ts" src="./Count.ts"></script>
