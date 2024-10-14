<template>
    <div class="menu-container">
      <div class="title">
        <img src="@/assets/comunicacao.png" alt="Ícone Comunicação" class="title-icon" />
        <h1>{{ role }}</h1>
      </div>
      <div class="options-container">
        <div class="option" v-for="(item, index) in options" :key="index" @click="selectOption(item)">
          <p>{{ item }}</p>
        </div>
      </div>
      <div class="navigation-buttons">
        <button @click="goBack">← voltar</button>
        <img src="@/assets/logo-proaasi.png" alt="Ícone" class="nav-icon" />
        <button @click="exit">Sair</button>
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
  }
  
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .title-icon {
    width: 60px;
    margin-right: 10px;
  }
  
  .options-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 30px 0;
  }
  
  .option {
    padding: 20px;
    background-color: #c2e9c4;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .option:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .navigation-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    color: #05213b;
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
  }
  
  .navigation-buttons button {
    background-color: #ffffff;
    color: #05213b;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    border: none;
    padding: 10px 20px;
    margin: 0 20px;
    cursor: pointer;
    box-shadow: 4px 4px 1px #4f0e81;
    transition: background-color 0.3s;
  }
  
  .navigation-buttons button:hover {
    background-color: #3b8f5d;
  }
  
  .nav-icon {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  </style>