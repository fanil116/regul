<template>
    <v-card class="mt-8" elevation="0">
      <v-tabs
        v-model="tab"
        align-tabs="center"
      >
        <v-tab selected-class="tab--selected" :value="'Cards'">Товары и услуги</v-tab>
        <v-tab class="mx-2" selected-class="tab--selected" :value="'Agents'">Агенты <span class="text-disabled pl-1">19</span></v-tab>
        <v-tab selected-class="tab--selected" :value="'About'">О компании</v-tab>
      </v-tabs>
  
      <v-tabs-window v-model="tab" class="pb-10">
        <v-tabs-window-item
          v-for="item in items"
          :key="item.tab"
          :value="item.tab"
        >
            <v-container fluid class="border-t-sm mt-8">
                <component :is="item.content" />
            </v-container>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card>
  </template>
  <script setup>
    import { ref } from 'vue'
    import Cards from '@/components/Cards.vue'
    import Agents from '@/components/Agents.vue'
    import About from '@/components/About.vue'
    const tab = ref('Cards')
    const items= [
        { tab: 'Cards', content: Cards },
        { tab: 'Agents', content: Agents },
        { tab: 'About', content: About }
      ]
  </script>