<template>
    <div class="success-page">
      <div class="success-container">
        <img src="@/assets/logo-proaasi.png" alt="ProAASI" class="logo" />
        <div class="success-message">
          <h2>Cadastro realizado!</h2>
          <p>Bem-vindo(a) ao ProAASI</p>
        </div>
        <button @click="goToLogin" class="enter-button">Entrar</button>
        <br>
        <button @click="goBack" class="back-button">Voltar para a página inicial</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RegistrationSuccessPage',
    methods: {
      goToLogin() {        
        this.$router.push('/dashboard');
      },
      goBack() {        
        this.$router.push('/');
      }
    }
  }
  </script>
  
  <style scoped>
  .success-page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
  }
  
  .success-container {
    background-color: #4376a3;
    padding: 40px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    color: white;
  }
  
  .logo {
    width: 120px;
    margin-bottom: 20px;
  }
  
  .success-message {
    margin-bottom: 20px;
  }
  
  h2 {
    margin-bottom: 10px;
  }
  
  .enter-button {
    background-color: #e0e0e0;
    color: #4376a3;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 20px;
  }
  
  .back-button {
    background-color: #e0e0e0;
    color: #4376a3;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>