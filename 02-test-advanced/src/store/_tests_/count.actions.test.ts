import count, { State } from '../moduels/count'

const { actions }: any = count // 此处不指定any的话，下面调用函数会出现ts错误

describe('store.count.mutations', () => {
  let state: State
  let commit: any

  describe('increment', () => {
    beforeEach(() => {
      state = { count: 2 }
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
