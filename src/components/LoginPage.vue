<template>
  <div class="login-container">
    <div class="login-card">
      <div class="title-container">
        <h1 class="login-title">Login</h1>
      </div>

      <form @submit.prevent="handleSubmit" class="login-form">
        <div class="form-group">
          <label for="email">Email</label>
          <div class="input-container">
            <i class="fas fa-at input-icon"></i>
            <input
              type="email"
              id="email"
              v-model="email"
              required
              placeholder="Digite seu e-mail"
              class="form-input"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="password">Senha</label>
          <div class="input-container">
            <i class="fas fa-lock input-icon"></i>
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="password"
              required
              placeholder="Digite sua senha"
              class="form-input"
            />
            <i
              :class="['toggle-password', showPassword ? 'fas fa-eye-slash' : 'fas fa-eye']"
              @click="togglePassword"
            ></i>
          </div>
        </div>

        <div class="form-forgot">
          <a href="#" @click.prevent="forgotPassword">Esqueci a minha senha</a>
        </div>

        <div class="form-actions">
          <button type="submit" class="login-button">Entrar</button>
        </div>

        <div class="separator">
          <span>Entre com</span>
        </div>

        <div class="social-login">
          <button @click.prevent="loginWithGoogle" class="google-btn">
            <img src="/img/google.png" alt="Google Logo" />
          </button>
        </div>

        <div class="form-link">
          <a href="#" @click.prevent="goToRegister">Não possui uma conta? Cadastre-se</a>
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
      showPassword: false,
    }
  },
  methods: {
    async handleSubmit() {
      try {
        console.log('Login tentado com:', {
          email: this.email,
          password: this.password,
        })
      } catch (error) {
        console.error('Erro ao fazer login:', error)
      }
    },
    forgotPassword() {
      console.log('Redirecionando para recuperação de senha...')
    },
    goToRegister() {
      console.log('Redirecionando para registro...')
    },
    loginWithGoogle() {
      console.log('Iniciando login com Google...')
    },
    togglePassword() {
      this.showPassword = !this.showPassword
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
  padding: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  overflow: hidden;
}

.title-container {
  background: linear-gradient(to right, #4e59f3, #454db8, #1e27a4);
  background-size: 200% auto;
  height: 300px;
  padding: 1.5rem;
  border-bottom-left-radius: 50px;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-title {
  text-align: center;
  color: #fff;
  background-color: transparent;
  margin: 0;
  font-size: 2rem;
}

.login-form {
  padding: 0 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #8d8d8d;
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 10px;
  color: #8d8d8d;
  background-color: transparent;
  font-size: 1rem;
}

.toggle-password {
  position: absolute;
  right: 10px;
  color: #8d8d8d;
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
}

.toggle-password:hover {
  color: #2a558c;
}

.form-input {
  width: 100%;
  padding: 0.5rem 2.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #eeeeee;
  color: #8d8d8d;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.login-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #2a558c;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 1.5rem;
  cursor: pointer;
}

.login-button:hover {
  transform: scale(1.05);
}

.form-forgot {
  display: flex;
  font-size: 0.9rem;
}

.form-forgot a {
  color: #5a9fde;
  text-decoration: none;
  border-bottom: 1px solid #5a9fde;
}

.form-forgot a:hover {
  border-bottom: 2px solid #5a9fde;
}

.form-link {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
}

.form-link a {
  color: #5a9fde;
  text-decoration: none;
  border-bottom: 1px solid #5a9fde;
}

.form-link a:hover {
  border-bottom: 2px solid #5a9fde;
}

/* Novos estilos adicionados */
.separator {
  display: flex;
  align-items: center;
  text-align: center;
  width: 60%;
  margin: 0 auto;
}

.separator::before,
.separator::after {
  content: '';
  flex: 1;
  border-top: 1px solid;
  margin: 0 5px;
}

.social-login {
  display: flex;
  justify-content: center;
  align-items: center;
}

.google-btn {
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.google-btn img {
  width: 40px;
  height: 40px;
}

.google-btn:hover {
  border: 2px solid #ddd;
  border-radius: 50%;
}
</style>
