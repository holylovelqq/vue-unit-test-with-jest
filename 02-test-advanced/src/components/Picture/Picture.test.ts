/**
 * 异步测试详解：
 * 1. 定时器：jest.useFakeTimers()->jest.runAllTimers(); 参考 https://jestjs.io/docs/en/jest-object#jestusefaketimers
 * 2. axios请求：参见axios测试详解
 * 3. 其他情况：以上两种情况以外或者以上处理都不能解决的话，建议使用插件flush-promises：https://github.com/kentor/flush-promises
 *
 * 参考：https://vue-test-utils.vuejs.org/zh/guides/#%E6%B5%8B%E8%AF%95%E5%BC%82%E6%AD%A5%E8%A1%8C%E4%B8%BA
 *
 */

import { shallowMount } from '@vue/test-utils'
import Picture from './Picture.vue'

describe('componets.Picture', () => {
  let wrapper: any
  jest.useFakeTimers();

  beforeEach(() => {
    wrapper = shallowMount(Picture)
  })

  describe('snapshot', () => {
    it('图片隐藏时snapshot测试', () => {
      expect(wrapper.vm.$el).toMatchSnapshot();
    })

    it('图片显示时snapshot测试', () => {
      wrapper.setData({ isShow: true })
      expect(wrapper.vm.$el).toMatchSnapshot();
    })
  })

  describe('methods.changeShowLazy', () => {
    it('isShow 值改变', () => {
      wrapper.vm.changeShowLazy()
      jest.runAllTimers();
      expect(wrapper.vm.isShow).toBeTruthy()
    })
  })
})
