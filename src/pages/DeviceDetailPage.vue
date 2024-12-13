<template>
  <div class="detail-container">
    <div class="title">
      <div class="title-icon-container" @click="goBack" style="cursor: pointer;">
        <div class="icon-background">
          <img src="@/assets/usage-icon.svg" alt="Voltar" class="title-icon" />
        </div>
      </div>
      <h1>{{ option }}</h1>
    </div>
    <div class="content">
      <iframe
        :src="videoUrl"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="video-iframe"
      ></iframe>
      <div class="text-content">
        <p>{{ content }}</p>
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
import deviceContent from '@/device-content-data.json';

export default {
  data() {
    return {
      option: this.$route.params.optionName,
      videoUrl: '',
      content: ''
    };
  },
  created() {
    this.loadContent();
  },
  methods: {
    loadContent() {
      const deviceName = this.$route.params.deviceName;
      const deviceData = deviceContent[deviceName];
      if (deviceData) {
        const optionData = deviceData[this.option];
        if (optionData) {
          this.videoUrl = optionData.videoUrl;
          this.content = optionData.content;
        }
      }
    },
    goBack() {
      this.$router.push(`/usage/${this.$route.params.deviceName}`);
    },
    exit() {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.detail-container {
  text-align: center;
  padding: 40px;
}

.title {
  color: #ac670b;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
}

.title-icon {
  width: 100px;
  transition: transform 0.3s ease;
  }

.title-icon:hover {
  transform: scale(1.1);
}
.video-iframe {
  width: 50%;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.text-content {
  text-align: left;
  font-size: 1.5rem;
  font-weight: 600;
  width: 50%;
  margin-left: 20px;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-content: center;
  margin: 30px 0;
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
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
  }

  .title-icon {
    width: 80px;
    margin-bottom: 10px;
  }

  .header-title {
    font-size: 2rem;
  }

  .content {
    flex-direction: column;
    margin: 20px 0;
  }

  .video-iframe {
    width: 80%;
    height: 300px;
  }

  .text-content {
    width: 80%;
    text-align: left;
    margin-left: 0;
    margin-top: 20px;
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
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
  }

  .title-icon {
    width: 60px;
  }

  .content {
    flex-direction: column;
    margin: 20px 0;
  }

  .video-iframe {
    width: 100%;
    height: 400px;
  }

  .text-content {
    width: 100%;
    font-size: 1.3rem;
    margin-top: 15px;
    text-align: left;
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
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    font-size: 1rem;
  }

  .title-icon {
    width: 100px;
  }

  .content {
    flex-direction: column;
    margin: 15px 0;
  }

  .video-iframe {
    width: 100%;
    height: 400px;
  }

  .text-content {
    width: 100%;
    font-size: 1.1rem;
    margin-top: 10px;
    text-align: left;
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