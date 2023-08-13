<template>
    <div>
      <button @click="showPrice">顯示價格</button>
      <button @click="goToFacebook">點我到粉絲頁</button>
      <button disabled>待補充</button>
      <div v-if="showImage">
        <img src="../public.assets/logo.png" alt="A Image">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyButton',
    data() {
      return {
        showImage: false,
      };
    },
    methods: {
      showPrice() {
        this.showImage = true;
      },
      goToFacebook() {
        window.location.href = "https://www.facebook.com/profile.php?id=61550291663330";
      },
    },
  };
  </script>
  