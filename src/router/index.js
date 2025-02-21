import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ItineraryView from '../views/ItineraryView.vue'
import viewItineraryView from '../views/viewItineraryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/itinerary',
      name: 'itinerary',
      component: ItineraryView,
    },
    {
      path: '/itinerary/view',
      name: 'itineraryview',
      component: viewItineraryView,
    }
  ],
})

export default router
