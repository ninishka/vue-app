<template>
    <div class="text-container">
      <h1 class="text-display">{{ text }}</h1>
      <button @click="changeText()" class="change-button">Change Text</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        text: 'hello world'
      }
    },
    methods: {
      changeText() {
        this.text = 'you clicked the button'
      }
    }
  }
  </script>
  
  <style scoped>
  .text-container {
    text-align: center;
    margin-top: 20px;
  }
  
  .text-display {
    font-size: 24px;
    color: #333;
  }
  
  .change-button {
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .change-button:hover {
    background-color: #218838;
  }
  </style>