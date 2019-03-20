import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/OverView.vue')
        },
        {
          path: '/overview',
          name: 'OverView',
          component: () => import('@/views/OverView.vue')
        },
        {
          path: '/users',
          name: 'users',
          component: () => import('@/views/Users.vue')
        },
        {
          path: '/vips',
          name: 'vips',
          component: () => import('@/views/VIPs.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    }

  ]
})
