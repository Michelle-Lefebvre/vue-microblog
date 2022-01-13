<template>
  MML App
  {{ store.state.count }}
</template>

<script>
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    console.log(store);
    return {
      store
    };
  }
};
</script>

<style scoped></style>
