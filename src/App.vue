<template>
  <div class="container">
    <!-- <div class="left-column">
      <ButtonChangeText />
      <DirectivesBinding />
    </div> -->
    <TodoInteraction />
  </div>
</template>

<script>
// import ButtonChangeText from './components/button-change-text.vue'
// import DirectivesBinding from './components/directives-binding.vue'
import TodoInteraction from './components/todo-interaction.vue'

export default {
  name: 'App',
  components: {
    // ButtonChangeText,
    // DirectivesBinding,
    TodoInteraction
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
}

.left-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  padding-top: 60px;
  min-height: 100vh;
}

body {
  margin: 0;
  padding: 0;
  background: darkslategrey;
}
</style>
