/**
 * slot测试详解：
 * 本例在mount与shallowMount的区别篇也会讲到。主要是stubs的运用
 *
 * 当组件的slot内容在父组件内定义的时候，如果只用shallowMount的话，snapshot测试并不会包含自定义内容
 * 1. 如果只有此一个组件的话，可以直接使用mount
 * 2. 如果包含多个组件，但是存在自定义内容的只有一个组件，应该用shallowMount + stubs实现--> 本例
 */

import { shallowMount } from '@vue/test-utils'
import Test from '../Test.vue'
import slotTest from '@/components/SlotTest/SlotTest.vue'

describe('views.Test', () => {
  const options = {
    stubs: { slotTest }
  }

  describe('snapshot', () => {
    it('snapshot测试', () => {
      const wrapper = shallowMount(Test, options)
      expect(wrapper.vm.$el).toMatchSnapshot()
    })
  })
})
