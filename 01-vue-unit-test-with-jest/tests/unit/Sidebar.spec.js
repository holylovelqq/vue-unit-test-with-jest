/**
 * SideBar.vue组件
 * 测试内容包括以下
 * func
 * element-ui插件的使用
 * $route（伪造$route便于测试计算属性）
 * computed
 * DOM
 */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Element from 'element-ui'
import Sidebar from '@/components/Sidebar.vue'
import eventHub from '@/assets/js/EventHub.js'
import { checkWidth } from '@/assets/js/CommonMethods.js'

// 创建临时Vue实例，挂载组件中使用的插件
const localVue = createLocalVue()
localVue.use(Element)
// 伪造$route,用于测试计算属性
const $route = {
  path: '/vips'
}

describe('Sidebar.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Sidebar, { localVue, mocks: { $route } })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  // 测试内容：data中的函数checkWidth()
  it('checkWidth test', () => {
    // window.document.body.offsetWidth的值再测试环境下一直都是0，所以checkWidth的值一致都是true，无法改变
    expect(checkWidth()).toBeTruthy()
    expect(wrapper.vm.collapse).toBeTruthy()
  })

  // 测试内容：computed计算属性onRoutes
  it('computed', () => {
    expect(wrapper.vm.onRoutes).toBe('vips')
  })

  // 测试内容：eventHub $on
  it('eventHub $on test', () => {
    wrapper.vm.collapse = false
    eventHub.$emit('collapse', true)
    expect(wrapper.vm.collapse).toBeTruthy()
  })

  // 测试内容：snapshot->概括的测试DOM结构
  // 如果组件内存在比较特殊的需要测试的DOM结构的话，可以单独测试（详见AppButton测试文件末尾）
  it('snapshot test', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
