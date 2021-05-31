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
      title: 'Dashboard | Home',
      layout: 'home',
      breadcrumbs: '/Home'
    }
  },
  {
    path: '/site',
    name: 'Site',
    component: () => import(/* webpackChunkName: "about" */ '../views/Site.vue'),
    meta: {
      title: 'Dashboard | Site',
      layout: 'home',
      breadcrumbs: '/Site'
    }
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import(/* webpackChunkName: "about" */ '../views/Orders.vue'),
    meta: {
      title: 'Dashboard | Orders',
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
          title: 'Dashboard | Settings',
          layout: 'settings',
          breadcrumbs: '/Settings'
        }
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import(/* webpackChunkName: "about" */ '../views/Users.vue'),
        meta: {
          title: 'Dashboard | Settings - Users',
          layout: 'settings',
          breadcrumbs: '/Settings/Users'
        }
      },
      {
        path: 'groups',
        name: 'Groups',
        component: () => import(/* webpackChunkName: "about" */ '../views/Groups.vue'),
        meta: {
          title: 'Dashboard | Settings - Groups',
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
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
