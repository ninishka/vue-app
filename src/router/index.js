import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/Home.vue'
import TodoListPage from '@/views/TodoList.vue'
import TodoDetailPage from '@/views/TodoDetail.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 