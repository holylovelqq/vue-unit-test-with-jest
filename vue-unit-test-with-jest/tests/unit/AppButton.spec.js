/**
 * AppButton组件
 * 单元测试内容包括以下
 * props
 * computed
 * func
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
    // 测试内容：props
    // 自定义props传递给AppButton组件，判断组件有获取到props，然后计算属性执行，给button标签增加新的class名
    const buttonProps = {
      type: 'danger',
      size: 'lg',
      disabled: true
    }
    const wrapper = shallowMount(AppButton, {
      propsData: buttonProps
    })
    // 断言已经获取到props
    expect(wrapper.props().size).toBe('lg')
    expect(wrapper.props().type).toBe('danger')
    expect(wrapper.props().disabled).toBe(true)
    // 每个it最后都应该销毁wrapper，其他测试中会将此操作写在afterEach（）内
    wrapper.destroy()
  })

  it('computed test', () => {
    // 测试内容：computed(要注意计算属性不是函数，是变量，测试时很容易看着组件内写法按照函数测试)
    // 改变props的type，size，disable值时，cssClasses的值也会跟着改变
    const wrapper = shallowMount(AppButton)
    // 设置props 断言computed计算属性
    wrapper.setProps({ type: 'danger' })
    expect(wrapper.vm.cssClasses).toBe('app-button app-button--md app-button--danger')
    wrapper.setProps({ size: 'lg' })
    expect(wrapper.vm.cssClasses).toBe('app-button app-button--lg app-button--danger')
    wrapper.setProps({ disabled: true })
    expect(wrapper.vm.cssClasses).toBe('app-button app-button--lg app-button--disabled')

    wrapper.destroy()
  })

  it('click button onClick is clled', () => {
    // 测试内容：func测试
    // 点击按钮组件时，正确触发点击事件
    const wrapper = shallowMount(AppButton)
    // 创建mock函数
    const mockFn = jest.fn()
    // 设置 Wrapper vm 的方法并强制更新。
    wrapper.setMethods({
      onClick: mockFn
    })
    // 获取buttonDOM元素
    const button = wrapper.find('button')
    // 测试点击按钮后有没有正确触发函数
    // 点击按钮
    button.trigger('click')
    // 断言函数被触发，且被触发一次
    expect(mockFn).toBeCalled()
    expect(mockFn).toHaveBeenCalledTimes(1)

    wrapper.destroy()
  })

  it('when onClick is called $emit is called', () => {
    // 测试内容：$emit
    const wrapper = shallowMount(AppButton)
    // 测试$emmit函数被正确触发
    // mock函数替代点击按钮后$emit的函数，此处函数名相同，依然为click
    const mockFn1 = jest.fn()
    wrapper.vm.$on('click', mockFn1)
    // 测试mock函数是否被触发，触发的次数,以及参数
    wrapper.vm.onClick()
    expect(mockFn1).toBeCalled()
    expect(mockFn1).toHaveBeenCalledTimes(1)
    expect(mockFn1).toHaveBeenCalledWith('i am params')
    // 第二次点击button，依然测试mock函数是否被触发，触发的次数
    wrapper.vm.onClick()
    expect(mockFn1).toBeCalled()
    expect(mockFn1).toHaveBeenCalledTimes(2)
    expect(mockFn1).toHaveBeenCalledWith('i am params')

    wrapper.destroy()
  })
  it('matches snapshot', () => {
    // 测试内容：DOM结构snapshot
    const wrapper = shallowMount(AppButton)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
