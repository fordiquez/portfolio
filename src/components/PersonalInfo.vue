<script setup>
import { defineComponent, reactive } from 'vue';

defineComponent({
    name: 'PersonalInfo',
});

defineProps({
    header: String,
});

const data = reactive([
    {
        icon: 'mdi-calendar-account',
        title: 'Birth date',
        value: '22 February, 2001',
    },
    {
        icon: 'mdi-city',
        title: 'Birth place',
        value: 'Mykolaiv, Ukraine',
    },
    {
        icon: 'mdi-compass-rose',
        title: 'Location',
        value: 'Odesa, Ukraine',
    },
]);
</script>

<template>
    <div class="personal-info">
        <h5 class="text-h5 text-uppercase text-deep-purple-accent-1">{{ header }}</h5>
        <div class="personal-info__item mt-3" v-for="(item, i) in data" :key="i">
            <div class="personal-info__icon">
                <v-icon size="x-large">{{ item.icon }}</v-icon>
            </div>
            <div class="personal-info__content">
                <span class="text-uppercase text-button">{{ item.title }}</span>
                <span class="font-weight-light">{{ item.value }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.personal-info__item {
    display: flex;
    align-items: flex-end;
}

.personal-info__content {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}
</style>
