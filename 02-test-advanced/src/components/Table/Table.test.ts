/**
 * axios测试的详解---使用nock进行测试（推荐）
 */

import { shallowMount } from '@vue/test-utils'
import Table from './Table.vue'
import nock from 'nock'; // https://github.com/nock/nock#how-does-it-work

describe('components.Table', () => {
  let wrapper: any

  // axios测试
  describe('methods.fetchData', () => {
    // 项目指定的baseUrl，一般测试时都是http://localhost
    const baseUrl ='http://localhost'

    afterEach(() => {
      nock.cleanAll();
    });

    it('正常获取数据', async () => {
      nock(baseUrl)
      .get('/mockData.json')
      .reply(200, {mockData:[]})
      .persist();

      wrapper = shallowMount(Table);
      await wrapper.vm.fetchData()
      // 验证正常获取nock的模拟数据
      expect(wrapper.vm.desserts).toEqual([])
      // 验证finally内操作执行
      expect(wrapper.vm.finallyData).toBe('finished')
    })


    it('请求出错时error赋值为FETCH_ERROR', async () => {
      nock(baseUrl)
      .get('/mockData.json')
      .reply(404, {})
      .persist();

      wrapper = shallowMount(Table)
      await wrapper.vm.fetchData()
      // 验证error的值
      expect(wrapper.vm.error).toBe('FETCH_ERROR')
      // 验证finally内操作执行
      expect(wrapper.vm.finallyData).toBe('finished')
    })
  })

  // 只要存在.vue文件，就必须进行snapshot测试
  describe('snapshot', () => {
    it('snapshot测试', () => {
      wrapper = shallowMount(Table)
      expect(wrapper.vm.$el).toMatchSnapshot();
    })
  })
})
