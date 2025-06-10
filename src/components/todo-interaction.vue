<template>
  <div class="todo-container">
    <form @submit.prevent="addTodo" class="todo-form">
      <input v-model="newTodo" placeholder="Add Todo" class="todo-input" />
      <button type="submit" class="todo-button">Submit</button>
    </form>
    <ul class="todo-list">
      <li v-for="(todo) in todos" :key="todo.id" class="todo-item">
        <span v-if="!isEditing || editedTodoId !== todo.id">{{ todo.name }}</span>
        <input v-else v-model="editedTodo" />
        <button @click="startEditing(todo.id, todo.name)">Edit</button>
        <button v-if="isEditing && editedTodoId === todo.id" @click="editTodo(todo.id)">Save</button>
        <button @click="deleteTodo(todo.id)" class="delete-button">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      todos: [],
      isEditing: false,
      editedTodo: '',
      editedTodoId: null
    }
  },
  methods: {
    startEditing(id, name) {
      this.isEditing = true;
      this.editedTodo = name;
      this.editedTodoId = id;
    },
    async fetchTodos() {
      try {
        const response = await fetch('http://localhost:3000/todos');
        this.todos = await response.json();
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    },

    async addTodo() {
      try {
        const response = await fetch('http://localhost:3000/todos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ data: this.newTodo })
        });
        const newTodo = await response.json();
        this.todos.push(newTodo);
        this.newTodo = '';
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    },

    async deleteTodo(id) {
      try {
        await fetch(`http://localhost:3000/todos/${id}`, {
          method: 'DELETE'
        });
        this.todos = this.todos.filter(todo => todo.id !== id);
      } catch (error) {
        console.error('Error deleting todo:', error);
      }
    },

    async editTodo(id) {
      try {
        console.log('here0')

        await fetch(`http://localhost:3000/todos/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ data: this.editedTodo })
        });

        console.log('here1')

        // Update the local todo list
        const todoIndex = this.todos.findIndex(todo => todo.id === id);
        if (todoIndex !== -1) {
          this.todos[todoIndex].name = this.editedTodo;
        }

        console.log('here2')

        // Reset editing state
        this.isEditing = false;
        this.editedTodo = '';
        this.editedTodoId = null;
        console.log('here3')
      } catch (error) {
        console.error('Error editing todo:', error);
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
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.todo-form {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.todo-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
}

.todo-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.todo-button:hover {
  background-color: #0056b3;
}

.todo-list {
  list-style: none;
  padding: 0;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.delete-button {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.delete-button:hover {
  background-color: #c82333;
}
</style>