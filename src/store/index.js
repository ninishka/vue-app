import { createStore } from 'vuex'
import todos from './modules/todos'

export default createStore({
  modules: {
    todos
  },
  strict: process.env.NODE_ENV !== 'production'
}) 