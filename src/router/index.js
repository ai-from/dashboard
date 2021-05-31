import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'home',
      breadcrumbs: '/Home'
    }
  },
  {
    path: '/site',
    name: 'Site',
    component: () => import(/* webpackChunkName: "about" */ '../views/Site.vue'),
    meta: {
      layout: 'home',
      breadcrumbs: '/Site'
    }
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import(/* webpackChunkName: "about" */ '../views/Orders.vue'),
    meta: {
      layout: 'home',
      breadcrumbs: '/Orders'
    }
  },
  {
    path: '/settings',
    component: () => import(/* webpackChunkName: "about" */ '../views/Settings.vue'),
    children: [
      {
        path: '',
        name: 'Settings',
        component: () => import(/* webpackChunkName: "about" */ '../views/Settings.vue'),
        meta: {
          layout: 'settings',
          breadcrumbs: '/Settings'
        }
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import(/* webpackChunkName: "about" */ '../views/Users.vue'),
        meta: {
          layout: 'settings',
          breadcrumbs: '/Settings/Users'
        }
      },
      {
        path: 'groups',
        name: 'Groups',
        component: () => import(/* webpackChunkName: "about" */ '../views/Groups.vue'),
        meta: {
          layout: 'settings',
          breadcrumbs: '/Settings/Groups'
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
