import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from 'pages/Login'
import Index from 'pages/Index'
import Test from 'pages/Test'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/help/version'
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
    path: '/set',
    name: 'Index',
    component: Index,
    meta: {
      title: '设置'
    },
    children: [
      {
        path: 'dguSet',
        component: () => import('views/center/dguSet/DguSet')
      }
    ]
  },
  {
    path: '/view',
    name: 'Index',
    component: Index,
    meta: {
      title: '视图'
    },
    children: [
      {
        path: 'customSet',
        component: () => import('views/center/customSet/CustomSet')
      },
      {
        path: 'wave',
        component: () => import('views/center/wave/Wave')
      }
    ]
  },
  {
    path: '/help',
    name: 'Index',
    component: Index,
    meta: {
      title: '帮助'
    },
    children: [
      {
        path: 'version',
        component: () => import('views/center/version/Version')
      }
    ]
  },
]

const router = new VueRouter({
  routes,
})

export default router