<script setup lang="ts">
import { computed, ref } from 'vue'

const { data } = defineProps(['data'])
const show = ref(data.show)

const toggle = () => {
  show.value = !show.value
}

</script>

<template>
  <div
    class="border border-gray-700 py-3 px-3 rounded-sm bg-center bg-no-repeat bg-cover"
    :style="[
      show
        ? {
            backgroundImage: `linear-gradient(rgba(31, 41, 55, 0.9), rgba(31, 41, 55, 0.9)), url(${data.icon})`,
          }
        : {},
    ]"
    @mouseenter="show = true"
    @mouseleave="show = false"
  >
    <h1 @click="toggle" class="text-2xl font-semibold" :style="{ color: data.color }">
      {{ data.name }}
    </h1>
    <div v-show="show">
      <h2 class="text-gray-50">{{ data.category }}</h2>
      <p class="text-gray-500">{{ data.description }}</p>
    </div>
  </div>
</template>

<style scoped></style>
