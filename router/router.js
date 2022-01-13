import {
  createWebHistory,
  createRouter
} from 'vue-router';

import Hello from './Hello.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/hello',
    component: Hello
  }]
});

export {
  router
}