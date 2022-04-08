import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },

  {
    path: '/Programs',
    name: 'Programs',
    component: () => import(/* webpackChunkName: "about" */ '../views/Programs.vue')
  },

  {
    path: '/About',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/Advicess',
    name: 'Advicess',
    component: () => import(/* webpackChunkName: "about" */ '../views/Advicess.vue')
  },

  {
    path: '/Contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },

  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },

  {
    path: '/CircularH',
    name: 'CircularH',
    component: () => import(/* webpackChunkName: "about" */ '../views/CircularH.vue')
  },

  {
    path: '/StandardG',
    name: 'StandardG',
    component: () => import(/* webpackChunkName: "about" */ '../views/StandardG.vue')
  },

  {
    path: '/GluteusG',
    name: 'GluteusG',
    component: () => import(/* webpackChunkName: "about" */ '../views/GluteusG.vue')
  },

  {
    path: '/StandardH',
    name: 'StandardH',
    component: () => import(/* webpackChunkName: "about" */ '../views/StandardH.vue')
  },

  {
    path: '/GluteusH',
    name: 'GluteusH',
    component: () => import(/* webpackChunkName: "about" */ '../views/GluteusH.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router