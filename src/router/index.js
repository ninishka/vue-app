import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/Home.vue'
import TodoListPage from '@/views/TodoList.vue'
import TodoDetailPage from '@/views/TodoDetail.vue'
import AuthPage from '@/views/AuthPage.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/todos',
    name: 'TodoList',
    component: TodoListPage
  },
  {
    path: '/todo/:id',
    name: 'TodoDetail',
    component: TodoDetailPage,
    props: true // This passes the route params as props to the component
  },
  {
    path: '/auth',
    name: 'Auth',
    component: AuthPage,
    props: route => ({ mode: route.query.mode || 'login' }),
    meta: { hideForAuthenticated: true }
  },
  {
    path: '/login',
    redirect: () => {
      return { path: '/auth', query: { mode: 'login' } }
    }
  },
  {
    path: '/signup',
    redirect: () => {
      return { path: '/auth', query: { mode: 'signup' } }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Navigation guards
router.beforeEach((to, from, next) => {
  // Initialize auth state from localStorage
  store.dispatch('auth/initAuth')
  
  const isAuthenticated = store.getters['auth/isAuthenticated']
  
  // Redirect authenticated users away from auth pages
  if (to.meta.hideForAuthenticated && isAuthenticated) {
    next('/todos')
    return
  }
  
  // Allow navigation
  next()
})

export default router 