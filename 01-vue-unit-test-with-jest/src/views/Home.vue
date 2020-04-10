<template>
  <div class="wrapper">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <div class="content" :class="{'content--collapse':collapse}">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import AppHeader from '@/components/Header.vue'
import AppSidebar from '@/components/Sidebar.vue'
import eventHub from '@/assets/js/EventHub.js'
import { checkWidth } from '@/assets/js/CommonMethods.js'
export default {
  name: 'layout',
  components: {
    AppHeader,
    AppSidebar
  },
  data () {
    return {
      collapse: checkWidth()
    }
  },
  methods: {},
  created () {
    eventHub.$on('collapse', msg => {
      this.collapse = msg
    })
  },
  mounted () {},
  watch: {},
  computed: {}
}
</script>
<style>
.content {
  position: absolute;
  left: 230px;
  right: 0;
  top: 70px;
  bottom: 0;
  width: auto;
  padding: 32px;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
}
.content--collapse {
  left: 65px;
}

@media screen and (max-width: 1025px) {
  .content {
    left: 65px;
  }
}

@media screen and (max-width: 769px) {
  .content {
    padding: 12px 12px 30px;
  }
}
</style>
