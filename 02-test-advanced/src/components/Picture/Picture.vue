<template>
  <div>
    <v-btn
    @click="changeShowLazy"
    class="mt-4"
    large
    depressed
    color="warning"
   >
   点击一秒后显示/隐藏图片（定时器测试用例）
   </v-btn>
    <v-img v-if="isShow" src="https://picsum.photos/510/300?random" width="50%" contain aspect-ratio="1.7" class="ma-4"></v-img>
  </div>
</template>

<script lang="ts" src="./Picture.ts"></script>
