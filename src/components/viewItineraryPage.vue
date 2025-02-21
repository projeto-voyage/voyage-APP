<template>
    <div class="itinerary-container">
      <div class="header">
        <h1>Seu Roteiro de Viagem</h1>
      </div>
  
      <div class="itinerary-content">
        <div class="info-card">
          <h2>Informações Gerais</h2>
          <div class="info-item">
            <i class="fas fa-map-marker-alt"></i>
            <span><strong>Destino:</strong> {{ itinerary.destination }}</span>
          </div>
          <div class="info-item">
            <i class="fas fa-wallet"></i>
            <span><strong>Orçamento:</strong> R$ {{ itinerary.budget }}</span>
          </div>
          <div class="info-item">
            <i class="fas fa-clock"></i>
            <span><strong>Duração:</strong> {{ itinerary.duration }} dias</span>
          </div>
        </div>
  
        <div class="details-card">
          <h2>Detalhes do Roteiro</h2>
          <div class="day-plan" v-for="(day, index) in itinerary.days" :key="index">
            <h3>Dia {{ day.day }}</h3>
            <p><strong>Manhã:</strong> {{ day.morning }}</p>
            <p><strong>Tarde:</strong> {{ day.afternoon }}</p>
            <p><strong>Noite:</strong> {{ day.night }}</p>
          </div>
        </div>
  
        <button class="download-button" @click="downloadPDF">
          <i class="fas fa-file-pdf"></i>
          Baixar Roteiro (PDF)
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import jsPDF from 'jspdf';
  
  export default {
    data() {
      return {
        itinerary: {
          destination: "Paris, França",
          budget: "5000",
          duration: 5,
          days: [
            {
              day: 1,
              morning: "Chegada no aeroporto e traslado para o hotel",
              afternoon: "Visita à Torre Eiffel",
              night: "Jantar em restaurante típico"
            },
            {
              day: 2,
              morning: "Visita ao Museu do Louvre",
              afternoon: "Passeio pelos Jardins de Tuileries",
              night: "Cruzeiro pelo Rio Sena"
            }
          ]
        }
      }
    },
    methods: {
      downloadPDF() {
        const doc = new jsPDF();
        
        // Cabeçalho
        doc.setFontSize(18);
        doc.text("Roteiro de Viagem - " + this.itinerary.destination, 15, 15);
        
        // Informações Gerais
        doc.setFontSize(12);
        doc.text(`Destino: ${this.itinerary.destination}`, 15, 25);
        doc.text(`Orçamento: R$ ${this.itinerary.budget}`, 15, 30);
        doc.text(`Duração: ${this.itinerary.duration} dias`, 15, 35);
  
        // Detalhes diários
        let yPosition = 45;
        this.itinerary.days.forEach(day => {
          doc.setFontSize(14);
          doc.text(`Dia ${day.day}:`, 15, yPosition);
          yPosition += 7;
          
          doc.setFontSize(12);
          doc.text(`Manhã: ${day.morning}`, 20, yPosition);
          yPosition += 7;
          doc.text(`Tarde: ${day.afternoon}`, 20, yPosition);
          yPosition += 7;
          doc.text(`Noite: ${day.night}`, 20, yPosition);
          yPosition += 10;
        });
  
        doc.save("roteiro-viagem.pdf");
      }
    }
  }
  </script>
  
  <style scoped>
  .itinerary-container {
    background-color: #4B93BF;
    min-height: 100vh;
    padding: 2rem;
  }
  
  .header {
    background-color: #4B93BF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }
  
  h1 {
    color: white;
    background-color: #4B93BF;
    font-size: 2.5rem;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  h3 {
    background-color: #f8f9fa;
    font-size: 1.5rem;
    margin: 1rem 0;
  }
  
  .info-card, .details-card {
    background: white;
    border-radius: 15px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .info-item {
    display: flex;
    align-items: center;
    margin: 1rem 0;
    font-size: 1.1rem;
  }
  
  .info-item i {
    margin-right: 1rem;
    color: #2A558C;
  }
  
  .day-plan {
    margin: 1.5rem 0;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 10px;
  }

  .day-plan p {
    background: #f8f9fa;
  }
  
  .download-button {
    background-color: #2A558C;
    color: white;
    border: none;
    border-radius: 25px;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 1rem auto;
  }
  
  .download-button:hover {
    background-color: #1d3d66;
  }
  
  @media (max-width: 768px) {
    .header {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
  
    h1 {
      font-size: 2rem;
    }
  
    h2 {
      font-size: 1.5rem;
    }
  
    .info-card, .details-card {
      padding: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    .itinerary-container {
      padding: 1rem;
    }
  
    h1 {
      font-size: 1.8rem;
    }
  
    .download-button {
      width: 100%;
      justify-content: center;
    }
  }
  </style>