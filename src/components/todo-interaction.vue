<template>
  <div class="todo-container">
    <h1 class="todo-title">Tasks</h1>
    <div class="todo-content">
      <TodoForm @add-todo="addTodo" />
      <TodoList 
        :todos="todos"
        @edit-todo="editTodo"
        @delete-todo="deleteTodo"
      />
    </div>
  </div>
</template>

<script>
import TodoForm from './todo-form.vue'
import TodoList from './todo-list.vue'

export default {
  components: {
    TodoForm,
    TodoList
  },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    async fetchTodos() { //Declares an asynchronous method
      try {
        const response = await fetch('http://localhost:3000/todos');//Makes a GET request to backend at /todos
        //tells JavaScript to wait until it gets a response.
        //The result is saved into response.
        this.todos = await response.json();//Waits for the response body to be converted from -
        // -JSON text to a JavaScript object (an array of todos). Then assigns that array to this.todos.
      } catch (error) {
        console.error('Error:', error);
      }
    },
    async addTodo(formData) {
      try {
        console.log('formData', formData)
        const response = await fetch('http://localhost:3000/todo', {
          method: 'POST',//Sets the HTTP method to POST (to create a new resource).
           // // headers: { 'Content-Type': 'application/json' },// No Content-Type header is added here, 
            // because the browser sets it automatically when sending FormData.
          body: formData
         //Sends the actual form data — this can include text and a file.
        });
        const result = await response.json();//Waits for the backend to respond with JSON — probably the created todo with its ID and maybe image URL.
        //Assigns that to the result.
        this.todos.push(result);//Adds the new todo to the local todos array — immediately updates the UI.
      } catch (error) {
        console.error('Error:', error);
      }
    },
    async editTodo({ id, newName }) { // Uses object destructuring to pull out id and newName from the argument.
      try {
        const response = await fetch(`http://localhost:3000/todo/${id}`, { //Sends a PUT request to /todo/{id} — updating a specific todo by its ID.
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },// Sets header to indicate we're sending JSON, not FormData.
          body: JSON.stringify({ data: newName }) //Converts an object { data: newName } to a JSON string to send as the body.
        });
        
        const updatedTodo = await response.json();
        const index = this.todos.findIndex(t => t.id === id);
        //"Only update the todo if it actually exists in the array."
        if (index !== -1) {//This checks:Did findIndex() actually find the item?
          //If it did, the index will be 0, 1, 2, etc.
         //If it didn't, the index will be -1.
          this.todos[index] = updatedTodo;
          //replaces the old todo object in the array with the new one returned from the backend.
        }
      } catch (error) {
        console.error('Error editing todo:', error);
      }
    },
    async deleteTodo(id) {
      try {
        await fetch(`http://localhost:3000/todo/${id}`, {
          method: 'DELETE'
        });
        this.todos = this.todos.filter(todo => todo.id !== id);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  },
  mounted() {
    this.fetchTodos();
  }
}
</script>

<style scoped>
.todo-container {
  max-width: 800px;
  margin: 0px 172px;
  padding: 2rem;
  background: #1a1a1a;
  border-radius: 30px;
  box-shadow: 0 8px 32px rgba(76, 175, 80, 0.2);
  border: 2px solid #2d5a27;
  position: relative;
  overflow: hidden;
}

.todo-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at top left, #2d5a2722, transparent 70%),
              radial-gradient(circle at bottom right, #4a782722, transparent 70%);
  pointer-events: none;
}

.todo-title {
  color: #4CAF50;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  letter-spacing: 3px;
  position: relative;
}

.todo-content {
  background: #212121;
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid #2d5a27;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .todo-container {
    margin: 1rem;
    padding: 1rem;
  }

  .todo-title {
    font-size: 2.5rem;
  }

  .todo-content {
    padding: 1rem;
  }
}
</style>