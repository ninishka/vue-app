<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  background: #2c2c54;
  margin: 0;
  padding: 0;
  font-family: 'Courier New', monospace;
}

#app {
  min-height: 100vh;
}
</style>
