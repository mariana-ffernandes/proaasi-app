<template>
  <div class="device-menu-container">
    <div class="header">
      <div class="title-icon-container">
        <div class="icon-background">
          <img src="@/assets/uso-e-manuseio.png" alt="deviceName" class="title-icon" />
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
        <img src="@/assets/logo-proaasi.png" alt="Ícone" class="nav-icon" />
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
          icon: require("@/assets/intra-aural-icon.png"),
          modules: [
            { name: "Desligar e ligar o aparelho" },
            { name: "Identificar qual aparelho é de cada orelha" },
            { name: "Limpar o aparelho" },
            { name: "Retirar e colocar pilhas" },
            { name: "Trocar o filtro de cera" },
            { name: "Onde guardar o aparelho" },
            { name: "Pilha: tamanho e onde comprar" },
            { name: "Colocar e retirar o aparelho" },
          ],
        },
        "Miniretroauricular com tubo fino": {
          icon: require("@/assets/mini-retro-icon.png"),
          modules: [
            { name: "Desligar e ligar o aparelho" },
            { name: "Limpar a oliva" },
            { name: "Limpar o aparelho" },
            { name: "Limpar o tubo fino" },
            { name: "Retirar e colocar pilhas" },
            { name: "Pilha: tamanho e onde comprar" },
            { name: "Colocar e retirar o aparelho" },
          ],
        },
        "Miniretroauricular com receptor no canal": {
          icon: require("@/assets/retroauricular-receptor-icon.png"),
          modules: [
            { name: "Desligar e ligar o aparelho" },
            { name: "Limpar a oliva" },
            { name: "Limpar o aparelho" },
            { name: "Retirar e colocar pilhas" },
            { name: "Pilha: tamanho e onde comprar" },
            { name: "Identificar qual aparelho é de cada orelha" },
            { name: "Onde guardar o aparelho" },
            { name: "Colocar e retirar o aparelho" },
          ],
        },
        "Miniretroauricular com molde": {
          icon: require("@/assets/retroauricular-molde-icon.png"),
          modules: [
            { name: "Desligar e ligar o aparelho" },
            { name: "Limpar o aparelho" },
            { name: "Limpar o molde" },
            { name: "Retirar e colocar pilhas" },
            { name: "Onde guardar o aparelho" },
            { name: "Identificar qual aparelho é de cada orelha" },
            { name: "Pilha: tamanho e onde comprar" },
            { name: "Colocar e retirar o aparelho" },
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
  width: 100px;
}

.device-info h2 {
  font-size: 2rem;
  color: #ac670b;
}

.modules-container {
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  gap: 20px;
  margin: 50px 0;
}

.module-option {
  font-size: 2.5rem;
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
