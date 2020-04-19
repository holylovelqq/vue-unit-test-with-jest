/**
 * actions 测试
 *
 * 声明假state 代替actions内函数的参数state
 * mock函数commit：commit = jest.fn()
 */
import count, { State } from '../moduels/count'

const { actions }: any = count // 此处不指定any的话，下面调用函数会出现ts错误（目测vue3.x开始应该不会出现这种报错了）

describe('store.count.mutations', () => {
  let state: State
  let commit: any

  describe('increment', () => {
    beforeEach(() => {
      state = { count: 2 } // 本测试内并未使用到state，但实际项目中大多会使用到
      commit = jest.fn()
    })

    it('执行commit 函数，且参数为increment', () => {
      actions.increment({ commit })
      expect(commit).toBeCalledWith('increment')
    });
    it('执行commit 函数，且参数为decrement', () => {
      actions.decrement({ commit })
      expect(commit).toBeCalledWith('decrement')
    })
  })
})
