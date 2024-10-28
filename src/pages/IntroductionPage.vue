<template>
  <div class="introduction-container">
    <div class="title">
      <div class="title-icon-container">
        <div class="icon-background">
          <img src="@/assets/introduction-icon.svg" alt="Voltar" class="title-icon" />
        </div>
      </div>
      <h1>Introdução ao Conteúdo</h1>
    </div>
    <div class="modules-container">
      <div class="module" @click="navigateToModule(1)">
        <h3>Módulo 1:</h3>
        <ul>
          <li>1. O que é audição?</li>
          <li>2. Como nós escutamos os sons?</li>
          <li>3. O que é perda auditiva?</li>
          <li>4. Quais os tipos de perdas auditivas?</li>
          <li>
            5. Quais os comportamentos mais comuns que a pessoa com perda auditiva
            possui?
          </li>
        </ul>
      </div>

      <div class="module" @click="navigateToModule(2)">
        <h3>Módulo 2:</h3>
        <ul>
          <li>1. Para que serve o aparelho auditivo?</li>
          <li>2. Benefícios do aparelho auditivo</li>
          <li>3. Como escolher o aparelho auditivo</li>
        </ul>
      </div>
    </div>

    <div class="navigation-buttons">
      <button @click="goBack">← voltar</button>
      <div class="nav-middle">
        <img src="@/assets/proAASI-icon.svg" alt="Ícone" class="nav-icon" />
        <p>ProAASI</p>
      </div>
      <button @click="exit">sair</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToModule(moduleNumber) {
      this.$router.push(`/introduction/module${moduleNumber}`);
    },
    goBack() {
      this.$router.push("/dashboard");
    },
    exit() {
    },
  },
};
</script>

<style scoped>
.introduction-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

.title {
  color: #0a8e7b;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
  margin-top: 50px;
  margin-left: 50px;
}

.title-icon {
  width: 150px;
}

.modules-container {
  text-align: left;
  display: flex;
  justify-content: center;
  gap: 60px;
  margin: 30px 0;
}

.module {
  background-color: #aaf0e6;
  font-weight: 600;
  font-size: 20px;
  padding: 20px;
  border-radius: 10px;
  width: 40%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.2s;
}

.module:hover {
  transform: scale(1.05);
}

.module h3 {
  color: #007b7f;
  font-size: 30px;
  margin-bottom: 10px;
}

.module ul {
  list-style-type: none;
  padding: 0;
}

.module li {
  margin: 10px 0;
  font-size: 1.1em;
}

.navigation-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #05213b;
  font-size: 2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  margin-bottom: 30px;
  margin-top: 20px; 
  padding-bottom: 20px;
}

.navigation-buttons button {
  background-color: #ffffff;
  color: #05213b;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  box-shadow: 4px 4px 1px #4f0e81;
  transition: background-color 0.3s;
}

.navigation-buttons button:hover {
  background-color: #820ec7;
  color: #ffffff;
  box-shadow: 4px 4px 1px #bd7dee;
}

.nav-middle {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
}

.nav-icon {
  width: 40px;
  height: 40px;
}

.nav-middle p {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #315d83;
  align-self: center;
}

/* Notebooks e Tablets (1024px - 769px) */
@media (max-width: 1024px) {
  .title {
    font-size: 1.8rem;
    margin-left: 20px;
    justify-content: center;
  }

  .title-icon {
    width: 120px;
    margin-right: 15px;
  }

  .modules-container {
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin: 20px 0;
  }

  .module {
    width: 60%;
    font-size: 18px;
    padding: 15px;
  }

  .module h3 {
    font-size: 25px;
  }

  .navigation-buttons {
    flex-direction: row;
    gap: 15px;
  }

  .navigation-buttons button {
    padding: 10px 15px;
    font-size: 0.9rem;
  }

  .nav-middle p {
    font-size: 1.3rem;
  }

  .nav-icon {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 1.5rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-left: 0;
  }

  .title-icon {
    width: 100px;
    margin-bottom: 10px;
  }

  .modules-container {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 20px 0;
  }

  .module {
    width: 80%;
    font-size: 16px;
    padding: 15px;
  }

  .module h3 {
    font-size: 22px;
  }

  .navigation-buttons {
    flex-direction: row;
    gap: 10px;
  }

  .navigation-buttons button {
    padding: 8px 12px;
    font-size: 0.85rem;
  }

  .nav-middle p {
    font-size: 1.2rem;
  }

  .nav-icon {
    width: 25px;
    height: 25px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.2rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 30px 0;
  }

  .title-icon {
    width: 100px;
  }

  .modules-container {
    flex-direction: inherit;
    align-items: center;   
    gap: 30px;
    margin: 20px 0;
    max-height: max-content;
  }

  .module {
    width: 80%;
    font-size: 1rem;
    padding: 20px;
    max-width: 400px;
  }

  .module h3 {
    font-size: 20px;
  }

  .navigation-buttons {
    flex-direction:row;
    gap: 10px;
  }

  .navigation-buttons button {
    padding: 6px 10px;
    font-size: 0.8rem;
  }

  .nav-middle p {
    font-size: 1rem;
  }

  .nav-icon {
    width: 20px;
    height: 20px;
  }
}
</style>
