<template>
  <img
    v-for="photo in photos"
    :key="photo.id"
    :src="photo.thumbnailUrl"
    :alt="photo.title"
  />
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const photos = computed(() => {
      return store.state.photos.all;
    });

    return {
      photos
    };
  }
};
</script>
