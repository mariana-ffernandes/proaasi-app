<template>
  <div class="login-page">
    <div class="login-container">
      <img src="@/assets/proAASI-icon.svg" alt="ProAASI" class="logo" />
      <h2>Cadastrar Nova Senha</h2>
      <form @submit.prevent="login">
        <div class="input-group">
          <label>Nova Senha</label>
          <input type="password" v-model="password" />
        </div>
        <div class="input-group">
          <label>Confirmar Nova Senha</label>
          <input type="password" v-model="password" />
        </div>
        <div>
          <router-link to="/register" class="extra-button"
            >Não tenho cadastro</router-link
          >
        </div>
        <button type="submit" class="login-button">Iniciar sessão</button>
      </form>
      <button @click="goBack" class="back-button">
        Voltar para a página inicial
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      cpf: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("CPF:", this.cpf, "Senha:", this.password);
    },
    goBack() {
      this.$router.push("/");
    },
    formatCpf() {
      let cpf = this.cpf.replace(/\D/g, "").slice(0, 11);
      if (cpf.length > 3) cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
      if (cpf.length > 7) cpf = cpf.replace(/(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
      if (cpf.length > 11)
        cpf = cpf.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
      this.cpf = cpf;
    },
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;
}

.login-container {
  background-color: #f0f0f0;
  padding: 40px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.logo {
  width: 120px;
  margin-bottom: 20px;
}

h2 {
  color: #2e5075;
  margin-bottom: 20px;
}

.input-group {
  color: #05213b;
  margin: 15px 0;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
}

.login-button {
  background-color: #2e5075;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
}

.extra-links {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.extra-button {
  color: #2e5075;
  text-decoration: underline;
}

.back-button {
  margin-top: 20px;
  background-color: #2e5075;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
