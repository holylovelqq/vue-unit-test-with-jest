<template>
    <!-- filter的单元测试例 -->
    <div class="example filter">
      <h2 class="example_title">filter和watch的单元测试例</h2>
      <el-input class="input" v-model="userInput" placeholder="输入长度大于7的内容，下方将显示过滤后内容"></el-input>
      <div v-show="toggleShow" class="text format">{{userInput | formatText}}</div>
      <div v-show="!toggleShow" class="text noformat">{{userInput}}</div>
      <app-button @click="changeShow">切换显示方式</app-button>
    </div>
</template>
<script>
export default {
  data () {
    return {
      userInput: '',
      toggleShow: true
    }
  },
  filters: {
    formatText: function (value) {
      // console.log(value)
      if (!value) return ''
      if (value.length > 7) {
        let frontVal = value.slice(0, 2)
        let endVal = value.slice(value.length - 2, value.length)
        return frontVal + '...' + endVal
      } else {
        return value
      }
    }
  },
  methods: {
    changeShow () {
      this.toggleShow = !this.toggleShow
    }
  },
  // watch 的test用例
  watch: {
    toggleShow(newValue,oldValue){
      console.log(newValue)      
    }
  }
}
</script>
<style scoped>
</style>
