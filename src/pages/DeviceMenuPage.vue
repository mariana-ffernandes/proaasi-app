<template>
  <div class="device-menu-container">
    <div class="header">
      <div class="title-icon-container" @click="goBack" style="cursor: pointer;">
        <div class="icon-background">
          <img src="@/assets/usage-icon.svg" alt="Voltar" class="title-icon" />
        </div>
        <h1 class="header-title">Uso e Manuseio do Aparelho</h1>
      </div>
      <div class="device-info">
        <img :src="deviceIcon" :alt="deviceName" class="device-info-icon" />
        <h2>{{ deviceName }}</h2>
      </div>
    </div>
    <div class="modules-container">
      <div
        class="module-option"
        v-for="module in modules"
        :key="module.name"
        @click="selectModule(module)"
      >
        <p>{{ module.name }}</p>
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
  props: ["deviceName"],
  data() {
    return {
      devicesData: {
        "Intra-aural": {
          icon: require("@/assets/intra-aural-icon.svg"),
          modules: [
            { name: "Desligar e ligar o aparelho" },
            { name: "Identificar qual aparelho é de cada orelha" },
            { name: "Limpar o aparelho" },
            { name: "Retirar e colocar pilhas" },
            { name: "Trocar o filtro de cera" },
            { name: "Onde guardar o aparelho" },
            { name: "Pilha: tamanho e onde comprar" },
            { name: "Como colocar e retirar o aparelho" },
          ],
        },
        "Miniretroauricular com tubo fino": {
          icon: require("@/assets/receptor-canal-icon.svg"),
          modules: [
            { name: "Desligar e ligar o aparelho" },
            { name: "Limpar a oliva" },
            { name: "Limpar o aparelho" },
            { name: "Limpar o tubo fino" },
            { name: "Retirar e colocar pilhas" },
            { name: "Pilha: tamanho e onde comprar" },
            { name: "Como colocar e retirar o aparelho" },
          ],
        },
        "Miniretroauricular com receptor no canal": {
          icon: require("@/assets/receptor-canal-icon.svg"),
          modules: [
            { name: "Desligar e ligar o aparelho" },
            { name: "Limpar a oliva" },
            { name: "Limpar o aparelho" },
            { name: "Retirar e colocar pilhas" },
            { name: "Pilha: tamanho e onde comprar" },
            { name: "Identificar qual aparelho é de cada orelha" },
            { name: "Onde guardar o aparelho" },
            { name: "Como colocar e retirar o aparelho" },
          ],
        },
        "Miniretroauricular com molde": {
          icon: require("@/assets/com-molde-icon.svg"),
          modules: [
            { name: "Desligar e ligar o aparelho" },
            { name: "Limpar o aparelho" },
            { name: "Limpar o molde" },
            { name: "Retirar e colocar pilhas" },
            { name: "Onde guardar o aparelho" },
            { name: "Identificar qual aparelho é de cada orelha" },
            { name: "Pilha: tamanho e onde comprar" },
            { name: "Como colocar e retirar o aparelho" },
            { name: "Trocar o tubo do molde" },
          ],
        },
      },
    };
  },
  computed: {
    deviceIcon() {
      return this.devicesData[this.deviceName]?.icon || "";
    },
    modules() {
      return this.devicesData[this.deviceName]?.modules || [];
    },
  },
  methods: {
    selectModule(module) {
      this.$router.push(`/usage/${this.deviceName}/${module.name}`);
    },
    goBack() {
      this.$router.push("/usage");
    },
    exit() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.device-menu-container {
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
  transition: transform 0.3s ease;
}

.title-icon:hover {
  transform: scale(1.1);
}

.header-title {
  font-size: 3rem;
  color: #ac670b;
  font-weight: 600;
}

.device-info {
  display: flex;
  align-items: center;
}

.device-info-icon {
  width: 75px;
}

.device-info h2 { 
  font-size: 1.5rem;
  color: #ac670b;
  font-weight: 600;
}

.modules-container {
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  gap: 20px;
  margin: 50px 0;
}

.module-option {
  font-size: 2rem;
  font-weight: 600;
  padding: 30px;
  background-color: #ffe0b2;
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

.module-option:hover {
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

@media (max-width: 1024px) {
  .header {
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }

  .title-icon {
    width: 80px;
    margin-bottom: 10px;
  }

  .header-title {
    font-size: 2rem;
  }

  
  .device-info {
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }

  .device-info h2 {
    font-size: 1.5rem;
  }

  .device-info-icon {
  width: 50px;
}

  .modules-container {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    gap: 15px;
    margin: 30px 0;
  }

  .module-option {
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
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }

  .title-icon {
    width: 60px;
  }

  .header-title {
    font-size: 1.8rem;
  }

  .device-info h2 {
    font-size: 1rem;
  }

  .device-info-icon {
  width: 50px;
}

  .modules-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .module-option {
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
  }

  .title-icon {
    width: 60px;
  }

  .header-title {
    font-size: 1.2rem;
    margin-left: 10px;
  }

  .device-info {
        flex-direction: row;
        align-items: center;
        margin-top: 10px;
        
      }

  .device-info h2 {
    font-size: 1rem;
    margin-left: 10px;
  }

  .device-info-icon {
  width: 50px;
}

  .modules-container {
    grid-template-columns: 1fr;
    gap: 10px;
    margin: 20px 0;
  }

  .module-option {
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
