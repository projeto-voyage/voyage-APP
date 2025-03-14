<template>
  <div class="register-container">
    <div class="register-card">

      <div v-if="showAlert" class="alert success-alert">
        {{ successMessage }}
      </div>

      <div class="title-container">
        <img src="../assets/logoVoyageBranca.png" alt="Logo" style="background-color: transparent;">
      </div>

      <!-- Alert de erro -->
      <div v-if="errorMessage" class="error-alert">
        <i class="fas fa-exclamation-circle error-icon"></i>
        {{ errorMessage }}
      </div>

      <form @submit.prevent="handleSubmit" class="register-form">
        <div class="form-group">
          <label for="name">Nome</label>
          <div class="input-container">
            <i class="fas fa-user input-icon"></i>
            <input type="text" id="name" v-model="name" required placeholder="Digite seu nome" class="form-input" />
          </div>
        </div>

        <div class="form-group">
          <label for="email">E-mail</label>
          <div class="input-container">
            <i class="fas fa-envelope input-icon"></i>
            <input type="email" id="email" v-model="email" required placeholder="Digite seu e-mail"
              class="form-input" />
          </div>
          <span class="error-message" v-if="!emailValid"> O e-mail é inválido </span>
        </div>

        <div class="form-group">
          <label for="password">Senha</label>
          <div class="input-container">
            <i class="fas fa-lock input-icon"></i>
            <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" required
              placeholder="Digite sua senha" class="form-input" />
            <i :class="['toggle-password', showPassword ? 'fas fa-eye-slash' : 'fas fa-eye']"
              @click="togglePassword"></i>
          </div>
          <span class="error-message" v-if="!passwordValid">
            A senha deve ter pelo menos 8 caracteres
          </span>
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirme a senha</label>
          <div class="input-container">
            <i class="fas fa-lock input-icon"></i>
            <input :type="showConfirmPassword ? 'text' : 'password'" id="confirmPassword" v-model="confirmPassword"
              required placeholder="Digite sua senha novamente" class="form-input" />
            <i :class="['toggle-password', showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye']"
              @click="toggleConfirmPassword"></i>
          </div>
          <span class="error-message" v-if="!passwordsMatch"> As senhas não conferem </span>
        </div>

        <div class="form-actions">
          <button type="submit" class="register-button" :disabled="!isFormValid || isLoading">
            {{ isLoading ? 'Cadastrando...' : 'Cadastrar' }}
          </button>
        </div>

        <div class="separator">
          <span>Cadastre-se com</span>
        </div>

        <div class="social-login">
          <button @click.prevent="loginWithGoogle" class="google-btn">
            <img src="/img/google.png" alt="Google Logo" />
          </button>
        </div>

        <div class="form-link">
          <a href="#" @click.prevent="goToLogin">Possui uma conta? Faça login</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { createUser } from '@/services/userService';

export default {
  name: 'RegisterComponent',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      showPassword: false,
      showConfirmPassword: false,
      isLoading: false,
      errorMessage: '',
      successMessage: '',
      showAlert: false,
    };
  },
  computed: {
    emailValid() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(this.email) || this.email === '';
    },
    passwordValid() {
      return this.password.length >= 8 || this.password === '';
    },
    passwordsMatch() {
      return this.password === this.confirmPassword || this.confirmPassword === '';
    },
    isFormValid() {
      return (
        this.name &&
        this.email &&
        this.password &&
        this.confirmPassword &&
        this.emailValid &&
        this.passwordValid &&
        this.passwordsMatch
      );
    },
  },
  methods: {
    clearErrors() {
      this.errorMessage = ''
    },
    async handleSubmit() {
      this.clearErrors()
      if (!this.isFormValid) return

      this.isLoading = true

      try {
        await createUser({
          name: this.name,
          email: this.email,
          password: this.password,
        });

        this.successMessage = 'Usuário cadastrado com sucesso!';
        this.showAlert = true;

        setTimeout(() => {
          this.$router.push({
            path: '/login',
          });
        }, 5000);
      } catch (error) {
        console.error('Erro ao registrar:', error);
        alert('Ocorreu um erro ao tentar registrar o usuário. Tente novamente.');
      }
    },
    goToLogin() {
      this.$router.push({
        path: '/login',
      });
    },
    loginWithGoogle() {
      console.log('Iniciando login com Google...');
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmPassword() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
  },
};
</script>


<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.register-card {
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
  height: 250px;
  padding: 1.5rem;
  border-bottom-left-radius: 50px;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-title {
  text-align: center;
  color: #fff;
  background-color: transparent;
  margin: 0;
  font-size: 2rem;
}

.register-form {
  padding: 0 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
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

.register-button:hover:not(:disabled) {
  transform: scale(1.05);
}

.register-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  transform: none;
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

.error-message {
  color: #dc3545;
  font-size: 0.85rem;
  margin-top: 0.25rem;
}

.error-alert {
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 1rem;
  margin: 0 2rem 1rem 2rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.error-icon {
  font-size: 1.25rem;
}

.separator {
  display: flex;
  align-items: center;
  text-align: center;
  width: 70%;
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

.alert {
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  font-size: 1rem;
  text-align: center;
  animation: fadeIn 0.3s ease-in-out;
}

.success-alert {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
