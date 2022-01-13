<template>
  <button v-for="post in posts" :key="post.id" @click="click(post)">
    {{ post.title }}
  </button>
  {{ postId }}
</template>

<script>
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const posts = [
      { id: 1, title: 'Post #1' },
      { id: 2, title: 'Post #2' }
    ];

    const click = (post) => {
      store.commit('setPostId', post.id);
    };
    return {
      postId: computer(() => store.state.postId),
      posts,
      click
    };
  }
};
</script>

<style scoped></style>
