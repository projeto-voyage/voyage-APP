<template>
    <div class="message-container">
      {{ message }}
    </div>
  </template>
  
  <script>
  export default {
    name: 'CheckComponent',
    data() {
      return {
        message: 'Teste testando! 🎉'
      }
    }
  }
  </script>
  
  <style scoped>
  .message-container {
    padding: 20px;
    margin: 20px auto;
    max-width: 600px;
    border-radius: 8px;
    background-color: #4CAF50;
    color: white;
    text-align: center;
    font-family: Arial, sans-serif;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100px;
  }
  </style>