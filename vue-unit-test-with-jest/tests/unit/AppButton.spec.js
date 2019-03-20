/**
 * AppButton组件
 * 单元测试内容包括以下
 * props
 * computed
 * $emit
 */
import { shallowMount } from '@vue/test-utils'
import AppButton from '@/basics/AppButton.vue'

describe('AppButton.vue', () => {
  /**
   *本测试因为计算属性和props直接关联，所以就一起写测试了，
   * 实际项目中大部分props和computed是分开进行测试的，应该尽量一个it测试一个项目
  */
  it('props and computed test', () => {
    // 测试内容：
    // 自定义props传递给AppButton组件，判断组件有获取到props，然后计算属性执行，给button标签增加新的class名
    const buttonProps = {
      type: 'danger',
      size: 'lg',
      disabled: true
    }
    const wrapper = shallowMount(AppButton, {
      propsData: buttonProps
    })
    // console.log(wrapper)
    // 断言已经获取到props（本组件的props是控制button组建的class，所以还要断言class）
    expect(wrapper.vm.size).toBe('lg')
    expect(wrapper.vm.type).toBe('danger')
    expect(wrapper.vm.disabled).toBe(true)
    // 断言computed计算属性(要注意计算属性不是函数，是变量，测试时很容易看着组件内写法按照函数测试)
    expect(wrapper.vm.cssClasses).toBe('app-button app-button--lg app-button--disabled')
    // 断言class包含props中的字符串
    const button = wrapper.find('button')
    expect(button.classes()).toContain('app-button--lg')
    expect(button.classes()).toContain('app-button--disabled')
    wrapper.destroy()
  })
  it('click button $emit is called', () => {
    // 测试内容：
    // 点击按钮组件时，正确触发点击事件
    const wrapper = shallowMount(AppButton)
    // mock函数替代点击按钮后emit的函数，此处函数名相同，依然为click
    const mockFn = jest.fn()
    wrapper.vm.$on('click', mockFn)
    // 获取buttonDOM元素
    const button = wrapper.find('button')
    // 第一次点击button，测试mock函数是否被触发，触发的次数
    button.trigger('click')
    expect(mockFn).toBeCalled()
    expect(mockFn).toHaveBeenCalledWith(1)
    // 第二次点击button，依然测试mock函数是否被触发，触发的次数
    button.trigger('click')
    expect(mockFn).toBeCalled()
    expect(mockFn).toHaveBeenCalledWith(2)
  })
})
