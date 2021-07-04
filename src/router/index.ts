import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../components/Dashboard/Dashboard.vue') // lazy loading in vue router
  }
  // route level code-splitting
  // Dashboard route generates a separate chunk (about.[hash].js)
  // which is lazy-loaded when the route is visited.
]

const router = new VueRouter({
  routes
})

export default router
