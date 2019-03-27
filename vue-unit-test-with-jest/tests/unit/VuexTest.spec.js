/**
 * VuexTest.vue组件
 * 测试内容包括以下
 * 临时vue实例上挂载element-ui
 * func
 * vuex
 */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import VuexTest from '@/components/VuexTest.vue'
import Vuex from 'vuex'

// 创建临时Vue实例，挂载组件中使用的插件
const localVue = createLocalVue()
localVue.use(Vuex)

describe('VuexTest.vue', () => {
  // A Wrapper is an object that contains a mounted component or vnode and methods to test the component or vnode
  // wrapper是一个对象，包含了已经mounted的组件或vnode，及测试该组件或 vnode 的方法。
  // wrapper.vm是组件实例，包含该实例的所有方法和属性
  let wrapper
  let actions
  let state
  let getters
  let store
  beforeEach(() => {
  // 伪造actions state getters 。mutation在本组件中未直接使用，故未伪造，
    actions = {
      increment: jest.fn(),
      decrement: jest.fn()
    }
    state = {
      count: 0
    }
    getters = {
      evenOrOdd: () => 'gettersVal' // 伪造的越简单越好
    }
    // 伪造store
    store = new Vuex.Store({
      state,
      actions,
      getters
    })
    // 挂载store
    wrapper = shallowMount(VuexTest, {
      localVue,
      store,
      stubs: ['app-button']
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  // 测试内容：state
  // 只需测试伪造的state值是否存在于dom中
  it('getters test', () => {
    const text = wrapper.find('.text')
    expect(text.text()).toContain(state.count)
  })

  // 测试内容：actions
  // 点击按钮测试伪造的函数是否被调用
  it('actions test', () => {
    const buttonAdd = wrapper.find('.add')
    const buttonMinus = wrapper.find('.minus')
    buttonAdd.vm.$emit('click')
    expect(actions.increment).toHaveBeenCalled()
    expect(actions.increment).toHaveBeenCalledTimes(1)
    buttonMinus.vm.$emit('click')
    expect(actions.decrement).toHaveBeenCalled()
    expect(actions.decrement).toHaveBeenCalledTimes(1)
  })

  // 测试内容：getters
  // 只需测试伪造的getters值是否存在于dom中
  it('getters test', () => {
    const text = wrapper.find('.text')
    expect(text.text()).toContain(getters.evenOrOdd())
  })

  // 测试内容：snapshot->概括的测试DOM结构
  // 如果组件内存在比较特殊的需要测试的DOM结构的话，可以单独测试（详见AppButton测试文件末尾）
  it('snapshot test', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
