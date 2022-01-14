<template>
  <layout>
    <template v-slot:header>Header</template>
    <template v-slot:sidebar>sidebar</template>
    <template v-slot:content>content</template>
  </layout>
</template>

<script>
import Layout from './Layout.vue';

export default {
  components: {
    Layout
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
