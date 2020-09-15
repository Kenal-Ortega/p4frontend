import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Page2 from '../views/Page2.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
    path: '/login',
    name: 'Login',
    component: Login,
      
  },
  {
    path: '/page2',
    name: 'Page2',
    component: Page2
  },
]

const router = new VueRouter({
  routes
})

export default router
