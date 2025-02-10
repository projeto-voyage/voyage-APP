<template>
    <div class="page-container">
        <div class="header">
        <h1>Planeje sua próxima viagem em grande estilo!</h1>
        <h2>Nós pensamos numa forma dinâmica para você planejar sua viagem sem complicações.</h2>
        </div>

        <div class="form-container">
        <form style="background-color: #4B93BF;" @submit.prevent="generateItinerary">
            <div 
            v-for="(input, index) in inputs" 
            :key="index"
            class="input-card"
            :class="{ active: activeIndex === index }"
            @click="setActive(index)"
            >
            <div class="icon-container">
                <i :class="input.icon"></i>
            </div>
            <input
                :type="input.type"
                :placeholder="input.placeholder"
            >
            </div>

            <button type="submit" class="generate-button">Gerar roteiro</button>
        </form>
        </div>
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        activeIndex: null,
        inputs: [
          {
            placeholder: "Para onde vamos?",
            icon: "fas fa-location-arrow",
            type: "text"
          },
          {
            placeholder: "Quanto temos?",
            icon: "fas fa-dollar-sign",
            type: "number"
          },
          {
            placeholder: "Quanto tempo passaremos?",
            icon: "fas fa-clock",
            type: "text"
          }
        ]
      }
    },
    methods: {
      setActive(index) {
        this.activeIndex = index
      },
      generateItinerary() {
        // Lógica para gerar o roteiro
      }
    }
  }
  </script>
  
  <style scoped>
  .page-container {
    background-color: #4B93BF;
    min-height: 100vh;
    padding: 2rem;
  }
  
  .header {
    background-color: #4B93BF;
    text-align: center;
    color: white;
    margin-bottom: 3rem;
  }
  
  h1 {
    background-color: #4B93BF;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  h2 {
    background-color: #4B93BF;
    font-size: 1.2rem;
    font-weight: normal;
  }
  
  .form-container {
    max-width: 800px;
    margin: 0 auto;
    animation: fadeIn 0.5s ease-in;
  }
  
  .input-card {
    display: flex;
    align-items: center;
    background: white;
    border-radius: 15px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    cursor: pointer;
    transition: transform 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .input-card.active {
    transform: scale(1.05);
  }
  
  .icon-container {
    width: 40px;
    margin-right: 1rem;
  }
  
  .icon-container i {
    font-size: 1.5rem;
    color: #2A558C;
  }
  
  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 1.1rem;
    background: transparent;
  }
  
  .generate-button {
    display: block;
    width: 100%;
    max-width: 300px;
    margin: 2rem auto;
    padding: 1rem;
    background-color: #2A558C;
    color: white;
    border: none;
    border-radius: 25px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .generate-button:hover {
    background-color: #1d3d66;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    .page-container {
      padding: 1rem;
    }
  
    h1 {
      font-size: 2rem;
    }
  
    h2 {
      font-size: 1rem;
    }
  
    .input-card {
      margin: 1rem 0;
      padding: 1rem;
    }
  
    input {
      font-size: 1rem;
    }
  
    .generate-button {
      width: 90%;
    }
  }
  
  @media (max-width: 480px) {
    .input-card {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .icon-container {
      margin-bottom: 0.5rem;
    }
  }
  </style>