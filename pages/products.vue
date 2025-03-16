<template>
    <div>
      <Info />
      <Tabs />
    </div>
  </template>
  
<script setup lang="ts">
  definePageMeta({
      middleware: 'auth'
  });
</script>