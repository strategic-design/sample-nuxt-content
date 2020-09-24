export const state = () => ({
  keyword: null,
  list: [],
  searchList: []
})

export const actions = {
  search ({ commit, state, $content }, keyword) {
    // todo
    console.warn($content)
  }
}

export const mutations = {
  setList (state, list) {
    state.list = list
  },
  setSearchList (state, list) {
    state.searchList = list
  }
}

export const getters = {
  list: (state) => { return state.list },
  searchList: (state) => { return state.searchLisst }
}
