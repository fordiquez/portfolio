<script setup>
import { defineComponent, reactive } from 'vue';

defineComponent({
    name: 'Timelines',
});

const timelines = reactive([
    {
        id: 0,
        icon: 'mdi-book-education',
        color: 'cyan lighten-1',
        title: 'Petro Mohyla Black Sea National University',
        position: 'Software Engineer',
        period: 'SEP 2018 — JUN 2022',
        description: 'Bachelor of Software Engineer',
    },
    {
        id: 1,
        icon: 'mdi-briefcase-variant',
        color: 'amber darken-1',
        title: 'FluidWeb',
        position: 'Trainee',
        period: 'JUN — AUG 2021',
        description: 'Building landing pages and E2E testing with Cypress.js',
    },
    {
        id: 2,
        icon: 'mdi-briefcase-variant',
        color: 'blue-darken-3',
        title: 'TrackEnsure',
        position: 'Data Specialist',
        period: 'AUG 2021 — MAY 2022',
        description: 'Working with data on logistics transactions',
    },
    {
        id: 3,
        icon: 'mdi-briefcase-variant',
        color: 'blue-grey',
        title: 'Moonion',
        position: 'PHP Back-end developer',
        period: 'JUN — SEP 2022',
        description: 'Adding new features to an existing e-commerce',
    },
    {
        id: 4,
        icon: 'mdi-briefcase-variant',
        color: 'deep-orange-lighten-1',
        title: 'TuneLab',
        position: 'Full-stack web developer',
        period: 'DEC 2022 — NOWADAYS',
        description: 'Building and modifying Laravel & Vue.js projects',
    },
]);
</script>

<template>
    <div class="timeline mt-5">
        <h5 class="text-h5 text-uppercase text-center text-deep-purple-accent-1">Education & work</h5>
        <v-timeline class="mt-5">
            <v-timeline-item
                v-for="timeline in timelines"
                :key="timeline.id"
                :dot-color="timeline.color"
                :icon="timeline.icon"
                size="large"
            >
                <template v-slot:opposite>
                    <div
                        :class="`pt-1 headline font-weight-bold text-button text-${timeline.color}`"
                        v-text="timeline.period"
                    ></div>
                </template>
                <div>
                    <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${timeline.color}`">
                        {{ timeline.title }}
                    </h2>
                    <h5 :class="`text-button text-${timeline.color}`">{{ timeline.position }}</h5>
                    <span class="text-subtitle-2">{{ timeline.description }}</span>
                </div>
            </v-timeline-item>
        </v-timeline>
    </div>
</template>
