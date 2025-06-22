const API_BASE_URL = 'http://localhost:3000'

export async function fetchTodos() {
  try {
    const response = await fetch(`${API_BASE_URL}/todos`)
    if (!response.ok) {
      throw new Error('Failed to fetch todos')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching todos:', error)
    throw error
  }
}

export async function fetchTodoById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/todos/${id}`)
    if (!response.ok) {
      throw new Error(`Todo not found (${response.status})`)
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching todo:', error)
    throw error
  }
}

export async function createTodo(formData) {
  try {
    const response = await fetch(`${API_BASE_URL}/todo`, {
      method: 'POST',
      body: formData
    })
    if (!response.ok) {
      throw new Error('Failed to create todo')
    }
    return await response.json()
  } catch (error) {
    console.error('Error creating todo:', error)
    throw error
  }
}

export async function updateTodo(id, data) {
  try {
    const response = await fetch(`${API_BASE_URL}/todo/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data })
    })
    if (!response.ok) {
      throw new Error('Failed to update todo')
    }
    return await response.json()
  } catch (error) {
    console.error('Error updating todo:', error)
    throw error
  }
}

export async function deleteTodo(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/todo/${id}`, {
        method: 'DELETE'
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete todo');
      }
  
      return true;
    } catch (error) {
      console.error('Error deleting todo:', error);
      throw error;
    }
  }
  