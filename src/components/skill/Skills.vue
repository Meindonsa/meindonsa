<script setup lang="ts">
import { ref } from 'vue'
import { data } from '@/components/skill/skills.ts'
import SkillItem from '@/components/skill/SkillItem.vue'

const skills = ref(data)

const color = (data: string | undefined) => {
  if (data == undefined || data.trim() == '') return ''
  return `text-[${data.toUpperCase()}]`
}
</script>

<template>
  <section
    id="skills"
    class="w-full min-h-screen overflow-hidden bg-gray-800 px-20 py-24 sm:py-32 lg:overflow-visible"
  >
    <h1 class="text-3xl font-semibold tracking-tight text-pretty text-white sm:text-5xl mb-7">
      SKILLS
    </h1>
    <div class="w-full grid grid-cols-3 gap-4">
      <TransitionGroup name="list">
        <SkillItem v-for="skill in skills" :key="skill.id" :data="skill" />
      </TransitionGroup>
    </div>
  </section>
</template>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 1s ease-in-out;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>