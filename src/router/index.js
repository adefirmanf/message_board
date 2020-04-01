import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: "Login",
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: "Register",
    component: () => import('../views/Register.vue')
  },
  {
    path: '/message/:id',
    name: "Message",
    meta: { requiresAuth: true },
    component: () => import('../views/MessageWithComment.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log(localStorage.token)
    if (!localStorage.token) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
    else {
      next()
    }
  } else {
    next()
  }
})
export default router
