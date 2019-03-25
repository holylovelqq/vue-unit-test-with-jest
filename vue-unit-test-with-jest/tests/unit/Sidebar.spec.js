/**
 * SideBar.vue组件
 * 测试内容包括以下
 * func
 * element-ui插件的使用
 * $route
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
// 伪造$route
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
    // const mockFn = jest.fn()
    // checkWidth = mockFn
    expect(wrapper.vm.collapse).toBeTruthy()
    // expect(wrapper.vm.collapse).toBeFalsy()
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
