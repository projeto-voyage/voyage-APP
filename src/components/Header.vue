<template>
  <header>
    <div style="background-color: transparent;">
      <img src="../assets/logoVoyageBranca.png" alt="Logo" class="logo">
    </div>
    <nav>
      <a href="/login">Login</a> |
      <a href="/register">Registrar-se</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    redirectToLogin() {
      this.$router.push({
        path: '/login',
      });
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

a {
  font-size: 20px;
}

nav a {
  color: #ffffff;
  margin: 0 15px;
  padding: 0em 2em;
  text-decoration: none;
  justify-content: space-between;
  background-color: #264769;
}

nav a:hover {
  color: #dfdfdf;
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  nav {
    flex-direction: column;
  }

  nav a {
    margin: 0.5rem 0;
  }
}
</style>
