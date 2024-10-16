<template>
  <div class="detail-container">
    <div class="title">
      <img src="@/assets/uso-e-manuseio.png" alt="Ícone Uso" class="title-icon" />
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
      <img src="@/assets/logo-proaasi.png" alt="Ícone" class="nav-icon" />
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.video-iframe {
  width: 50%;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.text-content {
  width: 45%;
  margin-left: 20px;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 30px 0;
}
</style>