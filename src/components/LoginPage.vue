<template>
  <div class="login-container">
    <div class="login-card">
      <h1 class="login-title">Login</h1>

      <form @submit.prevent="handleSubmit" class="login-form">
        <div class="form-group">
          <label for="email">E-mail:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="Digite seu e-mail"
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label for="password">Senha:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Digite sua senha"
            class="form-input"
          />
        </div>

        <div class="form-actions">
          <button type="submit" class="login-button">Entrar</button>
        </div>

        <div class="form-links">
          <a href="#" @click.prevent="forgotPassword">Esqueceu a senha?</a>
          <a href="#" @click.prevent="goToRegister">Criar conta</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async handleSubmit() {
      try {
        // Aqui você implementaria a lógica de autenticação
        console.log('Login tentado com:', {
          email: this.email,
          password: this.password,
        })
      } catch (error) {
        console.error('Erro ao fazer login:', error)
      }
    },
    forgotPassword() {
      // Implementar redirecionamento para recuperação de senha
      console.log('Redirecionando para recuperação de senha...')
    },
    goToRegister() {
      this.$router.push('/register')
    },
  },
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.login-card {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.login-title {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-input {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.login-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.login-button:hover {
  background-color: #45a049;
}

.form-links {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
}

.form-links a {
  color: #666;
  text-decoration: none;
}

.form-links a:hover {
  text-decoration: underline;
}
</style>
