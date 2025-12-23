<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

const { data } = defineProps(['data'])
const isMobile = ref(false)
const show = ref(data.show)

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

const toggle = () => {
  show.value = !show.value
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<template>
  <div
    class="border border-gray-700 py-5 px-3 rounded-sm bg-center bg-no-repeat bg-cover cursor-pointer"
    :style="[
      show
        ? {
            backgroundImage: `linear-gradient(rgba(31, 41, 55, 0.9), rgba(31, 41, 55, 0.9)), url(${data.icon})`,
          }
        : {},
    ]"
    @mouseenter="isMobile ? null : (show = true)"
    @mouseleave="isMobile ? null : (show = false)"
  >
    <h1 @click="toggle" class="text-2xl font-semibold" :style="{ color: data.color }">
      {{ data.name }}
    </h1>
    <Transition mode="in-out">
      <div v-show="show">
        <h2 class="text-gray-50">{{ data.category.label }}</h2>
        <p class="text-gray-500">{{ data.description }}</p>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
