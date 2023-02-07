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

<script setup>
import { onMounted, ref } from 'vue'

const theme = ref(getBrowserTheme())

onMounted(() => {
  localStorage.hasOwnProperty('theme') ? theme.value = getTheme() : setTheme()
})

function onToggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  setTheme()
}

function getBrowserTheme() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function setTheme() {
  localStorage.setItem('theme', JSON.stringify(theme.value))
}

function getTheme() {
  return JSON.parse(localStorage.getItem('theme'))
}
</script>

<style>
::-webkit-scrollbar {
  width: .60rem;
  background-color: #B388FF;
}

::-webkit-scrollbar-thumb {
  background-color: #D1C4E9;
  border-radius: .5rem;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #EDE7F6;
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

.v-progress-linear__background, .v-progress-linear__determinate {
  max-width: calc(100% - 25px) !important;
}
</style>