<template>
    <div class="d-flex flex-column align-center">
        <img :src="`/${info.logo}.png`" alt="Logo" class="pb-6">
        <p class="font-24 font-weight-light-bold">{{ info.name }}</p>
        <Status class="pt-3" :item="rating" />
        <v-btn-secondary  class=" mt-3 button--green rounded-lg teal v-btn--teal text-none">
            Показать номер телефона
        </v-btn-secondary>
    </div>
  </template>
  
<script setup lang="ts">
    import type { Rating, Info } from '@/types'
    const { data: info } = await useFetch<Info>('/api/info');
    const { data: rating } = await useFetch<Rating>('/api/rating');
</script>