/**
 * SideBar.vue组件
 * 测试内容包括以下
 * $route
 */
import { shallowMount } from '@vue/test-utils'
import Sidebar from '@/components/Sidebar.vue'

describe('Sidebar.vue', () => {
  // let wrapper
  // // 每个it开始之前执行
  // beforeEach(() => {
  //   wrapper = shallowMount(Sidebar)
  // })
  // // 每个it结束时执行
  // afterEach(() => {
  //   wrapper.destroy()
  // })

  // 测试内容：snapshot->概括的测试DOM结构
  // 如果组件内存在比较特殊的需要测试的DOM结构的话，可以单独测试（详见AppButton测试文件末尾）
  it('snapshot test', () => {
    const wrapper = shallowMount(Sidebar)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
