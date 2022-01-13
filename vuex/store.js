import {
  createStore
} from 'vuex'

export const store = createStore({
  state() { // is like data
    return {
      postId: null
    }
  },

  mutations: {
    setPostId(state, postId) {
      state.postId = postId
    }
  }
})