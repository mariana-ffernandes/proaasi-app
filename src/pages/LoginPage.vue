<template>
  <div class="login-page">
    <div class="login-container">
      <h2>Preencha o Formulário</h2>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdztn-p55WxTxzkUFcOoy-aANK-tfonqi8CwjqY2dDb1gkOSg/viewform?embedded=true"
        width="640"
        height="900"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Carregando…
      </iframe>

      <div class="confirmation">
        <input
          type="checkbox"
          id="form-confirmation"
          v-model="formConfirmed"
        />
        <label for="form-confirmation">
          Preenchi o formulário e concordo com a coleta dos dados para a pesquisa.
        </label>
      </div>

      <button
        :disabled="!formConfirmed"
        @click="goToNextPage"
        class="next-button"
      >
        Prosseguir
      </button>
      <button @click="goBack" class="back-button">
        Voltar para a página inicial
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormPage",
  data() {
    return {
      formConfirmed: false,
    };
  },
  methods: {
    goToNextPage() {
      this.$router.push("/dashboard");
    },
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;
}

h2 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 30px;
}

.login-container {
  margin-top: 80px;
  background-color: #f0f0f0;
  padding: 40px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.next-button {
  background-color: #2e5075;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  margin-right: 30px; 
}

.next-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.back-button {
  margin-top: 20px;
  background-color: #2e5075;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .login-container {
    width: 80%;
    padding: 30px;
  }
  iframe {
    width: 100%;
    height: 800px;
  }
}

@media (max-width: 768px) {
  .login-container {
    width: 90%;
    padding: 20px;
  }
  .next-button,
  .back-button {
    padding: 8px 16px;
  }
  iframe {
    height: 700px;
  }
}

@media (max-width: 480px) {
  .login-container {
    width: 100%;
    padding: 15px;
  }
  h2 {
    font-size: 1.5rem;
  }
  .next-button,
  .back-button {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
  iframe {
    height: 600px;
  }
}
</style>
