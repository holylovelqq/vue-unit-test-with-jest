import { shallowMount } from '@vue/test-utils'
import Home from '../Home.vue'

describe('views.Home', () => {
  describe('snapshot', () => {
    it('snapshot测试', () => {
      const wrapper = shallowMount(Home)
      expect(wrapper.vm.$el).toMatchSnapshot()
    })
  })
})
