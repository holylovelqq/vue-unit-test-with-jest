import { ActionTree, MutationTree, GetterTree } from 'vuex'

export interface State {
  count: number;
}

const state: State = {
  count: 0
}

const mutations: MutationTree< State > = {
  increment: state => state.count++,
  decrement: state => state.count--
}

const actions: ActionTree< State, any > = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement')
}

const getters: GetterTree< State, any> = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

export default {
  state,
  mutations,
  actions,
  getters
}
