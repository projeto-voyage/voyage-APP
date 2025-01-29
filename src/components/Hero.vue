<template>
  <section class="hero">
    <h1>Transforme suas viagens com  Voyage</h1>
    <p>Planeje, reserve e explore com facilidade. Tudo em um só lugar.</p>
    <div class="search-box">
      <input class="input" type="text" placeholder="Para onde você quer ir?" />
      <button>Encontrar Viagens</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
};
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 4em ;
  background-image: url('../assets/hero-bg.jpg'); /* Adicione uma imagem de fundo */
  background-size: cover;
  color: rgb(83, 83, 83);
}

h1 {
  font-size: 48px;
}

p {
  font-size: 18px;
  margin-bottom: 2em;
}

.search-box {
  display: flex;
  justify-content: center;
}

input {
  padding: 0.5em 2em;
  width: 300px;
  border-color: rgb(144, 151, 158);
  border-radius: 5px 0 0 5px;
}

button {
  padding: 10px 20px;
  background-color: #00C2A8;
  color: white;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

</style>
