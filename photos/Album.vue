<template>
  <button @click="click">{{ album.title }}</button>
</template>

<script>
import { useStore } from 'vuex';
export default {
  props: {
    album: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const store = useStore();

    const click = () => {
      store.dispatch('photos/getByAlbum', { album: props.album });
    };

    return {
      click
    };
  }
};
</script>

<style scoped>
button {
  background: darkcyan;
  color: white;
  border: none;
  padding: 10px;
  margin: 0 10px 5px 0;
  font-size: 18px;
  border-radius: 5px;
  transition: 0.1s;
  width: 100%;
  display: block;
  text-align: center;
  text-decoration: none;
  font-family: Arial;
}
button:hover {
  filter: brightness(120%);
  cursor: pointer;
  transition: 0.1s;
}
</style>
