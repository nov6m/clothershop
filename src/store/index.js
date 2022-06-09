import { createStore } from 'vuex'

export default createStore({
  state: {
    isActiveLink: ''
  },
  getters: {
    getIsActiveLink: (state) => {
      return state.isActiveLink
    }
  },
  mutations: {
    CHANGEISACTIVE: (state, curPage) => {
      state.isActiveLink = curPage
    }
  },
  actions: {
  },
  modules: {
  }
})
