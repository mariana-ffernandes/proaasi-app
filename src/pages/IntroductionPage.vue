<template>
  <div class="introduction-container">
    <div class="title">
      <img
        src="@/assets/introducao.png"
        alt="Ícone Introdução"
        class="title-icon"
      />
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
        <img src="@/assets/logo-proaasi.png" alt="Ícone" class="nav-icon" />
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
  margin-left: 10px;
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
  margin-bottom: 30px;
  color: #05213b;
  font-size: 2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
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
</style>
