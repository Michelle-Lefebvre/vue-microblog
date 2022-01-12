<template>
  <input :value="currentTag" @input="setHashTag" placeholder=" search" />

  <card v-for="post in filteredPosts" :key="post.id">
    {{ post.title }}

    <template v-slot:title>{{ post.title }}</template>

    <template v-slot:content>{{ post.content }}</template>

    <template v-slot:description>
      <controls :post="post" />
    </template>
  </card>
</template>

<script>
import { store } from './store.js';
import Card from './Card.vue';
import Controls from './Controls.vue';
import { computed } from 'vue';

export default {
  components: {
    Card,
    Controls
  },

  setup() {
    const setHashTag = ($evt) => {
      store.setHashtag($evt.target.value);
    };

    return {
      setHashTag,
      filteredPosts: computed(() => store.filteredPosts),
      currentTag: computed(() => store.state.currentTag)
    };
  }
};
</script>

<style scoped>
input {
  width: 250px;
  margin: 0 5px;
  border: 1px solid silver;
  border-radius: 8px;
}
</style>
