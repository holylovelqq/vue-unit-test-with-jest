/**
 * store.js
 * 测试内容包括以下
 * 测试思路：mutations/getters/actions 分别测试，测试其中一个的时候，其他依赖伪造mock
 * 本质还是测试方法（官网列出了两种测试方法，我们选择简单易懂便于测试的）
 */
import { mutations, getters, actions } from '@/store.js'

describe('store.js', () => {
  // 测试内容：mutations
  // 伪造（mock）state 测试mutations下的方法
  it('mutations test', () => {
    const state = {
      count: 0
    }
    mutations.increment(state)
    expect(state.count).toBe(1)
    mutations.decrement(state)
    expect(state.count).toBe(0)
  })

  // 测试内容：getters
  // 伪造（mock）state 测试evenOrOdd的值
  it('getters test even', () => {
    const state = {
      count: 0
    }
    expect(getters.evenOrOdd(state)).toBe('even')
  })

  // 测试内容：getters
  // 伪造（mock）state 测试evenOrOdd的值
  it('getters test odd', () => {
    const state = {
      count: 1
    }
    expect(getters.evenOrOdd(state)).toBe('odd')
  })

  // 测试内容：actions 比前两个测试要稍微复杂
  // 伪造（mock）commit 测试mutations下的方法
  it('actions test', () => {
    // 伪造commit
    const commit = jest.fn()
    // increment
    actions.increment({ commit })
    expect(commit).toBeCalled()
    expect(commit).toBeCalledWith('increment')
    // decrement
    actions.decrement({ commit })
    expect(commit).toBeCalled()
    expect(commit).toBeCalledWith('decrement')
  })
})
