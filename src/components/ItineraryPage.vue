<template>
    <div class="page-container">
      <div class="header">
        <h1>Planeje sua próxima viagem em grande estilo!</h1>
        <h2>Nós pensamos numa forma dinâmica para você planejar sua viagem sem complicações.</h2>
      </div>
  
      <div class="form-container">
        <div v-if="errorMessage" class="alert alert-error">
          {{ errorMessage }}
        </div>
        <div v-if="successMessage" class="alert alert-success">
          {{ successMessage }}
        </div>
  
        <form style="background-color: #4B93BF;" @submit.prevent="generateItinerary">
          <div 
            v-for="(input, index) in inputs" 
            :key="index"
            class="input-card"
            :class="{ active: activeIndex === index, error: validationErrors[input.model] }"
            @click="setActive(index)"
          >
            <div class="icon-container">
              <i :class="input.icon"></i>
            </div>
            <div class="input-wrapper">
              <input
                :type="input.type"
                :placeholder="input.placeholder"
                v-model="inputData[input.model]"
                :step="input.step"
                :min="input.min"
                :max="input.max"
                @input="handleInput(input.model, $event)"
              >
              <span v-if="validationErrors[input.model]" class="error-message">
                {{ validationErrors[input.model] }}
              </span>
            </div>
          </div>
  
          <button 
            type="submit" 
            class="generate-button" 
            :disabled="isLoading || hasValidationErrors"
          >
            <span v-if="isLoading" class="loading-spinner"></span>
            {{ isLoading ? 'Gerando...' : 'Gerar roteiro' }}
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        activeIndex: null,
        isLoading: false,
        errorMessage: '',
        successMessage: '',
        validationErrors: {},
        inputData: {
          destination: '',
          budget: '',
          duration: ''
        },
        inputs: [
          {
            placeholder: "Para onde vamos?",
            icon: "fas fa-location-arrow",
            type: "text",
            model: "destination",
            required: true,
            minLength: 3
          },
          {
            placeholder: "Quanto temos?",
            icon: "fas fa-dollar-sign",
            type: "number",
            model: "budget",
            step: 1,
            min: 100,
            max: 1000000,
            required: true
          },
          {
            placeholder: "Quanto tempo passaremos?",
            icon: "fas fa-clock",
            type: "number",
            model: "duration",
            step: 1,
            min: 1,
            max: 90,
            required: true
          }
        ]
      }
    },
    computed: {
      hasValidationErrors() {
        return Object.keys(this.validationErrors).length > 0;
      }
    },
    methods: {
      setActive(index) {
        this.activeIndex = index;
      },
      clearMessages() {
        this.errorMessage = '';
        this.successMessage = '';
      },
      validateField(model, value) {
        const input = this.inputs.find(i => i.model === model);
        if (!input) return;
  
        if (input.required && !value) {
          this.validationErrors[model] = 'Este campo é obrigatório';
          return false;
        }
  
        if (input.type === 'text') {
          if (input.minLength && value.length < input.minLength) {
            this.validationErrors[model] = `Mínimo de ${input.minLength} caracteres`;
            return false;
          }
        } else if (input.type === 'number') {
          const numValue = Number(value);
          if (input.min && numValue < input.min) {
            this.validationErrors[model] = `Valor mínimo: ${input.min}`;
            return false;
          }
          if (input.max && numValue > input.max) {
            this.validationErrors[model] = `Valor máximo: ${input.max}`;
            return false;
          }
        }
  
        delete this.validationErrors[model];
        return true;
      },
      handleInput(model, event) {
        const value = event.target.value;
        if (this.inputs.find(i => i.model === model).type === 'number') {
          this.inputData[model] = value.replace(/[^0-9]/g, '');
        } else {
          this.inputData[model] = value;
        }
        this.validateField(model, this.inputData[model]);
      },
      validateForm() {
        let isValid = true;
        this.inputs.forEach(input => {
          if (!this.validateField(input.model, this.inputData[input.model])) {
            isValid = false;
          }
        });
        return isValid;
      },
      async generateItinerary() {
        this.clearMessages();
        
        if (!this.validateForm()) {
          this.errorMessage = 'Por favor, corrija os erros no formulário';
          return;
        }
  
        try {
          this.isLoading = true;
          const response = await axios.post('http://localhost:3000/itineraries', {
            destination: this.inputData.destination,
            budget: parseInt(this.inputData.budget),
            duration: parseInt(this.inputData.duration)
          });
  
          this.successMessage = 'Roteiro gerado com sucesso!';
          if (response.data) {
            console.log('Roteiro gerado:', response.data);
          }
        } catch (error) {
          this.errorMessage = 'Erro ao gerar roteiro. Por favor, tente novamente.';
          console.error('Erro ao gerar roteiro:', error);
        } finally {
          this.isLoading = false;
        }
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
    background-color: #4B93BF;
    max-width: 800px;
    margin: 0 auto;
    animation: fadeIn 0.5s ease-in;
  }
  
  .alert {
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    text-align: center;
    font-weight: 500;
  }
  
  .alert-error {
    background-color: #fee2e2;
    color: #dc2626;
    border: 1px solid #fecaca;
  }
  
  .alert-success {
    background-color: #dcfce7;
    color: #16a34a;
    border: 1px solid #bbf7d0;
  }
  
  .input-card {
    display: flex;
    align-items: flex-start;
    background: white;
    border-radius: 15px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    cursor: pointer;
    transition: transform 0.3s ease, border-color 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .input-card.active {
    transform: scale(1.05);
  }
  
  .input-card.error {
    border: 2px solid #dc2626;
  }
  
  .icon-container {
    width: 40px;
    margin-right: 1rem;
    flex-shrink: 0;
  }
  
  .icon-container i {
    font-size: 1.5rem;
    color: #2A558C;
  }
  
  .input-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 1.1rem;
    background: transparent;
  }
  
  .error-message {
    color: #dc2626;
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }
  
  .generate-button {
    display: flex;
    align-items: center;
    justify-content: center;
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
  
  .generate-button:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
  }
  
  .generate-button:not(:disabled):hover {
    background-color: #1d3d66;
  }
  
  .loading-spinner {
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
    border: 3px solid #ffffff;
    border-top: 3px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
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