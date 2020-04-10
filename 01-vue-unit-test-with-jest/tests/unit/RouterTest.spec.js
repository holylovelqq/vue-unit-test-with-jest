/**
 * RouterTest.vue组件
 * 测试内容包括以下
 * 临时vue实例上挂载vue-router
 * 自定义func
 * router
 */
import { shallowMount } from '@vue/test-utils'
import RouterTest from '@/components/RouterTest.vue'

// vue-router测试
// 不建议直接在localVue上挂载vue-router
// 使用mock的$route和$router更加灵活，方便测试
const $route = {
  path: '/some'
  // ...其他属性
}
const mockPush = jest.fn()
const $router = {
  push: mockPush
  // ... 其他属性
}

describe('RouterTest.vue', () => {
  // A Wrapper is an object that contains a mounted component or vnode and methods to test the component or vnode
  // wrapper是一个对象，包含了已经mounted的组件或vnode，及测试该组件或 vnode 的方法。
  // wrapper.vm是组件实例，包含该实例的所有方法和属性
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(RouterTest, {
      stubs: ['app-button'],
      mocks: {
        $route,
        $router
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  // 测试内容：func ->goVIPs()
  // 点击按钮函数被触发(注意此处的click事件是子组件(按钮组件$emit)的事件,在父组件内不属于DOM原生事件,所以触发方式不能使用trigger,而应该使用$emit)
  it('when button is clicked goVIPs will be called', () => {
    // 创建mock函数
    const mockFn1 = jest.fn()
    // 设置 Wrapper vm 的方法并强制更新。
    wrapper.setMethods({ goVIPs: mockFn1 })
    // 获取对应按钮
    const routerButton = wrapper.find('.router app-button-stub')
    // 点击按钮->注意触发方式不能使用trigger
    routerButton.vm.$emit('click')
    // 断言函数被触发且只触发一次
    expect(mockFn1).toBeCalled()
    expect(mockFn1).toHaveBeenCalledTimes(1)
  })

  // 测试内容：goVIPs()被调用->触发mock的push函数
  it('goVIPs() is called', () => {
    // 执行函数
    wrapper.vm.goVIPs()
    // 期望结果
    expect(mockPush).toBeCalled()
  })

  // 测试内容：snapshot->概括的测试DOM结构
  // 如果组件内存在比较特殊的需要测试的DOM结构的话，可以单独测试（详见AppButton测试文件末尾）
  it('snapshot test', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
