<template>
  <header>
    <div style="background-color: transparent;">
      <img src="../assets/logoVoyageBranca.png" alt="Logo" class="logo">
    </div>
      <nav>
        <a href="#">Início</a> |
        <a href="#">Recursos</a> |
        <a href="#">Contato</a>|
        <a href="#">Sobre Nós</a>
      </nav>
    <button class="cta-button">Experimente Grátis</button>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 0em;
  background-color: #264769;
  color: white;
}

.logo {
  background-color: transparent;
  margin: 0 2em;
  width: 60px;
  height: 60px;
}

nav {
  background-color: #264769;
}

a {
  font-size: 20px;
}

nav a {
  color: black;
  margin: 0 15px;
  padding: 0em 2em;
  text-decoration: none;
  justify-content: space-between;
  background-color: #264769;
}

.cta-button {
  background-color: #00C2A8;
  color: white;
  border: none;
  padding: 1.5em 2em;
  border-radius: 5px;
  cursor: pointer;
}
</style>
