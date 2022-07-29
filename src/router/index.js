import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },

  {
    path: '/property',
    name: 'Property',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Property.vue'),
  },

  {
    path: '/blog',
    name: 'Blog',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue'),
  },

  {
    path: '/contacts',
    name: 'Contacts',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacts.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
