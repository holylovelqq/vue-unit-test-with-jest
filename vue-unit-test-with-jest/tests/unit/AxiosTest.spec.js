/**
 * AxiosTest.vue组件
 * 测试内容包括以下
 * 自定义func
 * axios
 */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import AxiosTest from '@/components/AxiosTest.vue'
import axios from 'axios'

// mock掉整个axios模块
// 返回值在使用的时候自定义
jest.mock('axios')

// 创建临时Vue实例，挂载组件中使用的插件
const localVue = createLocalVue()
localVue.prototype.$axios = axios // 挂载axios

describe('AxiosTest.vue', () => {
  let wrapper
  beforeEach(() => {
    axios.mockClear()
    wrapper = shallowMount(AxiosTest, { localVue,
      stubs: ['app-button']
    })
  })

  afterEach(() => {
    wrapper.destroy()
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
  // 为了配合axios测试,需要在组件代码的两处增加return,参见AxiosTest组件
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
    return wrapper.vm.getData().catch(e => expect(e).toMatch('error'))
  })

  // 测试内容：snapshot->概括的测试DOM结构
  // 如果组件内存在比较特殊的需要测试的DOM结构的话，可以单独测试（详见AppButton测试文件）
  it('snapshot test', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
