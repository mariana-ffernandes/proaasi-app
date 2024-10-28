<template>
  <div class="home-page">

    <div class="loading-screen" v-if="isLoading">
      <div class="header-container">
        <div class="logo-container">
          <img
            src="@/assets/proAASI-icon.svg"
            alt="ProAASI Logo"
            class="logo"
          />
        </div>
        <h1 class="loading-title">Bem vindo(a) ao ProAASI</h1>
      </div>
    </div>

    <div class="container" v-else>
      <div class="header-container">
        <div class="logo-container">
          <img
            src="@/assets/proAASI-icon.svg"
            alt="ProAASI Logo"
            class="logo"
          />
        </div>
        <h1 class="title">ProAASI</h1>
      </div>
      <p class="subtitle">
        Programa de Orientação e Adaptação do Aparelho de Amplificação Sonora
        Individual
      </p>
      <div class="buttons-container">
        <router-link to="/login" class="button">Entrar</router-link>
        <router-link to="/register" class="button">Cadastrar</router-link>
        <router-link to="/about" class="button">Sobre o ProAASI</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false; 
      this.$nextTick(() => {
        const container = this.$el.querySelector(".container");
        if (container) {
          console.log("Container encontrado. Adicionando classe expand.");
          container.classList.add("expand"); 
        } else {
          console.error("Container não encontrado.");
        }
      });
    }, 3000); 
  },
};
</script>


<style scoped>
.home-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("@/assets/background-proaasi.jpg") no-repeat center center;
  background-size: cover;
  padding: 20px;
}

.loading-screen {
  text-align: center;
}

.container {
  background-color: #f8f8f8;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 90%;
  max-width: 400px;
  transform: scale(0.5);
  opacity: 0; 
  transition: transform 1s ease-out, opacity 1s ease-out; 
}

.container.expand {
  transform: scale(1); 
  opacity: 1;
}

.header-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}

.logo {
  width: 100px;
  margin-bottom: 10px;
}

.loading-title {
  font-size: 4rem;
  font-weight: bold;
  color: #ffffff;
  line-height: 1.2;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #4376a3;
  line-height: 1.2;
}

.subtitle {
  font-size: 1rem;
  font-weight: 500;
  color: #4376a3;
  margin-bottom: 40px;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.button {
  background-color: #4376a3;
  color: #ffffff;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
  text-align: center;
  font-size: 1.1rem;
  box-shadow: 4px 4px 1px #05213b;
}

.button:hover {
  background-color: #05213b;
  box-shadow: 4px 4px 1px #4376a3;
}

@keyframes expandAnimation {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.container {
  background-color: #f8f8f8;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 90%;
  max-width: 400px;
  opacity: 0; /* Inicialmente invisível */
}

.container.expand {
  animation: expandAnimation 1s ease-out forwards; /* Animação de expansão com keyframes */
}


@media (max-width: 1024px) {
  .container {
    padding: 20px;
    max-width: 600px;
  }

  .logo {
    width: 80px;
  }

  .title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 0.9rem;
  }

  .button {
    font-size: 1rem;
    padding: 12px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 15px;
  }

  .logo {
    width: 70px;
  }

  .title {
    font-size: 1.8rem;
  }

  .subtitle {
    font-size: 0.8rem;
  }

  .button {
    font-size: 0.9rem;
    padding: 10px;
  }
}
</style>
