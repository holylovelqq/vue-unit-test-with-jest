<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
             text-color="white" active-text-color="#20a0ff" unique-opened router collapse-transition>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <Icon :type="item.icon" size="25"/>
              <span slot="title" style="margin-left: 10px">{{ item.title }}</span>
            </template>
            <el-menu-item v-for="(subItem, i) in item.subs" :key="i" :index="subItem.index" style="margin-left: 10px">
              <Icon :type='subItem.icon' size="15" />
              <span slot="title" style="margin-left: 10px">{{ subItem.title }}</span>
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <Icon :type="item.icon" size="25"/>
            <span slot="title" style="margin-left: 10px" color="white">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import eventHub from '@/assets/js/EventHub.js'
import { checkWidth } from '@/assets/js/CommonMethods.js'

export default {
  data () {
    return {
      collapse: checkWidth() === 'sm' || checkWidth() === 'md',
      items: [
        {
          icon: 'ios-gear',
          index: 'overview',
          title: '系统概览'
        },
        {
          icon: 'ios-paper',
          index: 'user',
          title: '用户管理',
          subs: [
            {
              icon: 'arrow-right-a',
              index: 'users',
              title: '普通用户'
            },
            {
              icon: 'arrow-right-a',
              index: 'vips',
              title: '超级VIP用户'
            }
          ]
        }
      ]
    }
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '')
    }
  },
  created () {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    eventHub.$on('collapse', msg => {
      this.collapse = msg
    })
  }
}
</script>

<style scoped>
  .sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
  }

  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 200px;
  }

  .sidebar > ul {
    height: 100%;
  }

</style>
