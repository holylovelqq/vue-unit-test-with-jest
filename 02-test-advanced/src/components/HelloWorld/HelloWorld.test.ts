/**
 * snapshot测试详解---> https://jestjs.io/docs/en/snapshot-testing
 * 目的：确保html页面元素不会被意外更改
 * 原理：初次测试的时候生成HelloWorld.test.ts.snap文件用来作为存根
 *       以后每次测试都与此存根对比，如有不同则测试不通过。
 *       人为更新html元素的时候，此存根也要更新。
 * 注意点：当html中存在v-if/v-show或类似情况时，因为最终是导致页面的变化
 *        所以应该尽量使用snapshot测试。
 *        此处内computed.isShow无测试必要
 *
 * snapshot测试简单易懂，是必须的测试，写多了就习惯了。
 *
 */

import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('snapshot测试', () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.vm.$el).toMatchSnapshot();
  }),

  it('isShow为true时的snapshot测试', () => {
    const wrapper = shallowMount(HelloWorld, {
      computed: {
        isShow:() => true
      }
    })
    expect(wrapper.vm.$el).toMatchSnapshot();
  })
})
