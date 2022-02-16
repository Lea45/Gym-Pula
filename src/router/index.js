import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router