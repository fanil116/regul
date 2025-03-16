<template>
    <div class="mt-8 about d-flex flex-column align-center mx-auto">
        <div class="pl-4">
            <p class="font-weight-light-bold font-24">О компании</p>
            <p class="font-17 mb-8">Копкой занимаемся 15 лет. Все началось с хобби и плавно переросло в любимую работу. Работаем с профессиональной техникой. </p>
        </div>
        <v-select
            label="Режим работы"
            v-model="select"
            class="w-100 mb-2 about__select"
            rounded="lg"
            disabled>
        </v-select>
        <div class="d-flex align-center w-100 pl-4 justify-space-between">
            <div class="about__map mr-5">
                <p class="font-weight-light-bold font-24 mb-2">Местоположение</p>
                <p class="font-17 text--green">Ростов на Дону, Воронежская ул., 42А корп. 1</p>
            </div>
            <v-img class="rounded-t-lg rounded-be-lg ml-auto" width="200" height="132" src="assets/images/map.png" cover>
            </v-img>
        </div>
    </div>
</template>
<script setup lang="ts">
    import {ref} from 'vue'
    let select = ref<string>("Сегодня с 8:00 до 23:00");
</script>