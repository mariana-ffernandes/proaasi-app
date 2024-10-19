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
  justify-content: space-around;
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

/* Notebooks e Tablets (1024px - 769px) */
@media (max-width: 1024px) {
  .header {
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }

  .title-icon {
    width: 120px;
    margin-bottom: 10px;
  }

  .header-title {
    font-size: 2.5rem;
  }

  .options-container {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }

  .option {
    font-size: 1.8rem;
    padding: 20px;
    height: 200px;
  }

  .navigation-buttons {
    flex-direction: row;
    gap: 15px;
  }

  .navigation-buttons button {
    padding: 10px 15px;
    font-size: 0.9rem;
  }

  .nav-icon {
    width: 30px;
    height: 30px;
  }

  .nav-middle p {
    font-size: 1.3rem;
  }
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
  }

  .title-icon {
    width: 100px;
  }

  .header-title {
    font-size: 2rem;
  }

  .options-container {
    grid-template-columns: 1fr;
    gap: 20px;
    margin: 20px 0;
  }

  .option {
    font-size: 1.6rem;
    padding: 15px;
    height: 180px;
  }

  .navigation-buttons {
    flex-direction: row;
    gap: 10px;
  }

  .navigation-buttons button {
    padding: 8px 12px;
    font-size: 0.85rem;
  }

  .nav-icon {
    width: 25px;
    height: 25px;
  }

  .nav-middle p {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .header {
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }

  .title-icon {
    width: 80px;
  }

  .header-title {
    font-size: 1.8rem;
  }

  .options-container {
    grid-template-columns: 1fr;
    gap: 15px;
    margin: 15px 0;
  }

  .option {
    font-size: 1.4rem;
    padding: 10px;
    height: 150px;
  }

  .navigation-buttons {
    flex-direction: row;
    gap: 10px;
  }

  .navigation-buttons button {
    padding: 6px 10px;
    font-size: 0.8rem;
  }

  .nav-icon {
    width: 20px;
    height: 20px;
  }

  .nav-middle p {
    font-size: 1rem;
  }
}
</style>