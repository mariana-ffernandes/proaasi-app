<template>
  <div class="about-page">
    <div class="about-container">
      <img src="@/assets/logo-proaasi.png" alt="ProAASI" class="logo" />
      <h2>Sobre o ProAASI</h2>
      <p>
        O Programa de Orientação e Adaptação do Aparelho de Amplificação Sonora Individual, o ProAASI, é um projeto desenvolvido na Faculdade de Odontologia de Bauru - Universidade de São Paulo, do departamento de Fonoaudiologia, orientado pela Professora Doutora Wanderleia Quinhoneiro Blasca. Seu objetivo é proporcionar informação sobre uso e manuseio do aparelho e estratégias de comunicação para o idoso usuário do AASI, bem como para o(a) parceiro(a) de comunicação. Dessa forma, proporcionar uma melhor qualidade de vida para eles(as).
      </p>
      <button @click="goBack" class="back-button">Voltar para a página inicial</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  methods: {
    goBack() {     
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.about-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;
}

.about-container {
  background-color: #f0f0f0;
  padding: 40px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
}

.logo {
  width: 120px;
  margin-bottom: 20px;
}

h2 {
  color: #2e5075 ;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  margin-bottom: 20px;
}

.back-button {
  background-color: #2e5075 ;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}
</style>