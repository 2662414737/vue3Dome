import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/a',
    name: 'a',
    component: () => import(/* webpackChunkName: "about" */ '../views/a.vue')
  },
  {
    path: '/b',
    name: 'b',
    component: () => import(/* webpackChunkName: "about" */ '../views/b.vue')
  },
  {
    path: '/c',
    name: 'c',
    component: () => import(/* webpackChunkName: "about" */ '../views/c.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
