<script setup lang="ts">
import { ref } from 'vue'

/*const experiences = ref([
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
])*/
const jobs = [
  {
    period: '2022\n— Présent',
    role: 'Ingénieur Logiciel Senior',
    company: 'Poste actuel',
    desc: "Conception et développement d'applications fullstack. Architecture d'APIs RESTful et GraphQL, mise en place de pipelines CI/CD, revue de code, mentorat. Décisions techniques sur des systèmes à haute disponibilité.",
    tags: ['Vue 3', 'Node.js', 'PostgreSQL', 'Docker', 'GitHub Actions', 'TypeScript'],
  },
  {
    period: '2020\n— 2022',
    role: 'Développeur Fullstack',
    company: 'Studio / Agence',
    desc: "Développement d'applications web pour clients variés (e-commerce, SaaS, dashboards). Intégration d'APIs tierces, paiement en ligne, optimisation des performances, mise en production.",
    tags: ['Laravel', 'React', 'MySQL', 'REST API', 'Tailwind CSS'],
  },
  {
    period: '2019\n— 2020',
    role: 'Développeur Web Freelance',
    company: 'Indépendant',
    desc: 'Création de sites et applications pour des entreprises locales. Gestion complète des projets de la conception à la livraison. Premiers projets fullstack — cycle complet de développement.',
    tags: ['HTML/CSS/JS', 'PHP', 'WordPress', 'MySQL'],
  },
]
</script>

<template>
  <section id="experience" class="py-28 bg-ink">
    <div class="max-w-[1200px] mx-auto px-10">
      <div class="mb-16">
        <span class="font-mono text-[.65rem] tracking-[.2em] uppercase text-gold block mb-3"
          >02 — Parcours</span
        >
        <h2
          class="font-serif font-bold text-ivory leading-[1.05] tracking-[-0.03em]"
          style="font-size: clamp(2.2rem, 5vw, 3.8rem)"
        >
          Expérience <em class="text-gold">professionnelle</em>
        </h2>
      </div>

      <div>
        <div
          v-for="xp in jobs"
          :key="xp.role"
          class="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-6 sm:gap-12 py-10 border-b border-rule first:border-t first:border-rule transition-colors duration-200 hover:bg-gold/[.02] reveal"
        >
          <!-- Period -->
          <div class="font-mono text-[.72rem] tracking-widest text-muted pt-1 leading-relaxed">
            {{ xp.period }}
          </div>

          <!-- Body -->
          <div>
            <h3 class="font-serif text-2xl font-bold text-ivory mb-1">{{ xp.role }}</h3>
            <div class="font-mono text-[.72rem] tracking-widest uppercase text-gold mb-4">
              · {{ xp.company }}
            </div>
            <p class="text-[.9rem] text-muted leading-[1.75] mb-5">{{ xp.desc }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="t in xp.tags"
                :key="t"
                class="font-mono text-[.65rem] tracking-[.06em] border border-rule text-muted2 px-2.5 py-1 rounded-sm transition-all duration-200 hover:border-gold-line hover:text-gold"
              >
                {{ t }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
