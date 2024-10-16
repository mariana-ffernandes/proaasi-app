<template>
    <div class="detail-container">
      <div class="title">
        <img src="@/assets/comunicacao.png" alt="Ícone Estratégias" class="title-icon" />
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
  import communicationData from '@/communication-strategies-data.json';
  
  export default {
    data() {
      return {
        role: this.$route.params.role,
        option: this.$route.params.option,
        videoUrl: '',
        content: ''
      };
    },
    created() {
      this.loadContent();
    },
    methods: {
      loadContent() {
        const roleData = communicationData[this.role];
        if (roleData && roleData[this.option]) {
          this.videoUrl = roleData[this.option].videoUrl;
          this.content = roleData[this.option].content;
        }
      },
      goBack() {
        this.$router.push(`/communication/${this.role}`);
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
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .title-icon {
    width: 60px;
    margin-right: 10px;
  }
  
  .content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 30px 0;
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
  
  .navigation-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    color: #05213b;
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
  }
  
  .navigation-buttons button {
    background-color: #ffffff;
    color: #05213b;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    border: none;
    padding: 10px 20px;
    margin: 0 20px;
    cursor: pointer;
    box-shadow: 4px 4px 1px #4f0e81;
    transition: background-color 0.3s;
  }
  
  .navigation-buttons button:hover {
    background-color: #ebebeb;
  }
  
  .nav-icon {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  </style>