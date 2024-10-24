<template>
  <div class="faq-container">
    <div class="title">
      <img src="@/assets/duvidas.png" alt="Ícone Dúvidas" class="title-icon" />
      <h1>Dúvidas Frequentes</h1>
    </div>
    <div class="questions-container">
      <div
        class="question"
        v-for="(item, index) in questions"
        :key="index"
        @click="selectQuestion(item)"
      >
        <p>{{ item.question }}</p>
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
      questions: [
        {
          question:
            "A perda auditiva pode ser corrigida totalmente com aparelhos auditivos?",
          videoUrl: "https://www.youtube.com/embed/jyfTy5KkNDk",
          answer:
            "Os aparelhos auditivos oferecem melhorias significativas na capacidade auditiva, mas não garantem uma restauração completa. A eficácia varia individualmente, sendo importante discutir expectativas realistas durante os atendimentos.",
        },
        {
          question:
            "Os aparelhos auditivos podem ser usados em diferentes ambientes, incluindo locais barulhentos?",
          videoUrl: "https://www.youtube.com/embed/jKR2vNVk9Tk",
          answer:
            "Sim, muitos aparelhos auditivos possuem recursos para lidar com ambientes ruidosos, melhorando a compreensão da fala. O fonoaudiólogo pode ajustar as configurações conforme o necessário.",
        },
        {
          question:
            "Posso participar de atividades físicas e usar aparelhos auditivos ao mesmo tempo?",
          videoUrl: "https://www.youtube.com/embed/Ucqp4P6hMeg",
          answer:
            "Sim, muitos aparelhos auditivos são projetados para serem resistentes à umidade e ao suor. Se você pratica atividades físicas, informe seu fonoaudiólogo para garantir que os aparelhos atendam às suas necessidades específicas.",
        },
        {
          question:
            "Como faço para manter e cuidar dos meus aparelhos auditivos?",
          videoUrl: "https://www.youtube.com/embed/video4",
          answer:
            "A manutenção inclui a limpeza regular, troca de pilhas ou recarga (dependendo do modelo), e seguir as instruções do fabricante. Consulte o fonoaudiólogo para orientações específicas.",
        },
        {
          question:
            "Como saber se você tem perda auditiva e precisa de um aparelho?",
          videoUrl: "https://www.youtube.com/embed/video5",
          answer:
            "Se você enfrenta dificuldades para ouvir conversas, sons cotidianos ou percebe a necessidade de aumentar constantemente o volume de dispositivos de áudio, é recomendável procurar um fonoaudiólogo para realizar uma avaliação audiológica e, assim, determinar se há uma perda auditiva e se ela requer aparelho.",
        },
        {
          question: "Como é o processo de adaptação aos aparelhos auditivos?",
          videoUrl: "https://www.youtube.com/embed/video6",
          answer:
            "O período de adaptação varia, mas é essencial usar os aparelhos regularmente para que seu cérebro se acostume aos novos sons. Paciência e comunicação aberta com o profissional são fundamentais durante esse processo.",
        },
      ],
    };
  },
  methods: {
    selectQuestion(question) {
      this.$router.push({
        name: "FaqDetailPage",
        params: {
          question: question.question,
          answer: question.answer,
          videoUrl: question.videoUrl,
        },
      });
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
.faq-container {
  text-align: center;
  padding: 40px;
  max-width: none;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title {
  color: #920b1f;
  font-size: 2rem;
  font-weight: 600;
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

.questions-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 20px;
  margin: 50px 0;
}

.question {
  font-size: 2rem;
  font-weight: 600;
  padding: 30px;
  background-color: #f9b1b1;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
}

.question:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
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
  .title {
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    margin-left: 0;
  }

  .title-icon {
    width: 120px;
    margin-bottom: 10px;
  }

  .questions-container {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    gap: 20px;
    margin: 40px 0;
  }

  .question {
    font-size: 1.5rem;
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

  .navigation-buttons p {
    font-size: 1.3rem;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 1.5rem;
    align-items: center;
    text-align: center;
    margin-bottom: 15px;
  }

  .title-icon {
    width: 100px;
  }

  .questions-container {
    grid-template-columns: 1fr;
    gap: 20px;
    margin: 30px 0;
  }

  .question {
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

  .navigation-buttons p {
    font-size: 1.2rem;
  }
}


@media (max-width: 480px) {
  .title {
    font-size: 1.2rem;
    align-items: center;
    text-align: center;
    margin-bottom: 10px;
  }

  .title-icon {
    width: 100px;
  }

  .questions-container {
    grid-template-columns: 1fr;
    gap: 15px;
    margin: 20px 0;
  }

  .question {
    font-size: 1.3rem;
    padding: 30px;
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

  .navigation-buttons p {
    font-size: 1rem;
  }
}
</style>
