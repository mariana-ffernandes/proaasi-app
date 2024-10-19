<template>
  <div class="dashboard-page">
    <div class="header">
      <div class="logo-container">
        <img src="@/assets/logo-proaasi.png" alt="ProAASI" class="logo" />
        <span class="logo-text">ProAASI</span>
      </div>
    </div>
    <div class="menu-container">
      <h2>O que gostaria de acessar?</h2>
      <div class="options">
        <div class="option-introduction option" @click="goToContent('introduction')">
          <img src="@/assets/introducao.png" alt="Introdução ao Conteúdo" class="icon" />
          <p>Introdução ao Conteúdo</p>
        </div>
        <div class="option-usage option" @click="goToContent('usage')">
          <img src="@/assets/uso-e-manuseio.png" alt="Uso e Manuseio do Aparelho" class="icon" />
          <p>Uso e Manuseio do Aparelho</p>
        </div>
        <div class="option-communication option" @click="goToContent('communication')">
          <img src="@/assets/comunicacao.png" alt="Estratégias de Comunicação" class="icon" />
          <p>Estratégias de Comunicação</p>
        </div>
        <div class="option-faq option" @click="goToContent('faq')">
          <img src="@/assets/duvidas.png" alt="Dúvidas Frequentes" class="icon" />
          <p>Dúvidas Frequentes</p>
        </div>
      </div>
    </div>
    <button @click="logout" class="logout-button">Sair</button>
  </div>
</template>

<script>

export default {
  name: 'MainMenuPage',
  methods: {
    goToContent(section) {        
      this.$router.push(`/${section}`);
    },
    logout() {        
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.dashboard-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-color: #ffffff;
}

.header {
  width: 100%;
  height: 150px;
  background-color: #5e2a8c;
  padding: 20px 0;
  text-align: center;
}

.menu-container {
  text-align: center;
  max-width: 1300px;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 100px;
}

.logo-text {
  font-size: 60px;
  color: #ffffff;
  margin-left: 10px;
  font-weight: 500;
}

h2 {
  font-size: 40px;
  color: #5e2a8c;
  margin-bottom: 40px;
  margin-top: 20px;
}

.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  width: 100%;
  max-width: 1300px;
  gap: 50px;
}

.option {
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  flex: 1;
}

.option:hover {
  transform: scale(1.1);
}

.option img {
  width: 250px;
  height: 250px;
  margin-bottom: 10px;
}

.logout-button {
  background-color: #ffffff;
  color: #05213b;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  border: 1px solid #4f0e81;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  box-shadow: 4px 4px 1px #4f0e81;
  transition: background-color 0.3s;
  margin: 0 20px;
  margin-bottom: 20px;
  }

.option-introduction {
  color: #0a8e7b;
  font-size: 25px;
  font-weight: 600;
}

.option-usage {
  color: #ac670b;
  font-size: 25px;
  font-weight: 600;
}

.option-communication {
  color: #006630;
  font-size: 25px;
  font-weight: 600;
}

.option-faq {
  color: #920b1f;
  font-size: 25px;
  font-weight: 600;
}

@media (max-width: 1024px) {
  .header {
    height: 120px;
    padding: 15px 0;
  }

  .logo {
    width: 90px;
  }

  .logo-text {
    font-size: 3rem;
    font-weight: 600;
  }

  h2 {
    font-size: 2.2rem;
    margin-bottom: 30px;
    margin-top: 15px;
  }

  .options {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
  }

  .option img {
    width: 180px;
    height: 180px;
    margin-bottom: 0%;
  }

  .option {
    font-size: 1.8rem;
    max-width: 220px;
  }

  .logout-button {
  background-color: #ffffff;
  color: #05213b;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  border: 1px solid #4f0e81;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  box-shadow: 4px 4px 1px #4f0e81;
  transition: background-color 0.3s;
  margin: 0 20px;
  margin-bottom: 20px;
  }
}

/* Celulares Grandes (768px - 481px) */
@media (max-width: 768px) {
  .header {
    height: 100px;
    padding: 10px 0;
  }

  .logo {
    width: 80px;
  }

  .logo-text {
    font-size: 2rem;
    font-weight: 600;
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    margin-top: 20px;
  }

  .options {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .option img {
    width: 150px;
    height: 150px;
    margin-bottom: 0%;
  }

  .option {
    font-size: 1.5rem;
    max-width: 200px;
  }

  .logout-button {
  background-color: #ffffff;
  color: #05213b;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  border: 1px solid #4f0e81;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  box-shadow: 4px 4px 1px #4f0e81;
  transition: background-color 0.3s;
  margin: 0 20px;
  margin-bottom: 20px;
  }
}

@media (max-width: 480px) {
  .header {
    height: 100px;
    padding: 10px 0;
  }

  .logo {
    width: 80px;
  }

  .logo-text {
    font-size: 2rem;
    font-weight: 600;
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    margin-top: 20px;
  }

  .options {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .option img {
    width: 150px;
    height: 150px;
    margin-bottom: 0%;
  }

  .option {
    font-size: 1.5rem;
    max-width: 200px;
  }

  .logout-button {
  background-color: #ffffff;
  color: #05213b;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  border: 1px solid #4f0e81;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  box-shadow: 4px 4px 1px #4f0e81;
  transition: background-color 0.3s;
  margin: 0 20px;
  margin-bottom: 20px;
  }
}
</style>