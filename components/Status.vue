<template>
    <div class="d-flex ga-1 align-center">
        <div v-if="item.premium" class="d-flex align-center ga-1 ">
            <img src="assets/images/icons/Premium.svg" alt="Premium">
            <p class="teal">Документы проверены</p>
        </div>
        <div v-if="item.rating" class="d-flex align-center ga-1 ">
            <v-icon v-if="item.premium" size="8">mdi-circle</v-icon>
            <img width="16" height="16" src="assets/images/icons/star.svg" alt="star" class="mt-n1">
            <p>{{ item.rating }}</p>
        </div>
        <div class="d-flex align-center ga-1 ">
            <v-icon size="8">mdi-circle</v-icon>
            <p>
                <span v-if="item.reviews">{{ item.reviews }}</span> 
                <span v-else>Нет</span>
                отзывов</p>
        </div>
    </div>
</template>
<script setup lang="ts">
    import type { PropType } from 'vue'
    import type { Rating, Agent } from '@/types'
    const props = defineProps({
        item: {
            type: Object as PropType<Rating | Agent>,
            required: true,
        }
    });
</script>