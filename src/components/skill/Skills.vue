<script setup lang="ts">
import { computed, ref } from 'vue'
import { data, filtersData } from '@/components/skill/skills.ts'
import SkillItem from '@/components/skill/SkillItem.vue'

const skills = ref(data)
const filter = ref('all')
const filters = ref(filtersData)

const filtered = computed(() => {
  if (filter.value == 'all') return skills.value
  return skills.value.filter((e) => e.category.name == filter.value)
})
const isActive = (name: string) => {
  return filter.value == name ? 'bg-indigo-600' : 'border border-indigo-600'
}

const onFilter = (name: string) => {
  filter.value = name
}
</script>

<template>
  <section
    id="skills"
    class="w-full min-h-screen overflow-hidden bg-gray-800 px-20 py-24 sm:py-32 lg:overflow-visible"
  >
    <div class="flex items-center mb-15">
      <h1 class="text-3xl font-semibold tracking-tight text-pretty text-white sm:text-5xl mr-3">
        SKILLS
      </h1>
      <div class="md:block hidden">
        <a
          v-for="item of filters"
          class="py-3 px-5 cursor-pointer mr-2 rounded-md text-white ease-in-out"
          @click="onFilter(item.name)"
          :class="isActive(item.name)"
        >
          {{ item.label }}
        </a>
      </div>
    </div>
    <div class="w-full grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 gap-4 mb-30">
      <TransitionGroup name="list" >
        <SkillItem v-for="skill in filtered" :key="skill.id" :data="skill" />
      </TransitionGroup>
    </div>
  </section>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease-in-out;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>