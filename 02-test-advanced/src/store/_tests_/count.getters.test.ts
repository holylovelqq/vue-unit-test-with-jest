import count, { State } from '../moduels/count'

const { getters } = count

describe('store.count.getters', () => {
  let state: State

  describe('evenOrOdd', () => {
    it('偶数时返回even', () => {
      state = { count: 2 }
      const result = getters.evenOrOdd(state, null, null, null)
      expect(result).toBe('even')
    });

    it('奇数时返回odd', () => {
      state = { count: 3 }
      const result = getters.evenOrOdd(state, null, null, null)
      expect(result).toBe('odd')
    })
  })
})
