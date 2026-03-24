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

<template>
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
