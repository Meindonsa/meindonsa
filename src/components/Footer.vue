<script setup lang="ts"></script>

<template>
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
          href="mailto:e.borisaxel@gmail.com"
          class="font-mono text-[.65rem] tracking-widest uppercase text-muted2 no-underline transition-colors hover:text-gold"
        >
          Email
        </a>
      </div>
    </div>
  </footer>
</template>
