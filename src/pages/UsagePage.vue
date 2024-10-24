<template>
  <div class="usage-container">
    <div class="title">
      <img
        src="@/assets/usage-icon.svg"
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
      <img src="@/assets/proAASI-icon.svg" alt="Ícone" class="nav-icon" />
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
        { name: "Intra-aural", icon: require("@/assets/intra-aural-icon.svg") },
        {
          name: "Miniretroauricular com tubo fino",
          icon: require("@/assets/receptor-canal-icon.svg"),
        },
        {
          name: "Miniretroauricular com receptor no canal",
          icon: require("@/assets/receptor-canal-icon.svg"),
        },
        {
          name: "Miniretroauricular com molde",
          icon: require("@/assets/com-molde-icon.svg"),
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
  background-color: #ffffff;
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
  width: 200px;
}

.devices-menu {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}

.device-icons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
}

.device-option {
  font-size: 1.5rem;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.device-option:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.device-icon {
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
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

  .device-icons-container {
    gap: 20px;
    justify-content: center;
  }

  .device-option {
    width: 250px;
    height: 250px;
    font-size: 1.6rem;
  }

  .device-icon {
    width: 120px;
    height: 120px;
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

  .navigation-buttons p {
    font-size: 1.3rem;
  }
}

/* Celulares Grandes (768px - 481px) */
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

  .device-icons-container {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .device-option {
    width: 220px;
    height: 220px;
    font-size: 1.4rem;
  }

  .device-icon {
    width: 100px;
    height: 100px;
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

  .navigation-buttons p {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.2rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 20px 0;
  }

  .title-icon {
    width: 80px;
  }

  .device-icons-container {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .device-option {
    width: 180px;
    height: 180px;
    font-size: 1rem;
    padding: 8px;
  }

  .device-icon {
    width: 80px;
    height: 80px;
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

  .navigation-buttons p {
    font-size: 1rem;
  }
}
</style>
