import { shallowMount } from '@vue/test-utils'
import SlotTest from './SlotTest.vue'

describe('components.SlotTest', () => {
  describe('snapshot', () => {
    it('snapshot测试', () => {
      const wrapper = shallowMount(SlotTest)
      expect(wrapper.vm.$el).toMatchSnapshot()
    })
  })
})
