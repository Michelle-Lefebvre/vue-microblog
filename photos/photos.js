export const photos = {
  namespaced: true,

  state() {
    return {
      photos: []
    }
  },

  mutations: {
    setPhotosForCurrentAlbum(state, photos) {
      state.all = photos
    }
  },

  actions: {
    async getByAlbum(ctx, {
      album
    }) {
      const res = await window.fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`)
      const json = await res.json()
      console.log(json)
      ctx.commit('setPhotosForCurrentAlbum', json)
    }
  }
}