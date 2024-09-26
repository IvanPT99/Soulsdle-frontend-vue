import { createWebHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Profile from './views/Profile.vue'
import Settings from './views/Settings.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Rankings from './views/Rankings.vue'
import Game from './components/Game/Game.vue'
import Premium from './views/Premium.vue'
import Daily from './views/Daily.vue'
import BossRush from './views/BossRush.vue'
import About from './views/About.vue'

// Router
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => Signup
  },
  {
    path: '/profile/:id',
    name: 'profile',
    component: () => Profile
  },
  {
    path: '/rankings',
    name: 'rankings',
    component: () => Rankings
  },
  {
    path: '/game',
    name: 'game',
    component: () => Game
  },
  {
    path: '/daily',
    name: 'daily',
    component: () => Daily
  },
  {
    path: '/boss-rush',
    name: 'boss-rush',
    component: () => BossRush
  },
  {
    path: '/premium',
    name: 'premium',
    component: () => Premium
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => Settings
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: () => About
  },
  {
    path: '/boss-rush',
    name: 'boss-rush',
    component: () => BossRush
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
