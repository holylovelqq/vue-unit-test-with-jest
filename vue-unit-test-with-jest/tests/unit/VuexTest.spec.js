/**
 * VuexTest.vue组件
 * 测试内容包括以下
 * 临时vue实例上挂载element-ui
 * func
 * vuex
 */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import VuexTest from '@/components/VuexTest.vue'
import Element from 'element-ui'

// 创建临时Vue实例，挂载组件中使用的插件
const localVue = createLocalVue()
localVue.use(Element)

describe('VuexTest.vue', () => {
  // A Wrapper is an object that contains a mounted component or vnode and methods to test the component or vnode
  // wrapper是一个对象，包含了已经mounted的组件或vnode，及测试该组件或 vnode 的方法。
  // wrapper.vm是组件实例，包含该实例的所有方法和属性
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(VuexTest, { localVue,
      stubs: ['app-button']
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  // 测试内容：snapshot->概括的测试DOM结构
  // 如果组件内存在比较特殊的需要测试的DOM结构的话，可以单独测试（详见AppButton测试文件末尾）
  it('snapshot test', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
