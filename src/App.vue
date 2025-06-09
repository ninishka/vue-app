<template>
    <ButtonChangeText/>
    <DirectivesBinding/>
    <!-- <FormConnect/> -->
    <TodoInteraction/>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ButtonChangeText from './components/button-change-text.vue'
import DirectivesBinding from './components/directives-binding.vue'
// import FormConnect from './components/form-connect.vue'
import TodoInteraction from './components/todo-interaction.vue'



export default {
  name: 'App',
  components: {
    // HelloWorld,
    ButtonChangeText,
    DirectivesBinding,
    // FormConnect,
    TodoInteraction
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
