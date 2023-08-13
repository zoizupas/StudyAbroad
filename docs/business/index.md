---
title: Business Home
---

<style>
.stylized-button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  margin: 5px;
}

.disabled-button {
  background-color: #ccc;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: not-allowed;
  border-radius: 5px;
  font-size: 16px;
  margin: 5px;
}

.stylized-image {
  max-width: 100%;
}
</style>

<template>
  <div>
    <button @click="showPrice" class="stylized-button">顯示價格</button>
    <button @click="goToFacebook" class="stylized-button">點我到粉絲頁</button>
    <button disabled class="disabled-button">待補充</button>
    <div v-if="showImage">
      <img src="../public/assets/logo.png" alt="A Image" class="stylized-image">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showImage = ref(false);

const showPrice = () => {
  showImage.value = true;
};

const goToFacebook = () => {
  window.location.href = "https://www.facebook.com/profile.php?id=61550291663330";
};
</script>

# Welcome to the Business Section

This is the homepage of our business section. Here, you can find information about our company's products, services, and more.

<MyButton />

[Goto Display Page](./display.md)
