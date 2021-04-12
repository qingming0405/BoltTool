import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from 'pages/Login'
import Index from 'pages/Index'
import Test from 'pages/Test'


/**
 * 重写路由的push方法，否则访问相同路由会报错
 */
 const routerPush = VueRouter.prototype.push
 VueRouter.prototype.push = function push(location) {
   return routerPush.call(this, location).catch(error=> error)
 }

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
  // 设置
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
      },
      {
        path: 'dguState',
        component: () => import('views/center/dguState/DguState')
      },
      {
        path: 'boltSet',
        component: () => import('views/center/boltSet/BoltSet')
      }
    ]
  },
  // 视图
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
  // 帮助
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
      },
      {
        path: 'contact',
        component: () => import('views/center/contact/Contact')
      }
    ]
  },
]

const router = new VueRouter({
  routes,
})

export default router