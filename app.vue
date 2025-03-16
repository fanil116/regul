<template>
   <div v-if="isMobile" class="mobile-placeholder">
      <p>В задании было указано desktop или mobile, реализован desktop.</p>
    </div>
  <NuxtLayout v-else>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMobile = ref(false);

const checkDevice = () => {
  isMobile.value = window.innerWidth <= 960; 
};

onMounted(() => {
  checkDevice();
  window.addEventListener('resize', checkDevice); 
});

onUnmounted(() => {
  window.removeEventListener('resize', checkDevice);
});
</script>

<style scoped>
.mobile-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  background-color: #f8f8f8;
}
</style>
