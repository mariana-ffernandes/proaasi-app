<template>
  <div class="module-container">
    <div class="header">
      <div class="title">
        <div
          class="title-icon-container"
          @click="goBack"
          style="cursor: pointer"
        >
          <div class="icon-background">
            <img
              src="@/assets/introduction-icon.svg"
              alt="Voltar"
              class="title-icon"
            />
          </div>
        </div>
        <h1>Introdução ao Conteúdo</h1>
      </div>
      <iframe
        :src="moduleVideo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="video-iframe"
      ></iframe>
    </div>

    <div class="content" v-html="moduleContent"></div>

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
      moduleNumber: this.$route.params.moduleNumber,
      moduleContent: "",
      moduleVideo: "",
    };
  },
  methods: {
    loadModuleContent() {
      if (this.moduleNumber == 1) {this.moduleContent = `
<p>A Orelha é o órgão responsável pela audição: a capacidade do ser humano de perceber sons. A Orelha é dividida em três partes: orelha externa, orelha média e orelha interna.</p>
<p>A Perda Auditiva ocorre quando há uma lesão em algum órgão da orelha, diminuindo nossa capacidade de ouvir os sons.</p>
<p>Há três tipos de perda auditiva:
<ul> 
    <li>A perda auditiva condutiva ocorre quando a orelha média é afetada.</li>
    <li>A perda auditiva sensorioneural ocorre quando a orelha interna é afetada.</li>
    <li>A perda auditiva mista ocorre quando tanto a orelha média (condução), quanto a interna (sensação), são afetadas.</li>
 </ul> 
<p>E como saber se eu estou com perda auditiva? Os comportamentos mais comuns em quem tem perda auditiva são: Pedir repetição do que foi dito; Reclamar que as pessoas falam rápido ou baixo; Ter dificuldade em compreender a fala quando há muito barulho; Achar difícil entender o que estão falando quando várias pessoas falam ao mesmo tempo; Não responder corretamente às perguntas ou simplesmente não responder.</p>
<p>É importante que você, seus familiares e cuidadores adquiram conhecimentos sobre os cuidados básicos associados ao aparelho auditivo, permitindo que, com o tempo, você alcance maior independência e retome suas atividades diárias.</p>`;
        this.moduleVideo = "https://www.youtube.com/embed/UX1d8-r2Kjs";
      } else if (this.moduleNumber == 2) {
        this.moduleContent = `<p>O aparelho auditivo, também conhecido como aparelho de amplificação sonora individual (AASI), é um dispositivo eletrônico miniaturizado, cuja função é amplificar, aumentar os sons. O aparelho auditivo ajuda as pessoas a ouvirem melhor, aumentando os sons que existem no ambiente de acordo com a necessidade do paciente.</p>
<p>Benefícios do AASI: Melhoria significativa na percepção de sons e na comunicação; Ajustes personalizados, o aparelho atende às necessidades auditivas individuais, adaptando-se às preferências e estilo de vida do usuário; Aumento da Qualidade de Vida ao restaurar a audição; Redução do Esforço Auditivo, proporcionando clareza na audição e reduzindo a fadiga associada à concentração prolongada.</p>
Para escolher o aparelho auditivo certo para o paciente, avaliam-se vários critérios como: o diagnóstico audiológico, a qualidade de vida e as preferências do paciente.
<p>É importante que você, seus familiares e cuidadores adquiram conhecimentos sobre os cuidados básicos associados ao aparelho auditivo, permitindo que, com o tempo, você alcance maior independência e retome suas atividades diárias.</p>`;
        this.moduleVideo = "https://www.youtube.com/embed/nlb5rrgOSMY";
      }
    },
    goBack() {
      this.$router.push("/introduction");
    },
    exit() {
      this.$router.push("/");
    },
  },
  mounted() {
    this.loadModuleContent();
  },
};
</script>

<style scoped>
.module-container {
  text-align: center;
  padding: 40px;
}

.title {
  color: #007b7f;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  font-size: 1.6rem;
}

.title-icon {
  width: 100px;
  transition: transform 0.3s ease;
}

.title-icon:hover {
  transform: scale(1.1);
}

.video-iframe {
  position: absolute;
  top: 40px;
  right: 40px;
  background-color: #007b7f;
  width: 340px;
  height: 190px;
  padding: 10px;
  border-radius: 10px;
  color: #ffffff;
  font-weight: bold;
}

.content {
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  margin: 120px 40px 40px 40px;
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

@media (max-width: 1024px) {
  .module-container {
    padding: 30px;
  }

  .title {
    font-size: 1.4rem;
    margin-bottom: 15px;
    justify-content: center;
    text-align: center;
  }

  .title-icon {
    width: 150px;
    margin-right: 15px;
  }

  .video-iframe {
    position: relative;
    width: 480px;
    height: 270px;
    margin: 20px auto;
    margin-left: 100px;
    margin-bottom: 40px;
  }

  .content {
    font-size: 18px;
    padding: 15px;
  }

  .navigation-buttons {
    flex-direction: row;
    gap: 10px;
    font-size: 1.5rem;
  }

  .navigation-buttons button {
    padding: 10px 15px;
    font-size: 0.9rem;
    margin: 10px 0;
  }

  .nav-icon {
    width: 35px;
    height: 35px;
  }

  .navigation-buttons p {
    font-size: 1.3rem;
  }
}

@media (max-width: 768px) {
  .module-container {
    padding: 20px;
  }

  .title {
    font-size: 1.2rem;
    margin-bottom: 10px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .title-icon {
    width: 120px;
  }

  .video-iframe {
    position: relative;
    width: 100%;
    height: 200px;
    max-width: 320px;
    margin: 20px 0;
    margin-left: 80px;
    margin-bottom: 40px;
  }

  .content {
    font-size: 1.2rem;
    padding: 10px;
  }

  .navigation-buttons {
    flex-direction: row;
    gap: 5px;
  }

  .navigation-buttons button {
    padding: 8px 12px;
    font-size: 1rem;
    width: 100px;
  }

  .nav-icon {
    width: 30px;
    height: 30px;
  }

  .navigation-buttons p {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .module-container {
    padding: 15px;
  }

  .title {
    font-size: 1rem;
    margin-bottom: 10px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .title-icon {
    width: 80px;
    margin-bottom: 10px;
  }

  .video-iframe {
    position: relative;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 40px;
    margin-left: 60px;
  }

  .content {
    font-size: 1rem;
    padding: 10px;
  }

  .navigation-buttons {
    justify-content: center;
    flex-direction: row;
    gap: 10px;
  }

  .navigation-buttons button {
    width: 80px;
    padding: 6px 10px;
    font-size: 0.8rem;
  }

  .nav-icon {
    width: 25px;
    height: 25px;
  }

  .navigation-buttons p {
    font-size: 1rem;
  }
}
</style>
