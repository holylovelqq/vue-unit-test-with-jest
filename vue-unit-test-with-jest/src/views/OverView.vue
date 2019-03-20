<template>
  <div>
    <h1 class="title">this is overview</h1>
    <div class="example">
      <h2 class="example_title">filter的单元测试例</h2>
      <el-input class="input" v-model="userInput" placeholder="输入长度大于7的内容，下方将显示过滤后内容"></el-input>
      <div v-show="toggleShow" class="text">{{userInput | formatText}}</div>
      <div v-show="!toggleShow" class="text">{{userInput}}</div>
      <app-button @click="changeShow">切换显示方式</app-button>
    </div>
    <div class="example">
      <h2 class="example_title">路由跳转的单元测试例</h2>
      <app-button size="lg" @click="goVIPs">跳转到VIP用户页面</app-button>
    </div>
    <div class="example">
      <h2 class="example_title">Axios的单元测试例</h2>
      <app-button size="lg" @click="getData">从后台接口获取数据</app-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userInput: '121',
      toggleShow: true,
      usersInfo: []
    }
  },
  filters: {
    formatText: function (value) {
      console.log(value)
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
    },
    goVIPs () {
      this.$router.push({
        path: '/vips'
      })
    },
    getData () {
      this.$axios
        .get('users/')
        .then(res => {
          this.usersInfo = res.data
        })
        .catch(err => console.log(err))
        .finally()
    }
  }
}
</script>
<style scoped>
.title{
  margin-bottom: 20px;
}
.example{
  text-align: center;
  padding: 20px;
  border: 1px dashed red;
  margin-bottom: 50px;
}
.example_title{
  margin-bottom: 20px;
  color:blueviolet;
}
.input{
  width: 500px;
  margin-bottom: 20px;
}
.text{
  width: 500px;
  height: 30px;
  background-color:darkkhaki;
  margin: 0 auto;
  line-height: 30px;
  margin-bottom: 20px;
  font-weight: 700;
  color:deeppink;
}
</style>
