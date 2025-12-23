<script setup lang="ts">
import { ref } from 'vue'

const skills = ref([
  {
    id: 1,
    name: "Vue 3",
    category: "Front-end",
    description: "Lorem ipsum dolar"
  }
])
</script>

<template>
  <section
    id="about"
    class="w-full h-screen overflow-hidden bg-gray-800 px-20 py-24 sm:py-32 lg:overflow-visible"
  >
    <h1 class="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl mb-5 sticky">
      ABOUT
    </h1>
  </section>
</template>
