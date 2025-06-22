<template>
  <div class="home">
    <div class="welcome-section">
      <h1 class="title">Todo Application</h1>
      <p class="subtitle">Manage your tasks efficiently</p>
      
      <!-- Statistics Section -->
      <div class="stats-section" v-if="todosLoaded">
        <div class="stat-card">
          <h3>{{ todoCount }}</h3>
          <p>Total Tasks</p>
        </div>
        <div class="stat-card">
          <h3>{{ completedCount }}</h3>
          <p>Completed</p>
        </div>
        <div class="stat-card">
          <h3>{{ pendingCount }}</h3>
          <p>Pending</p>
        </div>
      </div>
      
      <div class="navigation-cards">
        <div class="nav-card" @click="goToTodos">
          <h3>View All Todos</h3>
          <p>See all your tasks and manage them</p>
          <button class="nav-button">Go to Todos</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HomePage',
  
  computed: {
    ...mapGetters('todos', [
      'todoCount',
      'completedCount',
      'pendingCount',
      'allTodos'
    ]),
    
    todosLoaded() {
      return this.allTodos.length > 0
    }
  },
  
  methods: {
    ...mapActions('todos', ['fetchTodos']),
    
    goToTodos() {
      this.$router.push('/todos')
    }
  },
  
  async mounted() {
    // Fetch todos to show statistics
    try {
      await this.fetchTodos()
    } catch (error) {
      console.error('Error fetching todos for stats:', error)
    }
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.welcome-section {
  text-align: center;
  max-width: 600px;
}

.title {
  font-family: 'Courier New', monospace;
  font-size: 3rem;
  color: #4CAF50;
  margin-bottom: 1rem;
  text-shadow: 0 0 20px rgba(76, 175, 80, 0.5);
}

.subtitle {
  font-family: 'Courier New', monospace;
  font-size: 1.2rem;
  color: #81C784;
  margin-bottom: 3rem;
}

.stats-section {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
}

.stat-card {
  background: rgba(76, 175, 80, 0.1);
  border: 1px solid #4CAF50;
  border-radius: 10px;
  padding: 1.5rem;
  min-width: 120px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.stat-card:hover {
  background: rgba(76, 175, 80, 0.2);
  transform: translateY(-2px);
}

.stat-card h3 {
  font-family: 'Courier New', monospace;
  color: #4CAF50;
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
}

.stat-card p {
  font-family: 'Courier New', monospace;
  color: #81C784;
  margin: 0;
  font-size: 0.9rem;
}

.navigation-cards {
  display: flex;
  justify-content: center;
}

.nav-card {
  background: rgba(76, 175, 80, 0.1);
  border: 2px solid #4CAF50;
  border-radius: 15px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.nav-card:hover {
  background: rgba(76, 175, 80, 0.2);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(76, 175, 80, 0.3);
}

.nav-card h3 {
  font-family: 'Courier New', monospace;
  color: #4CAF50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.nav-card p {
  font-family: 'Courier New', monospace;
  color: #81C784;
  margin-bottom: 1.5rem;
}

.nav-button {
  background: linear-gradient(45deg, #4CAF50, #66BB6A);
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-button:hover {
  background: linear-gradient(45deg, #66BB6A, #4CAF50);
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .stats-section {
    flex-direction: column;
    align-items: center;
  }
  
  .stat-card {
    min-width: 200px;
  }
}
</style> 