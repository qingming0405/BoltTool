import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from 'pages/Login'
import Index from 'pages/Index'
import Test from 'pages/Test'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  }
]

const router = new VueRouter({
  routes,
})

export default router