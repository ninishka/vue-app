<template>
  <div class="list-container">

    <ul class="todo-list">

      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        <!-- Loops through all the todos using v-for. -->
        <!-- :key="todo.id" helps Vue track which item is which (important for performance). -->
        <div class="todo-content">
          <div>
            <img v-if="todo.image_path" :src="`http://localhost:3000${todo.image_path}`"
            />
          </div>
          <span v-if="!isEditing || editedTodoId !== todo.id" class="todo-text">
            <!-- //If you're not editing, or you're editing a different todo, -->
             <!-- show the todo's name as normal text. ||-or -->
            {{ todo.name }}
          </span>
          <input
            v-else
            v-model="editedTodo"
            class="todo-input"
            @keyup.enter="saveEdit(todo.id)"
          />
          <!-- //Otherwise (if editing this todo), show an input field. -->
          <!-- //When you press Enter, it triggers saveEdit(todo.id). -->
        </div>

        <div class="todo-actions">

          <button
            v-if="!isEditing || editedTodoId !== todo.id"
            @click="startEditing(todo.id, todo.name)"
            class="action-button edit-button"
          > 
          <!-- //Show the Edit button if you're not editing, or editing a different item. -->

            Edit
          </button>

          <button
            v-else
            @click="saveEdit(todo.id)"
            class="action-button save-button"
          > 
          <!-- //If you are editing this todo, show a Save button. -->
            Save
          </button>

          <button
            @click="$emit('delete-todo', todo.id)"
            class="action-button delete-button"
          > 
          <!-- //Always show a Delete button. -->
          <!-- //Clicking it emits a delete-todo event to the parent, passing the todo's ID. -->
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
    todos: { //This component receives todos from the parent.
    //It must be an array and is required.
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isEditing: false, //True/false — whether the user is currently editing.
      editedTodo: '', //The current input value when editing a todo.
      editedTodoId: null //The ID of the todo being edited.
    }
  },
  methods: {
    startEditing(id, name) { //Triggered when Edit is clicked.
      this.isEditing = true; //Enables editing mode.
      this.editedTodo = name;//Sets the current text (editedTodo)
      // and which todo is being edited (editedTodoId).
      this.editedTodoId = id;
    },
    saveEdit(id) { //Triggered when Save is clicked or Enter is pressed.
      if (this.editedTodo.trim()) { //If the edited text isn't empty:
        this.$emit('edit-todo', { id, newName: this.editedTodo });//Emits edit-todo event to parent with the new data.
        //Exits editing mode and clears input state.
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