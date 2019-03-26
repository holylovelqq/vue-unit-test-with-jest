/**
 * OverView.vue组件
 * 测试内容包括以下
 * 临时vue实例上挂载vue-router和element-ui
 * v-show
 * filter
 * axios
 * router
 * vuex
 */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import OverView from '@/views/OverView.vue'
import VueRouter from 'vue-router'
import Element from 'element-ui'

// 创建临时Vue实例，挂载组件中使用的插件
const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Element)

describe('OverView.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(OverView, { localVue,
      stubs: ['app-button']
    })
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
