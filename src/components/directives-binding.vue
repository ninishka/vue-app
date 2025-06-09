<template>
    <div class="binding-container">
      <input id="id" v-model="message" placeholder="Edit" class="binding-input">
      <p class="message-display">Message is: {{ message }}</p>
      <p v-if="message.length > 0" class="entered-message">You have entered: {{ message }}</p>
      <ul class="item-list">
        <li v-for="items in items" :key="items" class="item">{{ items }}</li>
      </ul>
      <button @click="addToItem()" class="add-button">Add to List</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: '',
        items: ['dog', 'cat', 'alpaka']
      }
    },
    methods: {
      addToItem() {
        this.items = [this.message, ...this.items]
      }
    }
  }
  </script>
  
  <style scoped>
  .binding-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .binding-input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .message-display, .entered-message {
    font-size: 18px;
    color: #555;
  }
  
  .item-list {
    list-style: none;
    padding: 0;
  }
  
  .item {
    padding: 5px 0;
    border-bottom: 1px solid #ddd;
  }
  
  .add-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .add-button:hover {
    background-color: #0056b3;
  }
  </style>