import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Checkout from  '../components/checkout/Checkout.vue'
import Modal from '../components/checkout/Modal.vue'

const routes = [
  { path: '/', name: 'Home', component: Home},
  { path: '/cart', name: 'Cart', component: Cart},
  { path: '/checkout', name: 'Checkout', component: Checkout},
  { path: '/modal', name: 'Modal', component: Modal},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
