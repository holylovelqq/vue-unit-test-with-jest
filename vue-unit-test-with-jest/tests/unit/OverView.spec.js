/**
 * OverView.vue组件
 * 测试内容包括以下
 * 伪造子组件存根，当然也可以用真的子组件做存根，个人觉得没有必要
 */
import { shallowMount } from '@vue/test-utils'
import OverView from '@/views/OverView.vue'

describe('OverView.vue', () => {
  // A Wrapper is an object that contains a mounted component or vnode and methods to test the component or vnode
  // wrapper是一个对象，包含了已经mounted的组件或vnode，及测试该组件或 vnode 的方法。
  // wrapper.vm是组件实例，包含该实例的所有方法和属性
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(OverView, { stubs: ['filter-test', 'axios-test', 'router-test', 'vuex-test'] })
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
