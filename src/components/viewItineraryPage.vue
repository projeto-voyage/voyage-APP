<template>
    <div class="itinerary-container">
      <div class="itinerary-content">
        <div class="info-card">
          <h2>Seu Roteiro de Viagem</h2>
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
            <span><strong>Duração:</strong> {{ itinerary.duration }} {{ itinerary.duration === 1 ? 'dia' : 'dias' }}</span>
          </div>
        </div>
  
        <div class="details-card">
          <div class="days-grid">
            <div class="day-plan" v-for="(day, index) in parsedDays" :key="index">
              <h3>Dia {{ day.day }}: {{ day.title }}</h3>
              <p><strong>Manhã:</strong> {{ day.morning }}</p>
              <p><strong>Tarde:</strong> {{ day.afternoon }}</p>
              <p><strong>Noite:</strong> {{ day.night }}</p>
            </div>
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
import axios from 'axios';

export default {
  data() {
    return {
      itinerary: {
        destination: '',
        budget: '',
        duration: 0,
        details: '',
        days: []
      },
      parsedDays: [],
      token: null
    }
  },
  computed: {
    itineraryId() {
      return this.$route.params.id
    } 
  },
  mounted() {
    this.token = localStorage.getItem('token')

    axios.get(`http://localhost:3000/itineraries/${this.itineraryId}`, {
      headers: {
        'Authorization': `Bearer ${this.token}`
      }
    })
      .then(response => {
        this.itinerary.destination = response.data.content.destination;
        this.itinerary.budget = response.data.content.totalCost;
        this.itinerary.duration = response.data.content.totalDays;
        
        // Processar os dias
        this.parsedDays = this.parseItineraryText(response.data.content.details);
      })
      .catch(error => {
        console.error('Erro ao buscar roteiro:', error);
      });
  },
  methods: {
    parseItineraryText(text) {
      const days = [];
      // Regex para capturar dias e atividades
      const dayRegex = /\*\*Dia (\d+): (.+?)\*\*\n\n([\s\S]+?)(?=\n\n\*\*Dia|$)/g;
      
      let match;
      while ((match = dayRegex.exec(text)) !== null) {
        const [, dayNumber, title, activitiesText] = match;
        const day = {
          day: dayNumber,
          title: title.trim(),
          morning: '',
          afternoon: '',
          night: ''
        };

        // Extrair atividades por período - corrigindo as regex para o formato real
        const morningMatch = activitiesText.match(/\*\*Manhã[^:]*:\*\*\s*(.*?)(?=\n\*\*|$)/s);
        if (morningMatch) {
          day.morning = morningMatch[1].replace(/\*/g, '').trim();
        }
        
        const afternoonMatch = activitiesText.match(/\*\*Tarde[^:]*:\*\*\s*(.*?)(?=\n\*\*|$)/s);
        if (afternoonMatch) {
          day.afternoon = afternoonMatch[1].replace(/\*/g, '').trim();
        }
        
        const nightMatch = activitiesText.match(/\*\*Noite[^:]*:\*\*\s*(.*?)(?=\n\*\*|$)/s);
        if (nightMatch) {
          day.night = nightMatch[1].replace(/\*/g, '').trim();
        }

        days.push(day);
      }
      return days;
    },
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
      this.parsedDays.forEach(day => {
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
  background-color: #ffffff;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
}

.itinerary-content {
  background-color: #d9d9d9;
  flex: 1;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  background-color: transparent;
}

h3 {
  background-color: transparent;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.info-card {
  background: #e9e9e9;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  align-items: center;
  margin: 1rem 0;
  font-size: 1.1rem;
  background-color: transparent;
}

.info-item i {
  margin-right: 1rem;
  color: #2A558C;
}

.info-item i, .info-item span, .info-item strong {
  background-color: transparent;
}

.details-card {
  background: #837272;
  border-radius: 15px;
  flex: 1;
  padding: 2rem;
  margin-bottom: 2rem;
  overflow-y: auto;
}

.days-grid {
  height: 100%;
  background-color: transparent;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.day-plan {
  margin: 0;
  padding: 1rem;
  background: #9b8585;
  color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.day-plan h3 {
  flex: 0 0 auto;
}

.day-plan p, .day-plan strong {
  color: #ffffff;
  background: transparent;
  flex: 1 1 auto;
  overflow: auto;
  margin: 4px 0;
}

.download-button {
  background-color: #2A558C;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: auto;
}

.download-button i {
  background: transparent;
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

  .days-grid {
    grid-template-columns: 1fr;
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