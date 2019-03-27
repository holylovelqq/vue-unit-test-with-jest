<template>
    <!-- 路由跳转的单元测试例 -->
    <div class="example router">
      <h2 class="example_title">路由跳转的单元测试例</h2>
      <app-button size="lg" @click="goVIPs">跳转到VIP用户页面</app-button>
    </div>
</template>
<script>
export default {
  methods: {
    goVIPs () {
      this.$router.push({
        path: '/vips'
      })
    }
  }
}
</script>
<style scoped>
</style>
