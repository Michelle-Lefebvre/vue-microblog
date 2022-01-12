import {
  reactive,
  computed
} from 'vue';
import {
  testPosts
} from './testPosts';

class Store {
  constructor() {
    this.state = reactive({
      posts: testPosts,
      currentTag: null
    })
  }

  setHashtag(tag) {
    this.state.currentTag = tag
  }

  incrementLike(post) {
    const thePost = this.state.posts.find(x => {
      return x.id === post.id
    })

    if (!thePost) {
      return
    }
    thePost.likes += 1
  }

  get filteredPosts() {
    if (!store.state.currentTag) {
      return store.state.posts;
    }

    return store.state.posts.filter((post) =>
      post.hashtags.includes(store.state.currentTag)
    );
  }
}

export const store = new Store()