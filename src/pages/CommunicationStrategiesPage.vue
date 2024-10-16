<template>
  <div class="communication-container">
    <div class="title">
      <img
        src="@/assets/comunicacao.png"
        alt="Ícone Estratégias"
        class="title-icon"
      />
      <h1>Estratégias de Comunicação</h1>
    </div>
    <div class="role-selection">
      <div class="role-option" @click="selectRole('Usuário do aparelho')">
        <img
          src="@/assets/user-communication-icon.png"
          alt="Usuário do aparelho"
          class="role-icon"
        />
        <h2>Usuário do aparelho</h2>
      </div>
      <div
        class="role-option"
        @click="selectRole('Parceiro(a) de comunicação')"
      >
        <img
          src="@/assets/partner-icon.png"
          alt="Parceiro(a) de comunicação"
          class="role-icon"
        />
        <h2>Parceiro(a) de comunicação</h2>
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
      icon: "@/assets/communication-strategies-icon.png",
    };
  },
  methods: {
    selectRole(role) {
      this.$router.push(`/communication/${role}`);
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
.communication-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

.title {
  color: #006630;
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

.role-selection {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
}

.role-option {
  font-size: 20px;
  font-weight: 600;
  color:#006630;
  width: 300px;
  height: 300px;
  padding: 10px;
  background-color: #89e0ae;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.role-option:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.role-icon {
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
  transition: transform 0.3s;
}

.role-option:hover .role-icon {
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
