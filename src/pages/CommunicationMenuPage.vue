<template>
  <div class="menu-container">
    <div class="header">
      <div class="title-icon-container">
        <div class="icon-background">
          <img src="@/assets/comunicacao.png" alt="Ícone Comunicação" class="title-icon" />
        </div>
        <h1 class="header-title">Estratégias de Comunicação - {{ role }}</h1>
      </div>
    </div>
    <div class="options-container">
      <div class="option" v-for="(item, index) in options" :key="index" @click="selectOption(item)">
        <p>{{ item }}</p>
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
import communicationData from '@/communication-strategies-data.json';

export default {
  data() {
    return {
      role: this.$route.params.role,
      options: [],
      icon: '@/assets/communication-strategies-icon.png'
    };
  },
  created() {
    this.loadOptions();
  },
  methods: {
    loadOptions() {
      if (communicationData[this.role]) {
        this.options = Object.keys(communicationData[this.role]);
      }
    },
    selectOption(option) {
      this.$router.push(`/communication/${this.role}/${option}`);
    },
    goBack() {
      this.$router.push('/communication');
    },
    exit() {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.menu-container {
  text-align: center;
  padding: 40px;
  max-width: none;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.title-icon-container {
  display: flex;
  align-items: center;
}

.title-icon {
  width: 150px;
}

.header-title {
  font-size: 3rem;
  color: #0b8043;
  font-weight: 600;
}

.options-container {
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.option {
  font-size: 2rem;
  font-weight: 600;
  padding: 30px;
  background-color: #c2e9c4;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 230px;
}

.option:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.navigation-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
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