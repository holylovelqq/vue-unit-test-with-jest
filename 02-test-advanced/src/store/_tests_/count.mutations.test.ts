/**
 * mutations 测试
 *
 * 声明假state 代替mutations内函数的参数state
 */
import count, { State } from '../moduels/count'

const { mutations } = count

describe('store.count.mutations', () => {
  let state: State

  describe('increment', () => {
    beforeEach(() => {
      state = { count: 2 }
    })

    it('count值自增', () => {
      mutations.increment(state)
      expect(state.count).toBe(3)
    });

    it('count值自减', () => {
      mutations.decrement(state)
      expect(state.count).toBe(1)
    })
  })
})
