<template>
  <div class="home">
    <div class="welcome-section">
      <h1 class="title">Todo Application</h1>
      <p class="subtitle">Manage your tasks efficiently</p>
      
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
export default {
  name: 'HomePage',
  methods: {
    goToTodos() {
      this.$router.push('/todos')// this is method to go to todos page by its route attached 
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
</style> 