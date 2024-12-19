<template>
  <div class="register-container">
    <div class="register-card">
      <h1 class="register-title">Criar Conta</h1>

      <form @submit.prevent="handleSubmit" class="register-form">
        <div class="form-group">
          <label for="name">Nome completo:</label>
          <input
            type="text"
            id="name"
            v-model="name"
            required
            placeholder="Digite seu nome completo"
            class="form-input"
          />
        </div>

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

        <div class="form-group">
          <label for="confirmPassword">Confirme a senha:</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            required
            placeholder="Digite sua senha novamente"
            class="form-input"
          />
          <span class="error-message" v-if="!passwordsMatch"> As senhas não conferem </span>
        </div>

        <div class="form-actions">
          <button type="submit" class="register-button" :disabled="!isFormValid">
            Criar conta
          </button>
        </div>

        <div class="form-links">
          <a href="#" @click.prevent="goToLogin">Já possui conta? Faça login</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterComponent',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  computed: {
    passwordsMatch() {
      return this.password === this.confirmPassword || this.confirmPassword === ''
    },
    isFormValid() {
      return this.name && this.email && this.password && this.confirmPassword && this.passwordsMatch
    },
  },
  methods: {
    async handleSubmit() {
      if (!this.isFormValid) return

      try {
        // Aqui você implementaria a lógica de registro
        console.log('Registro tentado com:', {
          name: this.name,
          email: this.email,
          password: this.password,
        })
      } catch (error) {
        console.error('Erro ao registrar:', error)
      }
    },
    goToLogin() {
      this.$router.push('/login')
    },
  },
}
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 1rem;
}

.register-card {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.register-title {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.register-form {
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

.form-input:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
}

.register-button {
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

.register-button:hover:not(:disabled) {
  background-color: #45a049;
}

.register-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.form-links {
  text-align: center;
  font-size: 0.9rem;
}

.form-links a {
  color: #666;
  text-decoration: none;
}

.form-links a:hover {
  text-decoration: underline;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.error-message {
  color: #dc3545;
  font-size: 0.85rem;
  margin-top: 0.25rem;
}
</style>
