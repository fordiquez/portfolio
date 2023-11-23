<script setup>
import { onMounted, ref } from 'vue';

const getBrowserTheme = () =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const theme = ref(getBrowserTheme());

onMounted(() => (localStorage.hasOwnProperty('theme') ? (theme.value = getTheme()) : setTheme()));

const onToggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    setTheme();
};

const setTheme = () => localStorage.setItem('theme', JSON.stringify(theme.value));

const getTheme = () => JSON.parse(localStorage.getItem('theme'));
</script>

<template>
    <v-app :theme="theme">
        <v-app-bar>
            <v-spacer></v-spacer>
            <v-btn :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="onToggleTheme">
                Toggle Theme
            </v-btn>
        </v-app-bar>

        <v-main>
            <v-container>
                <router-view />
            </v-container>
        </v-main>
    </v-app>
</template>

<style>
::-webkit-scrollbar {
    width: 0.6rem;
    background-color: #b388ff;
}

::-webkit-scrollbar-thumb {
    background-color: #d1c4e9;
    border-radius: 0.5rem;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #ede7f6;
}

a {
    text-decoration: none;
}

.v-slide-group__content {
    justify-content: center;
}

.v-timeline--vertical.v-timeline {
    height: auto;
}

.v-progress-linear__background,
.v-progress-linear__determinate {
    max-width: calc(100% - 25px) !important;
}
</style>
