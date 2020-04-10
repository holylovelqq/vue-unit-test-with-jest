/**
 * FilterTest.vue组件
 * 测试内容包括以下
 * 临时vue实例上挂载element-ui
 * v-show（v-if v-bind的测试思路基本相同）
 * filter
 * 自定义func
 * watch
 */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import FilterTest from '@/components/FilterAddWatchTest.vue'
import Element from 'element-ui'

// 创建临时Vue实例，挂载组件中使用的插件
const localVue = createLocalVue()
localVue.use(Element)

describe('FilterTest.vue', () => {
  // A Wrapper is an object that contains a mounted component or vnode and methods to test the component or vnode
  // wrapper是一个对象，包含了已经mounted的组件或vnode，及测试该组件或 vnode 的方法。
  // wrapper.vm是组件实例，包含该实例的所有方法和属性
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(FilterTest, { localVue,
      stubs: ['app-button']
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  // 测试内容：v-show 测试，v-if v-bind的测试思路基本相同，
  // 设置变量的值，断言对应的DOM结构显示与否
  it('v-show test', () => {
    // true时显示的div
    const truediv = wrapper.find('.text.format')
    // false时显示的div
    const falsediv = wrapper.find('.text.noformat')
    // toggleShow默认值为true
    expect(truediv.isVisible()).toBe(true)
    expect(falsediv.isVisible()).toBe(false)
    // 设置为false
    wrapper.vm.toggleShow = false
    expect(truediv.isVisible()).toBe(false)
    expect(falsediv.isVisible()).toBe(true)
  })

  // 测试内容：filter----filter不能通过wrapper或者vm获取，只能通过组件获取
  // filter需要测试函数的所有可能性
  it('filter test', () => {
    // console.log(FilterTest.filters)
    expect(FilterTest.filters.formatText('12345678')).toBe('12...78')
    expect(FilterTest.filters.formatText('12345')).toBe('12345')
    expect(FilterTest.filters.formatText()).toBe('')
  })

  // 测试内容：func ->changeShow()
  // 点击按钮函数被触发(注意此处的click事件是子组件(按钮组件$emit)的事件,在父组件内不属于DOM原生事件,所以触发方式不能使用trigger,而应该使用$emit)
  it('when button is clicked changeShow will be called', () => {
    // 创建mock函数
    const mockFn2 = jest.fn()
    // 设置 Wrapper vm 的方法并强制更新。
    wrapper.setMethods({ changeShow: mockFn2 })
    // 获取对应按钮
    const axiosButton = wrapper.find('.filter app-button-stub')
    // 点击按钮->注意触发方式不能使用trigger
    axiosButton.vm.$emit('click')
    // 断言函数被触发且只触发一次
    expect(mockFn2).toBeCalled()
    expect(mockFn2).toHaveBeenCalledTimes(1)
  })

  // 测试内容：changeShow()函数
  // changeShow()函数被调用时，能正确执行
  it('called changeShow()', () => {
    // 手动将变量的值设置为false,默认值是true
    wrapper.vm.toggleShow = false
    // 执行函数
    wrapper.vm.changeShow()
    // 期望结果
    expect(wrapper.vm.toggleShow).toBe(true)
    // 再次执行函数
    wrapper.vm.changeShow()
    // 期望结果
    expect(wrapper.vm.toggleShow).toBe(false)
  })

  // 测试内容：watch
  // 更改watch的data的值，断言操作是否与预期相同
  it('watch test', () => {
    // mock掉console.log
    const spy = jest.spyOn(console,'log')
    // 手动将变量的值设置为false,默认值是true
    wrapper.vm.toggleShow = '自定义'
    // 断言函数是否执行
    expect(spy).toBeCalled()
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith('自定义')
    // 清除掉mock
    spy.mockClear()
  })

  // 测试内容：snapshot->概括的测试DOM结构
  // 如果组件内存在比较特殊的需要测试的DOM结构的话，可以单独测试（详见AppButton测试文件末尾）
  it('snapshot test', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
