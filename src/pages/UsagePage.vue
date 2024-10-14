<template>
    <div class="usage-container">
      <div class="title">
        <img src="@/assets/uso-e-manuseio.png" alt="Ícone Uso" class="title-icon" />
        <h1>Uso e Manuseio do Aparelho</h1>
      </div>
      <div class="devices-menu">
        <div class="device-icons-container">
          <div class="device-option" v-for="device in devices" :key="device.name" @click="selectDevice(device)">
            <img :src="device.icon" :alt="device.name" class="device-icon" />
            <p>{{ device.name }}</p>
          </div>
        </div>
      </div>
  
      <div class="navigation-buttons">
        <button @click="goBack">← voltar</button>
        <img src="@/assets/logo-proaasi.png" alt="Ícone" class="nav-icon" />
        <p>ProAASI</p>
        <button @click="exit">Sair</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        devices: [
          { name: 'Intra-aural', icon: require('@/assets/intra-aural-icon.png') },
          { name: 'Mini Retro com tubo fino', icon: require('@/assets/mini-retro-icon.png') },
          { name: 'Retroauricular com receptor no canal', icon: require('@/assets/retroauricular-receptor-icon.png') },
          { name: 'Retroauricular com molde', icon: require('@/assets/retroauricular-molde-icon.png') }
        ]
      };
    },
    methods: {
      selectDevice(device) {
        this.$router.push(`/usage/${device.name}`);
      },
      goBack() {
        this.$router.push('/dashboard');
      },
      exit() {
        this.$router.push('/login');
      }
    }
  };
  </script>
  
  <style scoped>
  .usage-container {
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
  
  .devices-menu {
    display: flex;
    justify-content: center;
    margin: 30px 0;
  }
  
  .device-icons-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .device-option {
    width: 200px;
    padding: 20px;
    background-color: #ffe0b2;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .device-option:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .device-icon {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
    transition: transform 0.3s;
  }
  
  .device-option:hover .device-icon {
    transform: rotate(10deg);
  }
  
  .navigation-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  color: #05213b;
  font-size: 1.5rem;
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
  padding: 10px 20px;
  margin: 0 20px;
  cursor: pointer;
  box-shadow: 4px 4px 1px #4f0e81;
  transition: background-color 0.3s;
}

.navigation-buttons button:hover {
  background-color: #563d9c;
}

.nav-icon {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
  </style>