import { shallowMount } from '@vue/test-utils'
import About from '../About.vue'

describe('views.About', () => {
  describe('snapshot', () => {
    it('snapshot测试', () => {
      const wrapper = shallowMount(About)
      expect(wrapper.vm.$el).toMatchSnapshot()
    })
  })
})
