<template>
  <section class="features">
    <h2>Por que escolher o Voyage?</h2>
    <div class="feature-cards">
      <div class="card">
        <i class="icon">📅</i>
        <h3>Planejamento Inteligente</h3>
        <p>Crie roteiros personalizados em minutos.</p>
      </div>
      <div class="card">
        <i class="icon">✈️</i>
        <h3>Reservas Integradas</h3>
        <p>Hotéis, voos e passeios em um só lugar.</p>
      </div>
      <div class="card">
        <i class="icon">🗺️</i>
        <h3>Dicas Locais</h3>
        <p>Descubra experiências únicas com recomendações de especialistas.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Features',
};
</script>

<style scoped>
.features {
  padding: 60px 20px;
  text-align: center;
  background-color: #F5F5F5;
}

h2 {
  font-size: 36px;
  margin-bottom: 40px;
}

.feature-cards {
  display: flex;
  justify-content: space-around;
  padding: 2em;
}

.card {
  width: 30%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.icon {
  font-size: 40px;
  margin-bottom: 20px;
}

h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  color: #666;
}
</style>
