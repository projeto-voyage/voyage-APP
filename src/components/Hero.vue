<template>
  <div class="landing-page">
    <div class="content-wrapper">
      <!-- Seção de Texto -->
      <div class="text-section">
        <div class="logo-container">
          <!-- Insira sua logo aqui -->
          <img src="../assets/logoVoyageAzul.png" alt="Logo" class="logo">
        </div>
        <h1>Planeje sua viagem com inteligência!</h1>
        <h2>Viaje de forma prática e sem complicação.</h2>
        <h3>
          Deixe a nossa IA criar roteiros personalizados com base no seu destino, tempo disponível e orçamento.
        </h3>
        <button class="cta-button" @click="redirectToLogin">Experimente grátis!</button>
      </div>

      <!-- Seção de Imagem -->
      <div class="image-section">
        <img src="../assets/background.png" alt="Exibição do produto" class="hero-image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  methods: {
    redirectToLogin() {
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.landing-page {
  padding: 2rem;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.content-wrapper {
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
}

.text-section {
  flex: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
}

.image-section {
  flex: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  max-width: 200px;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #34495e;
}

h3 {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #7f8c8d;
  font-weight: normal;
}

.register-button {
  margin-top: 8px;
  width: 100%;
  padding: 0.75rem;
  background-color: #1e27a4;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 1.5rem;
  cursor: pointer;
}

.cta-button {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  background-color: #1e27a4;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.cta-button:hover {
  transform: scale(1.05);
}

.hero-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Responsividade */
@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column-reverse;
  }

  .text-section, .image-section {
    flex: 100%;
    padding: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1rem;
  }

  .logo {
    max-width: 150px;
  }
}

@media (max-width: 480px) {
  .landing-page {
    padding: 1rem;
  }

  h1 {
    font-size: 1.75rem;
  }

  .cta-button {
    width: 100%;
    padding: 1rem;
  }
}
</style>