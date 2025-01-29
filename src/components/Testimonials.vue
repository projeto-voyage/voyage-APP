<template>
  <section class="testimonials">
    <h2>O que nossos usuários dizem</h2>
    <div class="testimonial-cards">
      <div class="card">
        <img src="../assets/ana.jpeg" alt="Ana" />
        <p>"Adorei a facilidade de uso!"</p>
        <span>- Ana, São Paulo</span>
      </div>
      <div class="card">
        <img src="../assets/carlos.jpeg" alt="Carlos" />
        <p>"Revolucionou minhas viagens."</p>
        <span>- Carlos, Rio de Janeiro</span>
      </div>
      <div class="card">
        <img src="../assets/mariana.jpeg" alt="Mariana" />
        <p>"Recomendo para todos!"</p>
        <span>- Mariana, Belo Horizonte</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Testimonials',
};
</script>

<style scoped>
.testimonials {
  padding: 60px 20px;
  text-align: center;
}

h2 {
  font-size: 36px;
  margin-bottom: 40px;
}

.testimonial-cards {
  display: flex;
  justify-content: space-around;
}

.card {
  width: 30%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  margin-bottom: 10px;
}

span {
  font-size: 14px;
  color: #666;
}
</style>
