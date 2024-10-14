<template>
  <div class="terms-page">
    <div class="terms-container">
      <img src="@/assets/logo-proaasi.png" alt="ProAASI" class="logo" />
      <h2>Termos</h2>
      <div class="terms-buttons">
        <button @click="acceptTerms" class="accept-button">Aceito</button>
        <button @click="declineTerms" class="decline-button">Não aceito</button>
      </div>
      <button @click="goBack" class="back-button">
        Voltar para a página inicial
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TermsPage",
  methods: {
    acceptTerms() {
      this.$router.push("/succesmessage");
    },
    declineTerms() {
      alert("Você precisa aceitar os termos para prosseguir.");
      this.$router.push("/register");
    },
    goBack() {      
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.terms-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.terms-container {
  background-color: #e0e0e0;
  padding: 40px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.logo {
  width: 120px;
  margin-bottom: 20px;
}

h2 {
  color: #3a7bd5;
  margin-bottom: 20px;
}

.terms-buttons {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.accept-button,
.decline-button {
  background-color: #e0e0e0;
  color: #3a7bd5;
  border: 1px solid #3a7bd5;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.back-button {
  margin-top: 20px;
  background-color: #3a7bd5;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
