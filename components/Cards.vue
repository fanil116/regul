<template>
    <div class="d-flex flex-column align-center">
        <v-select
            v-model="selected"
            label="Select"
            :items="selectItems"
            item-title="name"
            item-value="id"
            single-line
            class="cards__select mb-n10"
            variant="outlined"
            bg-color="#ededed"
            rounded="lg"
        >
            <template v-slot:item="{ props, item }">
                <v-list-item v-bind="props" :disabled="item.raw.disabled" :title="undefined">
                    <template v-slot:append>
                        <v-icon color="#337566" v-if="selected === item.raw.id" icon="mdi-check"></v-icon>
                    </template>
                    <v-list-item-title>
                        {{ item.raw.name }}
                        <span class="text--temple-gray pl-2" v-if="item.raw.quantity">
                        {{ item.raw.quantity }}
                        </span>
                    </v-list-item-title>
                </v-list-item>
            </template>
        </v-select>
        <v-row dense>
            <v-col v-for="(card, i) in cards" :key="i" cols="12" md="3">
                <v-card class="pa-2 mt-10" flat>
                    <v-img
                        :src="`/${card.image}.png`"
                        cover
                        rounded="lg">
                        <v-toolbar height="36" class="ml-2 mt-2" v-if="card.available" color="transparent">
                            <template v-slot:prepend>
                                <div class="d-flex">
                                    <div class="d-flex toolbar__bg mr-1 align-center">
                                        <img src="assets/images/icons/eye.svg" alt="eye">
                                        <p class="text--gray pl-2">{{ card.watching }}</p>
                                    </div>
                                    <div class="d-flex toolbar__bg align-center">
                                        <img src="assets/images/icons/calendar.svg" alt="calendar">
                                        <p class="text--gray pl-2">{{ card.days }}</p>
                                    </div>
                                </div>
                            </template>
                        </v-toolbar>
                    </v-img>
                    <p class="font-17 font-weight-medium mb-2 mt-4">{{ card.price }} <span class="cards__price-text">{{ card.subPriceText }}</span></p>
                    <p class="text-truncate border-b-sm font-weight-medium pb-2">{{ card.name }}</p>
                    <div v-if="card.available">
                        <p class="text-center text--green mt-4" v-if="card.moving">Обьявление продвигается</p>
                        <div v-else :class="{'flex-column': isColumn}" class="d-flex align-center mt-3 justify-space-between " >
                            <p class="font-13 text--temple-gray"  :class="{'pb-2': isColumn}">Увеличьте количество просмотров</p>
                            <v-btn-secondary  class="button--green rounded-lg teal v-btn--teal text-none">
                            Продвигать
                            </v-btn-secondary>
                        </div>
                    </div>
                    <p v-else class="text-center mt-4 text-red">Обьявление скрыто</p>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script setup lang="ts">
    import {ref, onMounted, onUnmounted} from 'vue';
    import type { Card, SelectItem } from '@/types'
    const { data: cards } = await useFetch<Card[]>('/api/cards');
    let selected = ref<number>(1);
    const isColumn = ref<boolean>(false);
    const selectItems: SelectItem[] = [
        {
            id: 1,
            name: 'Все товары и услуги',
            disabled: false
        },
        {
            id: 2,
            name: 'Категория 1',
            disabled: true
        },
        {
            id:3,
            name: 'Гробы',
            quantity: 5,
            disabled: false
        },
        {
            id: 4,
            name: 'Урны',
            quantity: 12,
            disabled: false
        },
        {
            id: 5,
            name: 'Категория 2',
            disabled: true
        },
        {
            id: 6,
            name: 'Тапки',
            quantity: 2,
            disabled: false
        },
        {
            id: 7,
            name: 'Покрывало',
            quantity: 1,
            disabled: false
        },
    ]

    const updateLayout = () => {
        if (window.innerWidth >= 960 && window.innerWidth <= 1280) {
            isColumn.value = true;
        } else {
            isColumn.value = false;
        }
    };
    onMounted(() => {
        updateLayout();
        window.addEventListener('resize', updateLayout);
    });
    onUnmounted(() => {
        window.removeEventListener('resize', updateLayout);
    });
</script>