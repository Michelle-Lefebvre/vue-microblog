import {
  reactive
} from 'vue';

class Store {
  constructor() {
    this.state = reactive({
      posts: [{
        id: 1,
        title: 'Title',
        content: 'Learning Vue.js',
        likes: 10,
        hashtages: [
          'vue',
          'javascript',
          'composition api'
        ]
      }]
    })
  }
}

export const store = new Store()