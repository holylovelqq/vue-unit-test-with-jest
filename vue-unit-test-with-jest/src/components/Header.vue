<template>
    <div class="header">
        <div class="collapse-btn" @click="collapseChage">
            <i class="el-icon-menu"></i>
            <!-- <img src="../../../static/img/logo.png" alt=""> -->
        </div>
        <div class="logo">Unit-test</div>
        <div class="user-info">
            <!--trigger="click" 则需要点击才会下拉菜单，默认是hover-->
            <el-dropdown  @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../assets/img.jpg">
                    {{name}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
                    <el-dropdown-item command="changepwd">修改密码</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <el-dialog :visible.sync="dialogVisible" title="修改密码" @on-ok="ok('form')" @on-cancel="cancel" class-name="vertical-center-modal" :styles="{top: '150px'}" width="350px">
            <Form ref="form" :model="password" :rules="ruleInline" :label-width="80">
              <FormItem label="原密码" prop="oldpwd">
                <Input v-model="password.oldpwd" placeholder="原密码" clearable style="width: 200px" />
              </FormItem>
              <FormItem label="新密码" prop="newpwd">
                <Input v-model="password.newpwd" placeholder="新密码" clearable style="width: 200px" />
              </FormItem>
            </Form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import eventHub from '@/assets/js/EventHub.js'
export default {
  data () {
    return {
      collapse: false,
      name: 'admin',
      dialogVisible: false,
      password: {
        oldpwd: '',
        newpwd: ''
      },
      ruleInline: {
        oldpwd: [{
          required: true,
          message: '原密码不能为空'
          // pattern: /[A-Za-z0-9_]{3,18}/g,
          // message: '请输入密码，3-18个字符',
          // trigger: 'blur'
        }],
        newpwd: [{
          required: true,
          pattern: /[A-Za-z0-9_]{8,16}/g,
          message: '请输入密码，8-16个字符',
          trigger: 'blur'
        }]
      }
    }
  },
  computed: {
    username () {
      let username = sessionStorage.getItem('username')
      return username || this.name
    }
  },
  methods: {
    handleCommand (command) {
      if (command === 'loginout') {
        // sessionStorage.removeItem('username')
        // this.$store.commit('logoutDeal')
        // this.$router.push('/login')
      }
      if (command === 'changepwd') {
        this.dialogVisible = true
      }
    },
    // 确认修改
    ok (name) {
      this.$refs[name].validate((valid) => {
        // console.log(valid);
        if (valid) {
          // post请求
          let userId = sessionStorage.getItem('userId')
          this.$axios.patch('users/' + userId + '/password', {
            userId: userId,
            oldPasswd: this.password.oldpwd,
            newPasswd: this.password.newpwd
          }).then(res => {
            console.log(res)
            if (res.data.rtcode === 200) {
              this.$Message.success('修改成功')
              this.password.oldpwd = ''
              this.password.newpwd = ''
            } else {
              this.$Message.error(res.data.result)
              this.password.oldpwd = ''
              this.password.newpwd = ''
            }
          }).catch(error => {
            this.$Message.error('修改密码失败' + error)
            this.password.oldpwd = ''
            this.password.newpwd = ''
          })
        } else {
          this.$Message.error('密码格式有误')
          return false
        }
      })
    },
    cancel () {
      this.pwdchange = false
    },
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
    .collapse-btn{
        float: left;
        padding: 0 21px;
        cursor: pointer;
    }
    .collapse-btn img{
        vertical-align: middle;
    }
    .collapse-btn:hover{
        background: rgb(40,52,70);
    }
    .header .logo{
        float: left;
        width:150px;
        /* text-align: center; */
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
