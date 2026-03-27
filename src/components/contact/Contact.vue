<script setup lang="ts">
const socialNetworks = [
  {
    label: 'e.borisaxel@gmail.com',
    href: 'mailto:e.borisaxel@gmail.com',
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
    label: 'meindonsa.vercel.app',
    href: 'https://meindonsa.vercel.app',
    icon: `<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/></svg>`,
  },
]
</script>

<template>
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
          href="mailto:e.borisaxel@gmail.com"
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
          v-for="n in socialNetworks"
          :key="n.label"
          :href="n.href"
          target="_blank"
          class="flex items-center gap-2 bg-ink2 border border-rule rounded px-5 py-2.5 font-mono text-[.68rem] tracking-[.08em] text-muted no-underline transition-all duration-200 hover:border-gold-line hover:text-gold hover:bg-gold-dim hover:-translate-y-0.5"
          data-hover
        >
          <span v-html="n.icon" class="w-3.5 h-3.5 shrink-0"></span>
          {{ n.label }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
