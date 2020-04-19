/**
 * 测试思路：
 * （本例是以$store为例，测试时遇到$router/$route的mock也是一样的）
 * 1. 创建mount/shallowMount的挂载项options
 * 2. mock掉$store（包括其内部的state/getters/dispatch/commit）
 * 3. 创建wrapper时记得挂载options
 * 4. 测试需测试项
 */

import { shallowMount } from '@vue/test-utils'
import Count from './Count.vue'

describe('components.Count', () => {
  let wrapper: any
  let options: any
  const mockDispatch = jest.fn()

  beforeEach(() => {
    options = {
      // https://vue-test-utils.vuejs.org/zh/api/options.html#%E6%8C%82%E8%BD%BD%E9%80%89%E9%A1%B9
      propsData: {}, // 组件无props，存在的情况下传递即可
      stubs: {}, // 子组件无需存根
      mocks: {
        /**
         * mocks 中最长出现的是，$store/$route/$router
         * 用法类似，组件内访问store/route/router下的数据/方法时
         * 在此处mock一个对应的即可
         *
         * 注：我们只需要mock即可，具体的内部逻辑已经在store测试内测试过了
         *     这也符合单元测试的基本理念，只测试目标内容，以外的全部使用mock思想处理
         */

        $store: {
          state: {
            count: {
              count: 0 //mocak data，对应 this.$store.state.count.count，以下类似
            }
          },

          getters: {
            evenOrOdd: 'even' // mock data，此处因为也可以写作函数形式() => 'even'
          },

          dispatch: mockDispatch // mock fn
        }
      }

      /**
       * 可挂载项比较多，此处仅列出了常用的propsData/stubs/mocks
       * 上面的官网列出了其他选项
       * 这里要说明的是，官网的最后有一个[其他选项](https://vue-test-utils.vuejs.org/zh/api/options.html#%E5%85%B6%E5%AE%83%E9%80%89%E9%A1%B9)，这个就厉害了
       * 原理是使用了vue的extends API
       * 实际使用的时候，这里还可以挂载data/computed/methods来覆盖组件内原有的
       * 当然，也可以挂载任何其他需要的，都会以扩展的形式挂到wrapper上
       */
    }

    /**
     * 本测试用例比较简单，每次生成的wrapper都是相同的，
     * 所以可以将每个每个testcase内的wrapper删掉，集中写在此处
     *
     * 实际的项目中，不建议写在此处，因为即便有一处的options时需要变更的话，都不能集中写
     * 而且，如果出错的话，分开写更容易查错
     */

    // wrapper = shallowMount(Count, options)
  })

  describe('snapshot', () => {
    it('snapshot测试', () => {
      wrapper = shallowMount(Count, options)
      expect(wrapper.vm.$el).toMatchSnapshot();
    })
  });

  describe('methods.plus', () => {
    it('dispatch函数执行，且参数为increment', () => {
      wrapper = shallowMount(Count, options)
      wrapper.vm.plus()
      expect(mockDispatch).toBeCalledWith('increment')
    })
  });

  describe('methods.minus', () => {
    it('dispatch函数执行，且参数为decrement', () => {
      wrapper = shallowMount(Count, options)
      wrapper.vm.minus()
      expect(mockDispatch).toBeCalledWith('decrement')
    })
  });

  /**
   * computed 内的要不要测试？
   * 1. 只是获取数据，没有任何业务逻辑，没必要测试
   * 2. 最终反映到了页面上，snapshot测试就已经包含了
   */
})
