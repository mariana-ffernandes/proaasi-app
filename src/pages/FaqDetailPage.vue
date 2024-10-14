<template>
    <div class="faq-detail-container">
      <div class="title">
        <img src="@/assets/faq-icon.png" alt="Ícone Dúvidas" class="title-icon" />
        <h1>Dúvidas Frequentes</h1>
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
          <p>{{ answer }}</p>
        </div>
      </div>
      <div class="navigation-buttons">
        <button class="back-button" @click="goBack">← voltar</button>
        <img src="@/assets/logo-proaasi.png" alt="Ícone" class="nav-icon" />
        <button class="exit-button" @click="exit">Sair</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['question', 'answer', 'videoUrl'],
    methods: {
      goBack() {
        this.$router.push('/faq');
      },
      exit() {
        this.$router.push('/login');
      }
    }
  };
  </script>
  
  <style scoped>
  .faq-detail-container {
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
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
  }
  
  .back-button,
  .exit-button {
    background-color: #f9b1b1;
    color: #05213b;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    border: none;
    padding: 10px 20px;
    margin: 0 20px;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  
  .back-button:hover,
  .exit-button:hover {
    background-color: #e06d6d;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
  
  .nav-icon {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  </style>