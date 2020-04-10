/**
 * Header.vue组件
 * 单元测试包括以下
 * data v-bind
 * func
 * eventHub（$emit）
 */

import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'
import eventHub from '@/assets/js/EventHub.js'
import { checkWidth } from '@/assets/js/CommonMethods.js'

describe('Header.vue', () => {
  let wrapper
  // 每个it开始之前执行
  beforeEach(() => {
    wrapper = shallowMount(Header)
  })
  // 每个it结束时执行
  afterEach(() => {
    wrapper.destroy()
  })

  // 测试内容：data v-bind
  // 断言data中变量的默认值
  it('data test', () => {
    expect(wrapper.vm.name).toBe('admin')
    expect(wrapper.vm.collapse).toBeTruthy() // 函数checkWidth()在测试环境下的值一致都是true
    wrapper.vm.name = 'holy'
    expect(wrapper.find('.el-dropdown-link').text()).toBe('holy')
  })

  // 测试内容：data中的函数checkWidth()
  it('checkWidth test', () => {
    // window.document.body.offsetWidth的值再测试环境下一直都是0，所以checkWidth的值一致都是true，无法改变
    expect(checkWidth()).toBeTruthy()
    expect(wrapper.vm.collapse).toBeTruthy()
  })

  // 测试内容：collapseChage()
  // 点击折叠侧边栏按钮，正确触发collapseChage函数
  it('click icon func is called', () => {
    const mockFn = jest.fn()
    wrapper.setMethods({
      collapseChage: mockFn
    })
    wrapper.find('.collapse-btn').trigger('click')
    // 断言函数被触发，且被触发一次
    expect(mockFn).toBeCalled()
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  // 测试内容：collapseChage（）函数执行结果测试-eventHub
  // 函数被触发后，collapse取反且eventHub的$emit触发
  it('when collapseChage() is called', () => {
    const mockFn = jest.fn()
    eventHub.$on('collapse', mockFn)
    // 第一次触发函数
    wrapper.vm.collapseChage()
    expect(wrapper.vm.collapse).toBeFalsy()
    expect(mockFn).toBeCalled()
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith(false)
    // 第二次出发函数
    wrapper.vm.collapseChage()
    expect(wrapper.vm.collapse).toBeTruthy()
    expect(mockFn).toBeCalled()
    expect(mockFn).toHaveBeenCalledTimes(2)
    expect(mockFn).toHaveBeenCalledWith(true)
  })

  // 测试内容：snapshot->概括的测试DOM结构
  // 如果组件内存在比较特殊的需要测试的DOM结构的话，可以单独测试（详见AppButton测试文件末尾）
  it('snapshot test', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
