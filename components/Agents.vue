<template>
    <v-row dense>
        <v-col v-for="(agent, i) in agents" :key="i" cols="12" md="12" class="d-flex align-center pt-3">
            <v-card max-width="560" color="#f5f5f5" flat class="mx-auto d-flex pa-5 align-center">
                <v-img
                width="140"
                height="140"
                :src="`/${agent.image}.png`"
                cover
                rounded>
                </v-img>
                <div class="pl-5">
                    <p class="font-weight-light-bold font-24">{{ agent.name }}</p>
                    <Status class="pt-1 pb-3" :item="agent" />
                    <p class="agent__text multi-line-truncate">{{ agent.text }}</p>
                </div>
            </v-card>
        </v-col>
    </v-row>
</template>
<script setup lang="ts">
    import type { Agent } from '@/types'
    const { data: agents } = await useFetch<Agent[]>('/api/agents');
</script>