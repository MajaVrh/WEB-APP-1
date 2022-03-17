import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Commitevi from '@/views/Commitevi'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/commit/:shaid',
    name: 'Commitevi',
    component: Commitevi
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
