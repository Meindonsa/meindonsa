<!--
╔══════════════════════════════════════════════════════════════╗
║  PORTFOLIO — Boris Axel · Ingénieur Logiciel Fullstack       ║
║  Tailwind v4 · @tailwindcss/vite · Vue 3                     ║
║                                                              ║
║  STRUCTURE — découpe en composants :                         ║
║  ├── src/assets/main.css          ← @import + @theme         ║
║  ├── src/App.vue                  ← assemblage               ║
║  ├── src/components/Navbar.vue                               ║
║  ├── src/components/banner/Banner.vue                        ║
║  ├── src/components/about/About.vue                          ║
║  ├── src/components/experience/Experience.vue                ║
║  ├── src/components/skill/Skills.vue                         ║
║  ├── src/components/service/Service.vue                      ║
║  ├── src/components/project/Projects.vue   ← NOUVEAU         ║
║  └── src/components/Footer.vue                               ║
╚══════════════════════════════════════════════════════════════╝
-->

<!-- ════════════════════════════════════════════════════════════
     1. src/assets/main.css
     Colle ce contenu dans ton fichier CSS principal importé
     dans main.ts  →  import './assets/main.css'
     ════════════════════════════════════════════════════════════ -->
<!--
@import "tailwindcss";

@theme {
  /* ── Couleurs ───────────────────────────────────────────── */
  --color-ink:        #0c0b09;
  --color-ink2:       #141310;
  --color-ink3:       #1c1a16;
  --color-paper:      #f0ece3;
  --color-paper2:     #e8e3d8;
  --color-ivory:      #f7f3ea;
  --color-gold:       #d4a853;
  --color-gold-dim:   rgba(212,168,83,0.12);
  --color-gold-line:  rgba(212,168,83,0.28);
  --color-muted:      #7a7469;
  --color-muted2:     #4a4740;
  --color-rule:       rgba(240,236,227,0.08);
  --color-ok:         #5a9e6f;

  /* ── Typographies ───────────────────────────────────────── */
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans:  'Epilogue', sans-serif;
  --font-mono:  'JetBrains Mono', monospace;

  /* ── Tailles de police custom ───────────────────────────── */
  --text-hero: clamp(4rem, 10vw, 9.5rem);
  --text-sec:  clamp(2.2rem, 5vw, 3.8rem);
}

/* ── Reset de base ──────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { -webkit-font-smoothing: antialiased; }
::selection { background: var(--color-gold); color: var(--color-ink); }

/* ── Scrollbar ──────────────────────────────────────────────── */
::-webkit-scrollbar       { width: 3px; }
::-webkit-scrollbar-track { background: var(--color-ink); }
::-webkit-scrollbar-thumb { background: var(--color-gold); }

/* ── Cursor ─────────────────────────────────────────────────── */
* { cursor: none !important; }
#c-dot {
  position: fixed; width: 8px; height: 8px;
  background: var(--color-gold); border-radius: 9999px;
  pointer-events: none; z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width .2s, height .2s;
}
#c-ring {
  position: fixed; width: 34px; height: 34px;
  border: 1px solid rgba(212,168,83,.4); border-radius: 9999px;
  pointer-events: none; z-index: 9998;
  transform: translate(-50%, -50%);
  transition: width .3s, height .3s, border-color .3s;
}
.cursor-expand #c-ring { width: 54px; height: 54px; border-color: var(--color-gold); }
.cursor-expand #c-dot  { width: 4px; height: 4px; }

/* ── Grain overlay ──────────────────────────────────────────── */
body::after {
  content: ''; position: fixed; inset: 0; z-index: 9990;
  pointer-events: none; opacity: .03;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)'/%3E%3C/svg%3E");
  background-size: 180px;
}

/* ── Reveal animations ──────────────────────────────────────── */
.reveal {
  opacity: 0; transform: translateY(28px);
  transition: opacity .7s cubic-bezier(.4,0,.2,1),
              transform .7s cubic-bezier(.4,0,.2,1);
}
.reveal.in { opacity: 1; transform: translateY(0); }
.reveal-l {
  opacity: 0; transform: translateX(-22px);
  transition: opacity .7s cubic-bezier(.4,0,.2,1),
              transform .7s cubic-bezier(.4,0,.2,1);
}
.reveal-l.in { opacity: 1; transform: translateX(0); }

/* ── Marquee ────────────────────────────────────────────────── */
@keyframes mar { to { transform: translateX(-50%); } }
.marquee-track { animation: mar 26s linear infinite; }
.marquee-track:hover { animation-play-state: paused; }

/* ── Blink ──────────────────────────────────────────────────── */
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:.25} }
.blink { animation: blink 2s ease infinite; }

/* ── Bob (scroll arrow) ─────────────────────────────────────── */
@keyframes bob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(5px)} }
.bob { animation: bob 2s ease infinite; }

/* ── Float (hero chips) ─────────────────────────────────────── */
@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }

/* Google Fonts import ─ colle ce <link> dans index.html ───── */
/*
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Epilogue:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet">
*/
-->

<!-- ════════════════════════════════════════════════════════════
     2. App.vue
     ════════════════════════════════════════════════════════════ -->
<!--
<script setup lang="ts">
import Navbar    from './components/Navbar.vue'
import Banner    from './components/banner/Banner.vue'
import About     from './components/about/About.vue'
import Experience from './components/experience/Experience.vue'
import Skills    from './components/skill/Skills.vue'
import Service   from './components/service/Service.vue'
import Projects  from './components/project/Projects.vue'
import Footer    from './components/Footer.vue'
import { onMounted } from 'vue'

onMounted(() => {
  // Cursor
  const dot  = document.getElementById('c-dot')!
  const ring = document.getElementById('c-ring')!
  let mx=0, my=0, rx=0, ry=0
  document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY })
  ;(function loop(){
    dot.style.left=mx+'px'; dot.style.top=my+'px'
    rx+=(mx-rx)*.1; ry+=(my-ry)*.1
    ring.style.left=rx+'px'; ring.style.top=ry+'px'
    requestAnimationFrame(loop)
  })()
  document.querySelectorAll('a,button,[data-hover]').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-expand'))
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-expand'))
  })
  // Reveal on scroll
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e,i) => {
      if(e.isIntersecting){
        setTimeout(()=>e.target.classList.add('in'), i*70)
        obs.unobserve(e.target)
      }
    })
  }, { threshold: .1 })
  document.querySelectorAll('.reveal,.reveal-l').forEach(el => obs.observe(el))
})
</script>

<template>
  <div id="c-dot" aria-hidden="true"></div>
  <div id="c-ring" aria-hidden="true"></div>
  <div class="bg-ink font-sans text-paper min-h-screen overflow-x-hidden">
    <Navbar />
    <Banner />
    <About />
    <Experience />
    <Skills />
    <Service />
    <Projects />
    <Footer />
  </div>
</template>
-->

<!-- ════════════════════════════════════════════════════════════
     3. components/Navbar.vue
     ════════════════════════════════════════════════════════════ -->
<template>
  <!-- NAVBAR -->
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
      stuck ? 'bg-ink/90 backdrop-blur-xl border-b border-rule' : 'border-b border-transparent',
    ]"
    style="padding: 1.5rem 0"
  >
    <div class="max-w-[1200px] mx-auto px-10 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="font-serif text-xl font-bold text-ivory tracking-tight no-underline">
        Boris Axel
        <sup class="font-mono text-[.58rem] text-gold tracking-widest font-normal align-super ml-1"
          >Fullstack</sup
        >
      </a>

      <!-- Links desktop -->
      <ul class="hidden md:flex gap-10 list-none">
        <li v-for="l in links" :key="l.href">
          <a
            :href="l.href"
            class="font-mono text-[.7rem] tracking-widest uppercase text-muted no-underline transition-colors duration-200 hover:text-paper"
          >
            {{ l.label }}
          </a>
        </li>
      </ul>

      <!-- Right -->
      <div class="hidden md:flex items-center gap-4">
        <div class="flex items-center gap-2 font-mono text-[.68rem] tracking-widest text-ok">
          <span class="w-1.5 h-1.5 rounded-full bg-ok blink"></span>
          Disponible
        </div>
        <a
          href="#contact"
          class="font-mono text-[.68rem] tracking-widest uppercase bg-gold text-ink px-5 py-2 rounded-sm no-underline transition-all duration-200 hover:bg-ivory hover:-translate-y-px"
        >
          Me contacter
        </a>
      </div>

      <!-- Hamburger -->
      <button class="md:hidden flex flex-col gap-1.5" @click="mob = !mob" aria-label="Menu">
        <span
          :class="[
            'block w-6 h-px bg-paper transition-all duration-300',
            mob ? 'rotate-45 translate-y-[7px]' : '',
          ]"
        ></span>
        <span
          :class="['block w-6 h-px bg-paper transition-all duration-300', mob ? 'opacity-0' : '']"
        ></span>
        <span
          :class="[
            'block w-6 h-px bg-paper transition-all duration-300',
            mob ? '-rotate-45 -translate-y-[7px]' : '',
          ]"
        ></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mob"
      class="md:hidden fixed inset-0 bg-ink z-40 flex flex-col items-center justify-center gap-10"
    >
      <a
        v-for="l in links"
        :key="l.href"
        :href="l.href"
        @click="mob = false"
        class="font-serif text-4xl italic text-paper no-underline hover:text-gold transition-colors"
      >
        {{ l.label }}
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const stuck = ref(false)
const mob = ref(false)
const links = [
  { href: '#about', label: 'À propos' },
  { href: '#experience', label: 'Parcours' },
  { href: '#skills', label: 'Stack' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projets' },
]
function onScroll() {
  stuck.value = window.scrollY > 50
}
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<!-- ════════════════════════════════════════════════════════════
     4. components/banner/Banner.vue
     ════════════════════════════════════════════════════════════ -->
<template>
  <!-- HERO / BANNER -->
  <section
    id="hero"
    class="min-h-screen flex flex-col justify-center pt-28 pb-0 relative overflow-hidden bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(212,168,83,.05)_0%,transparent_65%)]"
  >
    <div class="max-w-[1200px] mx-auto px-10 w-full">
      <!-- Main grid -->
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-end pb-20">
        <!-- LEFT -->
        <div>
          <!-- Eyebrow -->
          <div class="flex items-center gap-4 mb-8">
            <span class="block w-12 h-px bg-gold"></span>
            <span class="font-mono text-[.68rem] tracking-[.18em] uppercase text-gold">
              Ingénieur Logiciel — Libreville, Gabon
            </span>
          </div>

          <!-- Name -->
          <h1
            class="font-serif font-black text-ivory leading-[.9] tracking-[-0.04em]"
            style="font-size: clamp(4rem, 10vw, 9.5rem)"
          >
            Boris<br />
            <em class="not-italic text-gold">Axel.</em>
          </h1>

          <!-- Tagline -->
          <p
            class="mt-8 text-muted leading-relaxed max-w-[520px]"
            style="font-size: clamp(0.95rem, 1.8vw, 1.15rem)"
          >
            Je conçois et développe des
            <strong class="text-paper font-medium">applications web & mobile</strong>
            de bout en bout — du backend robuste à l'interface qui donne envie de rester.
            <strong class="text-paper font-medium">Fullstack</strong>, de la base de données au
            pixel.
          </p>

          <!-- CTAs -->
          <div class="flex flex-wrap gap-4 mt-10 items-center">
            <a
              href="#projects"
              class="inline-flex items-center gap-2 bg-gold text-ink font-mono font-medium text-[.72rem] tracking-widest uppercase px-8 py-3.5 rounded-sm no-underline transition-all duration-200 hover:bg-ivory hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(212,168,83,.2)]"
            >
              Voir mes projets
              <svg
                width="13"
                height="13"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              class="inline-flex items-center gap-2 border border-rule text-muted font-mono text-[.72rem] tracking-widest uppercase px-7 py-3.5 rounded-sm no-underline transition-all duration-200 hover:border-gold-line hover:text-gold"
            >
              Travaillons ensemble
            </a>
          </div>

          <!-- Socials -->
          <div class="flex gap-3 mt-12">
            <a
              v-for="s in socials"
              :key="s.label"
              :href="s.href"
              :title="s.label"
              target="_blank"
              class="w-10 h-10 rounded-full border border-rule flex items-center justify-center text-muted no-underline transition-all duration-200 hover:border-gold-line hover:text-gold hover:bg-gold-dim hover:-translate-y-1"
              v-html="s.icon"
            >
            </a>
          </div>
        </div>

        <!-- RIGHT — stats -->
        <div class="hidden lg:flex flex-col border-l border-rule pl-12 self-center reveal">
          <div
            v-for="(st, i) in stats"
            :key="i"
            :class="['py-7', i < stats.length - 1 ? 'border-b border-rule' : '']"
          >
            <div class="font-serif font-black text-ivory leading-none tracking-[-0.04em] text-5xl">
              {{ st.num }}<span class="text-gold">{{ st.suf }}</span>
            </div>
            <div class="font-mono text-[.65rem] tracking-[.15em] uppercase text-muted mt-1.5">
              {{ st.lbl }}
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div
        class="border-t border-rule pt-8 flex flex-wrap justify-between items-center gap-4 reveal"
      >
        <div class="flex flex-wrap gap-2">
          <span
            v-for="b in badges"
            :key="b"
            class="font-mono text-[.65rem] tracking-[.08em] bg-ink2 border border-rule text-muted px-3 py-1.5 rounded-sm transition-all duration-200 hover:border-gold-line hover:text-gold"
          >
            {{ b }}
          </span>
        </div>
        <div
          class="flex items-center gap-2 font-mono text-[.65rem] tracking-widest uppercase text-muted2"
        >
          <span>Défiler</span>
          <span class="bob inline-block">↓</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { num: '5', suf: '+', lbl: "Années d'expérience" },
  { num: '30', suf: '+', lbl: 'Projets livrés' },
  { num: '2', suf: '', lbl: 'Stacks maîtrisées' },
  { num: '∞', suf: '', lbl: 'Lignes de café' },
]
const badges = [
  'Vue 3',
  'React',
  'Node.js',
  'Laravel',
  'PostgreSQL',
  'Docker',
  'TypeScript',
  'GraphQL',
]
const socials = [
  {
    label: 'Email',
    href: 'mailto:borisaxel@example.com',
    icon: `<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>`,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Meindonsa',
    icon: `<svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"/></svg>`,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/borisaxel',
    icon: `<svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>`,
  },
  {
    label: 'Twitter/X',
    href: 'https://twitter.com/meindonsa',
    icon: `<svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  },
]
</script>

<!-- ════════════════════════════════════════════════════════════
     5. components/about/About.vue
     ════════════════════════════════════════════════════════════ -->
<template>
  <section id="about" class="py-28 bg-ink2">
    <div class="max-w-[1200px] mx-auto px-10">
      <!-- Header -->
      <div class="mb-16">
        <span class="font-mono text-[.65rem] tracking-[.2em] uppercase text-gold block mb-3"
          >01 — À propos</span
        >
        <h2
          class="font-serif font-bold text-ivory leading-[1.05] tracking-[-0.03em]"
          style="font-size: clamp(2.2rem, 5vw, 3.8rem)"
        >
          Du code qui <em class="text-gold">résout</em><br />de vrais problèmes.
        </h2>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-20 items-start">
        <!-- Left — text -->
        <div class="reveal-l">
          <p class="text-[1.1rem] text-paper2 leading-[1.85] mb-5">
            Je suis <strong class="text-ivory font-medium">Boris Axel</strong>, ingénieur logiciel
            basé à Libreville, Gabon. Fullstack dans l'âme, j'interviens aussi bien sur des
            architectures backend robustes que sur des interfaces frontend soignées.
          </p>
          <p class="text-muted leading-[1.85] mb-5">
            Mon parcours couvre des projets variés : APIs REST & GraphQL, applications SPA, systèmes
            d'authentification, intégrations de paiement, dashboards analytiques, applications
            mobiles Flutter.
          </p>
          <p class="text-muted leading-[1.85]">
            Je crois que le bon code est celui qui
            <strong class="text-paper font-medium">dure et qui scale</strong> — pas seulement celui
            qui marche le premier jour. Architecture claire, tests, CI/CD : j'aborde chaque projet
            comme si je devais le maintenir dans 3 ans.
          </p>

          <!-- Detail rows -->
          <dl class="mt-10">
            <div
              v-for="d in details"
              :key="d.k"
              class="flex justify-between items-center py-4 border-b border-rule first:border-t first:border-rule"
            >
              <dt class="font-mono text-[.7rem] tracking-[.12em] uppercase text-muted2">
                {{ d.k }}
              </dt>
              <dd :class="['text-[.9rem] text-right', d.ok ? 'text-ok' : 'text-paper']">
                {{ d.v }}
              </dd>
            </div>
          </dl>
        </div>

        <!-- Right — cards -->
        <div class="flex flex-col gap-4 reveal lg:sticky lg:top-28">
          <div
            v-for="c in cards"
            :key="c.title"
            class="bg-ink border border-rule rounded-md p-7 transition-colors duration-300 hover:border-gold-line"
            data-hover
          >
            <div class="text-2xl mb-4">{{ c.icon }}</div>
            <div class="text-[.92rem] font-semibold text-ivory mb-2">{{ c.title }}</div>
            <div class="text-[.85rem] text-muted leading-relaxed">{{ c.body }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const details = [
  { k: 'Localisation', v: 'Libreville, Gabon 🇬🇦 · Remote OK' },
  { k: 'Formation', v: 'Ingénierie Informatique' },
  { k: 'Spécialité', v: 'Développement Fullstack Web & Mobile' },
  { k: 'Langues', v: 'Français · Anglais' },
  { k: 'Disponibilité', v: '✓ Disponible — Freelance & CDI', ok: true },
]
const cards = [
  {
    icon: '⚡',
    title: 'Développement Backend',
    body: "APIs robustes, bases de données bien conçues, logique métier solide. Node.js, Laravel, Python — je choisis l'outil adapté.",
  },
  {
    icon: '🎨',
    title: 'Développement Frontend',
    body: "Interfaces réactives, accessibles et performantes. Vue 3, React, animations soignées. Autant d'attention au pixel qu'à l'algorithme.",
  },
  {
    icon: '📱',
    title: 'Mobile & Cross-platform',
    body: "Applications iOS & Android avec Flutter. Une codebase, deux plateformes, zéro compromis sur l'expérience.",
  },
  {
    icon: '🚀',
    title: 'DevOps & Déploiement',
    body: 'CI/CD, Docker, déploiement sur VPS, Vercel, Railway. Du code qui tourne en production, pas seulement en local.',
  },
]
</script>

<!-- ════════════════════════════════════════════════════════════
     6. components/experience/Experience.vue
     ════════════════════════════════════════════════════════════ -->
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

<script setup lang="ts">
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

<!-- ════════════════════════════════════════════════════════════
     7. components/skill/Skills.vue
     ════════════════════════════════════════════════════════════ -->
<template>
  <section id="skills" class="py-28 bg-ink2">
    <div class="max-w-[1200px] mx-auto px-10">
      <!-- Top grid -->
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 mb-16">
        <!-- Intro -->
        <div class="reveal-l">
          <span class="font-mono text-[.65rem] tracking-[.2em] uppercase text-gold block mb-3"
            >03 — Stack</span
          >
          <h2
            class="font-serif font-bold text-ivory leading-[1.05] tracking-[-0.03em] mb-5"
            style="font-size: clamp(1.8rem, 3.5vw, 2.8rem)"
          >
            Mes outils, <em class="text-gold">mes armes.</em>
          </h2>
          <p class="text-[.9rem] text-muted leading-[1.8]">
            Cinq ans à utiliser, tester et affiner ma stack. Aussi à l'aise côté backend que
            frontend. Je sais quand utiliser quoi.
          </p>
        </div>

        <!-- Groups 2x2 -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 reveal">
          <div v-for="g in groups" :key="g.title">
            <div
              class="flex items-center gap-3 font-mono text-[.68rem] tracking-[.18em] uppercase text-gold mb-5"
            >
              <span class="block w-6 h-px bg-gold"></span>
              {{ g.title }}
            </div>
            <div class="flex flex-col gap-1">
              <div
                v-for="sk in g.items"
                :key="sk.name"
                class="flex justify-between items-center px-4 py-3 border border-transparent rounded transition-all duration-200 hover:bg-gold-dim hover:border-gold-line"
                data-hover
              >
                <span class="text-[.9rem] text-paper2">{{ sk.name }}</span>
                <span
                  class="font-mono text-[.65rem] tracking-[.08em] text-muted2 transition-colors group-hover:text-gold"
                >
                  {{ sk.level }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Marquee -->
      <div class="overflow-hidden border-t border-rule pt-10">
        <div class="marquee-track flex gap-10 items-center w-max">
          <template v-for="_ in 2" :key="_">
            <template v-for="(item, i) in marItems" :key="`${_}-${i}`">
              <span
                class="font-mono text-[.75rem] tracking-widest text-muted2 whitespace-nowrap transition-colors duration-200 hover:text-gold"
              >
                {{ item }}
              </span>
              <span class="text-rule text-sm">·</span>
            </template>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const groups = [
  {
    title: 'Frontend',
    items: [
      { name: 'Vue 3 / Nuxt 3', level: 'Expert' },
      { name: 'React / Next.js', level: 'Avancé' },
      { name: 'TypeScript', level: 'Avancé' },
      { name: 'Tailwind CSS', level: 'Expert' },
      { name: 'Flutter (UI)', level: 'Intermédiaire' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js / Express', level: 'Expert' },
      { name: 'Laravel / PHP', level: 'Avancé' },
      { name: 'REST API / GraphQL', level: 'Expert' },
      { name: 'PostgreSQL / MySQL', level: 'Avancé' },
      { name: 'Redis', level: 'Intermédiaire' },
    ],
  },
  {
    title: 'Outils & DevOps',
    items: [
      { name: 'Git / GitHub', level: 'Expert' },
      { name: 'Docker', level: 'Avancé' },
      { name: 'CI/CD (GH Actions)', level: 'Avancé' },
      { name: 'Vercel / Railway', level: 'Avancé' },
      { name: 'Figma', level: 'Intermédiaire' },
    ],
  },
  {
    title: 'Mobile & Autres',
    items: [
      { name: 'Flutter', level: 'Avancé' },
      { name: 'React Native', level: 'Intermédiaire' },
      { name: 'Prisma ORM', level: 'Avancé' },
      { name: 'Jest / Vitest', level: 'Avancé' },
      { name: 'Linux / Bash', level: 'Intermédiaire' },
    ],
  },
]
const marItems = [
  'Vue 3',
  'React',
  'Node.js',
  'Laravel',
  'TypeScript',
  'PostgreSQL',
  'Docker',
  'Flutter',
  'Tailwind CSS',
  'GraphQL',
  'REST API',
  'Nuxt 3',
  'Next.js',
  'Redis',
  'GitHub Actions',
  'Prisma',
]
</script>

<!-- ════════════════════════════════════════════════════════════
     8. components/service/Service.vue
     ════════════════════════════════════════════════════════════ -->
<template>
  <section id="services" class="py-28 bg-ink">
    <div class="max-w-[1200px] mx-auto px-10">
      <div class="mb-16">
        <span class="font-mono text-[.65rem] tracking-[.2em] uppercase text-gold block mb-3"
          >04 — Services</span
        >
        <h2
          class="font-serif font-bold text-ivory leading-[1.05] tracking-[-0.03em]"
          style="font-size: clamp(2.2rem, 5vw, 3.8rem)"
        >
          Ce que je <em class="text-gold">construis</em>
        </h2>
        <p class="mt-4 text-muted text-[.95rem] leading-relaxed max-w-md">
          De la conception à la mise en production, je prends en charge l'intégralité du cycle.
        </p>
      </div>

      <!-- Grid 3×2 séparé par 1px -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule rounded-lg overflow-hidden"
      >
        <div
          v-for="srv in services"
          :key="srv.title"
          class="bg-ink p-10 relative group transition-colors duration-300 hover:bg-ink2 reveal"
          data-hover
        >
          <!-- top accent line -->
          <div
            class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <div class="font-mono text-[.65rem] tracking-[.15em] text-gold/60 mb-5">
            {{ srv.n }}
          </div>
          <div class="text-2xl mb-4">{{ srv.icon }}</div>
          <h3 class="text-[1.05rem] font-semibold text-ivory mb-3">{{ srv.title }}</h3>
          <p class="text-[.85rem] text-muted leading-[1.7]">{{ srv.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    n: '01',
    icon: '⚡',
    title: 'Applications Web Fullstack',
    desc: "SPA, SSR, APIs REST & GraphQL. De la base de données au frontend, je conçois et code l'ensemble de l'architecture.",
  },
  {
    n: '02',
    icon: '📱',
    title: 'Applications Mobiles',
    desc: 'Apps cross-platform iOS & Android avec Flutter. UX native, performances optimisées, publication sur les stores.',
  },
  {
    n: '03',
    icon: '🔌',
    title: 'APIs & Microservices',
    desc: "Conception et développement d'APIs robustes, documentées et sécurisées. Authentification JWT/OAuth, rate limiting, webhooks.",
  },
  {
    n: '04',
    icon: '🎨',
    title: 'Interfaces & Design System',
    desc: 'Intégration Figma pixel-perfect, bibliothèques de composants, animations soignées. Accessibilité et performance comme standards.',
  },
  {
    n: '05',
    icon: '🚀',
    title: 'DevOps & CI/CD',
    desc: 'Containerisation Docker, pipelines GitHub Actions, déploiements automatisés. Infrastructure fiable pour des livraisons sans stress.',
  },
  {
    n: '06',
    icon: '🔍',
    title: 'Audit & Optimisation',
    desc: 'Analyse de code, optimisation des performances (Core Web Vitals, N+1, bundle), sécurité et réduction de la dette technique.',
  },
]
</script>

<!-- ════════════════════════════════════════════════════════════
     9. components/project/Projects.vue   ← NOUVEAU composant
     ════════════════════════════════════════════════════════════ -->
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

<!-- ════════════════════════════════════════════════════════════
     10. components/Footer.vue
     ════════════════════════════════════════════════════════════ -->
<template>
  <!-- CONTACT + FOOTER -->

  <!-- Contact section -->
  <section
    id="contact"
    class="py-28 bg-ink text-center bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(212,168,83,.07)_0%,transparent_70%)]"
  >
    <div class="max-w-[1200px] mx-auto px-10">
      <span class="font-mono text-[.65rem] tracking-[.2em] uppercase text-gold block mb-6"
        >06 — Contact</span
      >

      <h2
        class="font-serif font-black text-ivory leading-[.95] tracking-[-0.04em] mx-auto mb-5"
        style="font-size: clamp(3rem, 8vw, 7.5rem); max-width: 800px"
      >
        Construisons<br /><em class="text-gold">ensemble.</em>
      </h2>

      <p class="text-muted text-[1rem] leading-relaxed max-w-[420px] mx-auto mb-12">
        Un projet en tête ? Une mission freelance ? Ou juste envie de discuter tech ? Je réponds
        sous 24h.
      </p>

      <div class="flex justify-center gap-4 flex-wrap mb-14">
        <a
          href="mailto:borisaxel@example.com"
          class="inline-flex items-center gap-2 bg-gold text-ink font-mono font-medium text-[.72rem] tracking-widest uppercase px-8 py-3.5 rounded-sm no-underline transition-all duration-200 hover:bg-ivory hover:-translate-y-0.5"
        >
          Envoyer un email
          <svg
            width="13"
            height="13"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            viewBox="0 0 24 24"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-10 7L2 7" />
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/borisaxel"
          target="_blank"
          class="border border-rule text-muted font-mono text-[.72rem] tracking-widest uppercase px-7 py-3.5 rounded-sm no-underline transition-all duration-200 hover:border-gold-line hover:text-gold"
        >
          LinkedIn →
        </a>
      </div>

      <!-- Networks -->
      <div class="flex flex-wrap justify-center gap-3">
        <a
          v-for="n in networks"
          :key="n.label"
          :href="n.href"
          target="_blank"
          class="flex items-center gap-2 bg-ink2 border border-rule rounded px-5 py-2.5 font-mono text-[.68rem] tracking-[.08em] text-muted no-underline transition-all duration-200 hover:border-gold-line hover:text-gold hover:bg-gold-dim hover:-translate-y-0.5"
          data-hover
        >
          <span v-html="n.icon" class="w-3.5 h-3.5 flex-shrink-0"></span>
          {{ n.label }}
        </a>
      </div>
    </div>
  </section>

  <!-- Footer bar -->
  <footer class="border-t border-rule bg-ink2 py-8">
    <div class="max-w-[1200px] mx-auto px-10 flex flex-wrap justify-between items-center gap-4">
      <div class="font-serif text-[1.1rem] font-bold text-ivory">Boris Axel</div>
      <div class="font-mono text-[.65rem] tracking-widest text-muted2">
        © {{ new Date().getFullYear() }} — Ingénieur Logiciel Fullstack · Libreville, Gabon
      </div>
      <div class="flex gap-5">
        <a
          href="#hero"
          class="font-mono text-[.65rem] tracking-widest uppercase text-muted2 no-underline transition-colors hover:text-gold"
        >
          ↑ Haut
        </a>
        <a
          href="https://github.com/Meindonsa"
          target="_blank"
          class="font-mono text-[.65rem] tracking-widest uppercase text-muted2 no-underline transition-colors hover:text-gold"
        >
          GitHub
        </a>
        <a
          href="mailto:borisaxel@example.com"
          class="font-mono text-[.65rem] tracking-widest uppercase text-muted2 no-underline transition-colors hover:text-gold"
        >
          Email
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const networks = [
  {
    label: 'borisaxel@example.com',
    href: 'mailto:borisaxel@example.com',
    icon: `<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>`,
  },
  {
    label: 'Meindonsa',
    href: 'https://github.com/Meindonsa',
    icon: `<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"/></svg>`,
  },
  {
    label: 'linkedin.com/in/borisaxel',
    href: 'https://linkedin.com/in/borisaxel',
    icon: `<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>`,
  },
  {
    label: '@meindonsa',
    href: 'https://twitter.com/meindonsa',
    icon: `<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  },
  {
    label: 'meindonsa.vercel.app',
    href: 'https://meindonsa.vercel.app',
    icon: `<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/></svg>`,
  },
]
</script>
