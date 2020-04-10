<template>
  <div class="header">
    <div class="collapse-btn" @click="collapseChage">
      <i class="el-icon-menu"></i>
    </div>
    <div class="logo">Unit-test-with-jest</div>
    <div class="tips">本页面用于展示一些单元测试用例，供vue项目单元测试使用，布局样式等如有BUG，请忽略</div>
    <div class="user-info">
      <span class="el-dropdown-link">
        <img class="user-logo" src="../assets/logo.png">
        {{name}}
      </span>
    </div>
  </div>
</template>
<script>
import eventHub from '@/assets/js/EventHub.js'
import { checkWidth } from '@/assets/js/CommonMethods.js'
export default {
  data () {
    return {
      collapse: checkWidth(),
      name: 'admin'
    }
  },
  computed: {},
  methods: {
    collapseChage () {
      this.collapse = !this.collapse
      eventHub.$emit('collapse', this.collapse)
    }
  }
}
</script>
<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  line-height: 70px;
  color: #fff;
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
}
.collapse-btn img {
  vertical-align: middle;
}
.collapse-btn:hover {
  background: rgb(40, 52, 70);
}
.header .logo {
  float: left;
  width: 200px;
  /* text-align: center; */
}
.header .tips {
  float: left;
}
.user-info {
  float: right;
  padding-right: 50px;
  font-size: 16px;
  color: #fff;
}
.user-info .el-dropdown-link {
  position: relative;
  display: inline-block;
  padding-left: 50px;
  color: #fff;
  cursor: pointer;
  vertical-align: middle;
}
.user-info .user-logo {
  position: absolute;
  left: 0;
  top: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
