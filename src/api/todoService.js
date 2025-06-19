export async function deleteTodo(id) {
    try {
      const response = await fetch(`http://localhost:3000/todo/${id}`, {
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
  