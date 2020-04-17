/**
 * axios测试的详解---jest mock 方法（不使用nock）
 * 原理：
 *  1. localVue挂载axios
 *  2. mock返回值测试正常情况
 *  3. mock出错，测试出错的情况
 * 缺点：
 *  1. 请求出错时，不能mock错误码
 *  2. 每个文件都要引入axios和localVue，并且要根据不同情况mock返回值
 *  3. 如果吧mock axios写在其他文件内，每个使用的文件引入使用的话
 *     就无法根据情况mock返回值-->所有的get返回相同值
 *
 * 注：省略snapshot测试
 */

import { shallowMount, createLocalVue } from '@vue/test-utils'
import Table from './Table.vue'
import axios from 'axios'

jest.mock('axios')

const localVue = createLocalVue()
localVue.prototype.$axios = axios

describe('components.Table', () => {
  let wrapper: any

  beforeEach(() => {
    (axios as any).mockClear()
  })

  // axios测试
  describe('methods.fetchData', () => {
    it('正常获取数据', async () => {
      // mock 返回值
      (axios as any).get.mockResolvedValue({ data: { mockData: [1,2,3] }});
      wrapper = shallowMount(Table,{ localVue });
      await wrapper.vm.fetchData()
      // 验证正常获取nock的模拟数据
      expect(wrapper.vm.desserts).toEqual([1,2,3])
      // 验证finally内操作执行
      expect(wrapper.vm.finallyData).toBe('finished')
    })


    it('请求出错时error赋值为FETCH_ERROR', async () => {
      // mock 请求出错
      (axios as any).get.mockRejectedValue(new Error('reject'));
      wrapper = shallowMount(Table)
      await wrapper.vm.fetchData()
      // 验证error的值
      expect(wrapper.vm.error).toBe('FETCH_ERROR')
      // 验证finally内操作执行
      expect(wrapper.vm.finallyData).toBe('finished')
    })
  })
})
