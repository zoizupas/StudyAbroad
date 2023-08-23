<template>
    <div class="button-container">
      <p>{{ message }}</p>
      <button @click="changeMessage" class="styled-button">Change Message</button>
      <button @click="goToFacebook" class="styled-button">跳轉到 Facebook 粉絲頁</button>
      <br>
      <a href="/My-theme-mediumish/" class="router-link-active">
        Take me home.
      </a>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'Hello, VuePress!',
      };
    },
    methods: {
      goToFacebook() {
        //  window.location.href = 'https://www.facebook.com/profile.php?id=61550291663330'; 在此頁面開啟
        window.open("https://www.facebook.com/profile.php?id=61550291663330", "_blank");
      },
      changeMessage() {
        this.message = 'VuePress is awesome!';
      },
    },
  };
  </script>
  
  <style scoped lang="stylus">
  .button-container
    text-align center
    margin-top 20px
    font-size 18px
  
  .styled-button
    background-color #3498db
    color white
    border none
    padding 10px 20px
    cursor pointer
    border-radius 5px
    font-size 16px
    margin 5px
    transition background-color 0.3s
  
  .styled-button:hover
    background-color #2675c8
  
  .router-link-active
    margin-top 20px
  </style>
  