/**
 * OverView.vue组件
 * 测试内容包括以下
 * 临时vue实例上挂载vue-router和element-ui
 * v-show（v-if v-bind的测试思路基本相同）
 * filter
 * func
 * axios
 * router
 * vuex
 */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import OverView from '@/views/OverView.vue'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import axios from 'axios'

// mock掉整个axios模块
// 返回值在使用的时候自定义
jest.mock('axios')

// 创建临时Vue实例，挂载组件中使用的插件
const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Element)
localVue.prototype.$axios = axios // 挂载axios

describe('OverView.vue', () => {
  // A Wrapper is an object that contains a mounted component or vnode and methods to test the component or vnode
  // wrapper是一个对象，包含了已经mounted的组件或vnode，及测试该组件或 vnode 的方法。
  // wrapper.vm是组件实例，包含该实例的所有方法和属性
  let wrapper
  beforeEach(() => {
    axios.mockClear()
    wrapper = shallowMount(OverView, { localVue,
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
    // console.log(OverView.filters)
    expect(OverView.filters.formatText('12345678')).toBe('12...78')
    expect(OverView.filters.formatText('12345')).toBe('12345')
    expect(OverView.filters.formatText()).toBe('')
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

  // 测试内容：func ->getData()
  // 点击按钮函数被触发(注意此处的click事件是子组件(按钮组件$emit)的事件,在父组件内不属于DOM原生事件,所以触发方式不能使用trigger,而应该使用$emit)
  it('when button is clicked getData will be called', () => {
    // 创建mock函数
    const mockFn = jest.fn()
    // 设置 Wrapper vm 的方法并强制更新。
    wrapper.setMethods({ getData: mockFn })
    // 获取对应按钮
    const axiosButton = wrapper.find('.axios app-button-stub')
    // 点击按钮->注意触发方式不能使用trigger
    axiosButton.vm.$emit('click')
    // 断言函数被触发且只触发一次
    expect(mockFn).toBeCalled()
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  // 测试内容：axios->getData()函数
  // 为了配合axios测试,需要在组件代码的两处增加return,参见OverView组件
  it('axios test', () => {
    // 此处只是使用了get,post/patch/delete/...与get相同
    // 自定义get的返回值
    const mockData = { data: { name: 'Bob' } }
    axios.get.mockResolvedValue(mockData)
    return wrapper.vm.getData().then(result => {
      expect(result).toEqual(mockData)
      expect(wrapper.vm.usersInfo).toEqual(mockData.data)
    })
  })

  // 测试内容：axios->getData()函数请求rejeced的情况
  it('axios test', () => {
    // 自定义get被拒绝时返回值
    axios.get.mockRejectedValue('error')
    // 因为是伪造的axios请求，所以默认是会被拒绝的
    return wrapper.vm.getData().catch(e => expect(e).toMatch('error'))
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

  // 测试内容：goVIPs()被调用->router变化
  //
  it('goVIPs() is called', () => {
    // 第一次执行函数
    wrapper.vm.goVIPs()
    // 期望结果
    expect(wrapper.$route.path).toBe('/vips')
    // 手动更改值
    wrapper.$route.path = '/users'
    // 再次执行函数
    wrapper.vm.goVIPs()
    // 期望结果
    expect(wrapper.$route.path).toBe('/vips')
  })

  // 测试内容：snapshot->概括的测试DOM结构
  // 如果组件内存在比较特殊的需要测试的DOM结构的话，可以单独测试（详见AppButton测试文件末尾）
  it('snapshot test', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
