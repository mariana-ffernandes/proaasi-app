<template>
  <div class="usage-container">
    <div class="title">
      <img
        src="@/assets/uso-e-manuseio.png"
        alt="Ícone Uso"
        class="title-icon"
      />
      <h1>Uso e Manuseio do Aparelho</h1>
    </div>
    <div class="devices-menu">
      <div class="device-icons-container">
        <div
          class="device-option"
          v-for="device in devices"
          :key="device.name"
          @click="selectDevice(device)"
        >
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
        { name: "Intra-aural", icon: require("@/assets/intra-aural-icon.png") },
        {
          name: "Miniretroauricular com tubo fino",
          icon: require("@/assets/mini-retro-icon.png"),
        },
        {
          name: "Miniretroauricular com receptor no canal",
          icon: require("@/assets/retroauricular-receptor-icon.png"),
        },
        {
          name: "Miniretroauricular com molde",
          icon: require("@/assets/retroauricular-molde-icon.png"),
        },
      ],
    };
  },
  methods: {
    selectDevice(device) {
      this.$router.push(`/usage/${device.name}`);
    },
    goBack() {
      this.$router.push("/dashboard");
    },
    exit() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.usage-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

.title {
  color: #ac670b;
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

.devices-menu {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}

.device-icons-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
}

.device-option {
  font-size: 1.7rem;
  font-weight: 600;
  color: #ac670b;
  width: 300px;
  height: 300px;
  padding: 10px;
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
  width: 150px;
  height: 150px;
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
  margin: 0 20px;
}

.navigation-buttons button:hover {
  background-color: #820ec7;
  color: #ffffff;
  box-shadow: 4px 4px 1px #bd7dee;
}

.nav-icon {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.navigation-buttons p {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #315d83;
  align-self: center;
}
</style>
