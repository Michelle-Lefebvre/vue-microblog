<template>
  <h4>{{ post.title }}</h4>
  <p>{{ post.content }}</p>
</template>
<script>
import { useRoute } from 'vue-router';
import { testPosts } from '../microblog/testPosts.js';

export default {
  setup() {
    const route = useRoute();
    const post = testPosts.find((x) => x.id === parseInt(route.params.id, 10));

    return {
      post
    };
  }
};
</script>
