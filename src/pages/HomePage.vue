<template>
  <div class="home-page">
    <div class="content-container">
      <div class="left-side">
        <div class="header-container">
          <div class="logo-container">
            <img
              src="@/assets/logo-proaasi.png"
              alt="ProAASI Logo"
              class="logo"
            />
          </div>
          <h1 class="title">Pro<br />AASI</h1>
        </div>
        <p class="subtitle">
          Programa de Orientação e Adaptação do Aparelho de Amplificação Sonora
          Individual
        </p>
      </div>
      <div class="right-side">
        <div class="buttons-wrapper">
          <div class="buttons-container">
            <router-link to="/login" class="button">Entrar</router-link>
            <router-link to="/register" class="button">Cadastrar</router-link>
            <router-link to="/about" class="button"
              >Sobre o ProAASI</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("@/assets/background-proaasi.jpg") no-repeat center center;
  background-size: cover;
  padding: 20px;
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
}

.left-side {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1;
}

.header-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.logo {
  width: 200px;
}

.title {
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  font-size: 6rem;
  font-weight: 500;
  line-height: 1;
}

.subtitle {
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  font-size: 1.7rem;
  font-weight: 600;
  text-align: center;
  max-width: 80%;
}

.right-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.buttons-container {
  width: 35rem;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4376a3;
  padding: 30px;
  border-radius: none;
}

.button {
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: #000000;
  margin: 10px 0;
  width: 80%;
  max-width: 30rem;
  padding: 20px;
  background-color: #ffffff;
  border: none;
  box-shadow: 5px 6px 1px 1px #05213b;
  cursor: pointer;
  text-align: center;
}

.button:hover {
  background-color: #d6d6d6;
  color: #333;
}

/* tablet */
@media (max-width: 1024px) {
  .content-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
  }

  .header-container {
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: center;
  }

  .left-side {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    flex: 1;
    margin-bottom: 300px;
  }

  .logo {
    width: 120px;
  }

  .title {
    font-size: 4rem;
  }

  .subtitle {
    font-size: 1.5rem;
    max-width: 90%;
  }

  .right-side {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
    background-color: #4376a3;
  }

  .buttons-container {
    width: 100%;
    max-width: 400px;
    padding: 15px;
    box-shadow: none;
  }

  .button {
    font-size: 1.4rem;
    padding: 15px;
    width: 120%;
    max-width: 300px;
    margin: 10px 0;
  }
}

/* celular */
@media (max-width: 480px) {
  .content-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10px;
  }

  .header-container {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .left-side {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    flex: 1;
    margin-bottom: 300px;
  }

  .logo {
    width: 120px;
  }

  .title {
    font-size: 4rem;
    font-weight: 600;
    align-self: center;
  }

  .subtitle {
    font-size: 1.5rem;
    max-width: 95%;
  }

  .right-side {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
    background-color: #4376a3;
  }

  .buttons-container {
    width: 100%;
    padding: 10px;
    box-shadow: none;
  }

  .button {
    font-size: 1.8rem;
    padding: 12px;
    width: 120%;
  }
}
</style>
