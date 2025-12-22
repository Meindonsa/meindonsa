<script setup lang="ts">
import { ref } from 'vue'

const experiences = ref([
  {
    id: 'exp_1',
    date: 'Depuis Juin 2022',
    organization: 'OSSAS IT GABON',
    site: 'http://ossas-it.com',
    description: `Get access to over 20+ pages including a dashboard 
    layout, charts, kanban board,calendar, and pre-order E-commerce & Marketing pages.`,
  },
  {
    id: 'exp_2',
    date: 'Août 2021 - Mai 2022',
    organization: 'JOBS CONSEIL',
    site: 'http://jobs-conseil.com',
    description: `Get access to over 20+ pages including a dashboard 
    layout, charts, kanban board,calendar, and pre-order E-commerce & Marketing pages.`,
  },
  {
    id: 'exp_3',
    date: 'Mai 2021 - Juillet 2021',
    organization: 'ASSISTANCE JURIDIQUE JEAN & CHANEl',
    site: 'http://a2jc.com',
    description: `Get access to over 20+ pages including a dashboard 
    layout, charts, <span class="text-amber-300">kanban</span> board,calendar, and pre-order E-commerce & Marketing pages.`,
  },
])
</script>

<template>
  <section
    id="about"
    class="w-full h-screenoverflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
  >
    <div class="relative isolate">
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          class="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-800"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-800/50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              stroke-width="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            stroke-width="0"
          />
        </svg>
      </div>
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
      >
        <div
          class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
        >
          <div class="lg:pr-4">
            <div class="lg:max-w-lg">
              <p class="text-base/7 font-semibold text-indigo-400">4 ans d'expérience</p>
              <h1
                class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl"
              >
                Expérience professionnelle
              </h1>
              <p class="mt-6 text-xl/8 text-gray-300">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui
                mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas.
              </p>
            </div>
          </div>
        </div>
        <div
          class="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
        >
          <img
            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            alt=""
            class="w-3xl max-w-none rounded-xl bg-gray-800 shadow-xl ring-1 ring-white/10 sm:w-228"
          />
        </div>
        <div
          class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
        >
          <div class="lg:pr-4">
            <div class="max-w-xl text-base/7 text-gray-400 lg:max-w-lg">
              <ol class="relative border-s border-default">
                <li v-for="exp in experiences" class="mb-10 ms-4">
                  <div
                    class="absolute w-3 h-3 bg-gray-800 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"
                  ></div>
                  <time class="text-sm font-normal leading-none text-body">{{ exp.date }}</time>
                  <h3 class="text-lg font-semibold text-heading my-2">
                    <a :href="exp.site" target="_blank">
                      {{ exp.organization }}
                    </a>
                  </h3>
                  <p class="mb-4 text-base font-normal text-body" v-html="exp.description"></p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
