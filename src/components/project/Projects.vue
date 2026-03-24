<script setup lang="ts">
const projects = [
  {
    featured: true,
    emoji: '🛒',
    title: 'Plateforme E-commerce Fullstack',
    tags: ['Vue 3', 'Node.js', 'PostgreSQL', 'Stripe'],
    desc: 'Application complète avec catalogue, panier, paiement Stripe, espace vendeur et dashboard analytique. Backend Node.js + API REST, frontend Vue 3.',
    links: [
      { label: '↗ Demo live', href: '#' },
      { label: '⌥ Code source', href: 'https://github.com/Meindonsa' },
    ],
  },
  {
    featured: false,
    emoji: '📊',
    title: 'Dashboard SaaS Analytics',
    tags: ['React', 'Laravel', 'MySQL'],
    desc: 'Tableau de bord temps réel avec graphiques, exports et gestion multi-tenants.',
    links: [
      { label: '↗ Demo', href: '#' },
      { label: '⌥ GitHub', href: 'https://github.com/Meindonsa' },
    ],
  },
  {
    wide: true,
    emoji: '📱',
    title: 'App Mobile de Gestion RH',
    tags: ['Flutter', 'Node.js', 'Firebase'],
    desc: 'Application cross-platform (iOS & Android) pour la gestion des congés, présences et fiches de paie. Notifications push, mode hors-ligne, synchronisation automatique.',
    links: [
      { label: '↗ App Store', href: '#' },
      { label: '↗ Play Store', href: '#' },
      { label: '⌥ GitHub', href: 'https://github.com/Meindonsa' },
    ],
  },
  {
    featured: false,
    emoji: '🔐',
    title: 'Auth Service Microservice',
    tags: ['Node.js', 'JWT', 'Redis'],
    desc: "Service d'authentification modulaire — JWT, OAuth2 (Google, GitHub), sessions Redis, 2FA.",
    links: [{ label: '⌥ Open Source', href: 'https://github.com/Meindonsa' }],
  },
  {
    featured: true,
    emoji: '🌐',
    title: 'Portfolio CMS Headless',
    tags: ['Nuxt 3', 'Prisma', 'PostgreSQL'],
    desc: 'Ce portfolio — SSR, Lighthouse 98+, SEO optimisé, administration via CMS headless maison.',
    links: [
      { label: '↗ Live', href: 'https://meindonsa.vercel.app' },
      { label: '⌥ GitHub', href: 'https://github.com/Meindonsa/meindonsa' },
    ],
  },
]
</script>

<template>
  <section id="projects" class="py-28 bg-ink2">
    <div class="max-w-[1200px] mx-auto px-10">
      <!-- Header -->
      <div class="flex flex-wrap justify-between items-end gap-5 mb-16">
        <div>
          <span class="font-mono text-[.65rem] tracking-[.2em] uppercase text-gold block mb-3"
            >05 — Projets</span
          >
          <h2
            class="font-serif font-bold text-ivory leading-[1.05] tracking-[-0.03em]"
            style="font-size: clamp(2.2rem, 5vw, 3.8rem)"
          >
            Réalisations <em class="text-gold">sélectionnées</em>
          </h2>
        </div>
        <a
          href="https://github.com/Meindonsa"
          target="_blank"
          class="border border-rule text-muted font-mono text-[.72rem] tracking-widest uppercase px-6 py-2.5 rounded-sm no-underline transition-all duration-200 hover:border-gold-line hover:text-gold"
        >
          Voir GitHub →
        </a>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-12 gap-5">
        <div
          v-for="p in projects"
          :key="p.title"
          :class="[
            'col-span-12 bg-ink border border-rule rounded-lg overflow-hidden',
            'transition-all duration-350 hover:-translate-y-1.5 hover:border-gold-line',
            'hover:shadow-[0_20px_60px_rgba(0,0,0,.5)] reveal',
            p.wide ? 'md:col-span-12' : p.featured ? 'md:col-span-7' : 'md:col-span-5',
          ]"
          data-hover
        >
          <!-- Wide layout inner -->
          <div :class="p.wide ? 'grid grid-cols-1 md:grid-cols-2' : ''">
            <!-- Thumbnail -->
            <div
              class="aspect-video bg-ink2 flex items-center justify-center overflow-hidden text-5xl opacity-15 bg-gradient-to-br from-ink2 to-gold/5 transition-opacity duration-300 hover:opacity-25"
              :class="p.wide ? 'aspect-auto min-h-[200px]' : ''"
            >
              {{ p.emoji }}
            </div>

            <!-- Body -->
            <div class="p-7">
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="t in p.tags"
                  :key="t"
                  class="font-mono text-[.62rem] tracking-[.08em] bg-gold-dim border border-gold-line text-gold px-2.5 py-1 rounded-sm"
                >
                  {{ t }}
                </span>
              </div>
              <h3 class="font-serif text-[1.35rem] font-bold text-ivory mb-2">{{ p.title }}</h3>
              <p class="text-[.85rem] text-muted leading-[1.7] mb-5">{{ p.desc }}</p>
              <div class="flex gap-5">
                <a
                  v-for="l in p.links"
                  :key="l.label"
                  :href="l.href"
                  target="_blank"
                  class="font-mono text-[.68rem] tracking-widest uppercase text-muted no-underline flex items-center gap-1.5 transition-colors duration-200 hover:text-gold"
                >
                  {{ l.label }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
