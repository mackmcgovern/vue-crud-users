import { createRouter, createWebHistory } from 'vue-router'

import UsersList from './pages/UserList.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/users' },
    { path: '/users', component: UsersList },
    { path: '/edit', component: null },
  ],
})

export default router
