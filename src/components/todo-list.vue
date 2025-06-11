<template>
  <div class="list-container">
    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        <div class="todo-content">
          <div>
            <img v-if="todo.image_path" :src="`http://localhost:3000${todo.image_path}`"
            />
          </div>
          <span v-if="!isEditing || editedTodoId !== todo.id" class="todo-text">
            {{ todo.name }}
          </span>
          <input 
            v-else 
            v-model="editedTodo" 
            class="todo-input"
            @keyup.enter="saveEdit(todo.id)"
          />
        </div>
        <div class="todo-actions">
          <button 
            v-if="!isEditing || editedTodoId !== todo.id" 
            @click="startEditing(todo.id, todo.name)" 
            class="action-button edit-button"
          >
            Edit
          </button>
          <button 
            v-else 
            @click="saveEdit(todo.id)"
            class="action-button save-button"
          >
            Save
          </button>
          <button 
            @click="$emit('delete-todo', todo.id)" 
            class="action-button delete-button"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
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
    saveEdit(id) {
      if (this.editedTodo.trim()) {
        this.$emit('edit-todo', { id, newName: this.editedTodo });
        this.isEditing = false;
        this.editedTodo = '';
        this.editedTodoId = null;
      }
    }
  }
}
</script>

<style scoped>
.list-container {
  background: #2a2a2a;
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid #2d5a27;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
  border-bottom: 1px solid #2d5a27;
  transition: all 0.3s ease;
  background: #2a2a2a;
}

.todo-item:hover {
  background: #333333;
  transform: translateX(5px);
}

.todo-content {
  flex: 1;
  margin-right: 1rem;
}

.todo-text {
  color: #ffffff;
  font-size: 1.1rem;
  display: block;
  padding: 0.5rem;
  font-family: 'Courier New', Courier, monospace;
}

.todo-input {
  width: 100%;
  padding: 0.8rem 1rem;
  background: #333333;
  border: 2px solid #4CAF50;
  border-radius: 25px;
  font-size: 1.1rem;
  color: #ffffff;
  font-family: 'Courier New', Courier, monospace;
}

.todo-actions {
  display: flex;
  gap: 0.8rem;
}

.action-button {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Courier New', Courier, monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.edit-button {
  background: transparent;
  color: #4CAF50;
  border: 2px solid #4CAF50;
}

.edit-button:hover {
  background: rgba(76, 175, 80, 0.1);
}

.save-button {
  background: #4CAF50;
  color: #ffffff;
}

.save-button:hover {
  background: #2d5a27;
}

.delete-button {
  background: transparent;
  color: #e57373;
  border: 2px solid #e57373;
}

.delete-button:hover {
  background: rgba(229, 115, 115, 0.1);
}

@media (max-width: 640px) {
  .todo-item {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }

  .todo-actions {
    justify-content: space-between;
  }

  .action-button {
    flex: 1;
    text-align: center;
  }
}
</style> 