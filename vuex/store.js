import {
  createStore
} from 'vuex'

export const store = createStore({
  state() { // is like data
    return {
      count: 0
    }
  }
})