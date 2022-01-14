<template>
  <layout>
    <template v-slot:header>Header</template>
    <template v-slot:sidebar>
      <album v-for="album in albums" :key="album.id" :album="album">{{
        album.title
      }}</album>
    </template>
    <template v-slot:content>
      <img
        v-for="photo in photos"
        :key="photo.id"
        :src="photo.thumbnailUrl"
        :alt="photo.title"
      />
    </template>
  </layout>
</template>

<script>
import { onMounted, computed } from '@vue/runtime-core';
import Layout from './Layout.vue';
import Album from './Album.vue';
import { useStore } from 'vuex';

export default {
  components: {
    Layout,
    Album
  },

  setup() {
    const store = useStore();

    const albums = computed(() => {
      return store.state.albums.all;
    });

    onMounted(() => {
      store.dispatch('albums/fetch');
    });

    const photos = computed(() => {
      return store.state.photos.all;
    });

    return {
      albums,
      photos
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
</style>
