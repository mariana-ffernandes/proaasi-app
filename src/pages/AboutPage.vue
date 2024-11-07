<template>
  <div class="about-page">
    <div class="about-container">
      <img src="@/assets/proAASI-icon.svg" alt="ProAASI" class="logo" />
      <h2>Sobre o ProAASI</h2>
      <p>
        O Programa de Orientação e Adaptação do Aparelho de Amplificação Sonora Individual, o ProAASI, é um projeto desenvolvido no Programa de Pós Graduação de Fonoaudiologia do Departamento de Fonoaudiologia da Faculdade de Odontologia de Bauru - Universidade de São Paulo, orientado pela Professora Dra Wanderleia Q. Blasca, em parceria com a Universidade de Montreal, sob orientação da Professora Dra Adriana B. M. de Lacerda, e do Curso de Ciências da Computação da UniSagrado de Bauru, sob orientação do Professor Dr. Vinicius S. Andrade.
O ProAASI tem como objetivo fornecer informações sobre uso e manuseio do AASI, contemplando, também, as estratégias de comunicação para o idoso com deficiência auditiva, bem como, para o(a) parceiro(a) de comunicação de maneira acessível, versátil e sempre que necessário.
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
  box-shadow: 0 0 10px #0000001a;
  max-width: 600px;
}

.logo {
  width: 100px;
}

h2 {
  color: #2e5075 ;
  margin-bottom: 20px;
}

p {
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  margin-bottom: 20px;
  text-align: justify;
}

.back-button {
  font-weight: 600;
  background-color: #2e5075 ;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}
</style>