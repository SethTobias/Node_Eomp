import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import aboutView from '../views/AboutView'
import ContactUsView from '../views/ContactUsView.vue'
import AdminView from '../views/AdminView.vue'
import CarsView from '../views/CarsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: aboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactUsView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/cars',
    name: 'cars',
    component: CarsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
