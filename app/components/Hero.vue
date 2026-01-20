<template>
  <section class="hero-wrapper">
    <div class="hero-left">
      <Text
        :text="{
          content: 'Niels Rol',
          type: 'h1'
        }"
      />

      <Text
        :text="{
          content: 'Building clean, scalable web applications with Laravel and Vue.js.'
        }"
      />
    </div>

    <div class="hero-right">
      <NuxtImg
        src="/images/portrait.jpeg"
        alt="Portrait of Niels Rol"
        class="hero-image"
        format="webp"
        sizes="(max-width: 900px) 240px, 420px"
        loading="eager"
      />
    </div>
  </section>
</template>


<script lang="ts" setup>
import Text from '@/components/Text.vue'
</script>

<style scoped>
.hero-wrapper {
  width: 100%;
  min-height: 100vh;
  min-height: 100svh;

  display: grid;
  grid-template-columns: minmax(320px, 540px) 1fr;
  align-items: center;
  gap: clamp(3rem, 6vw, 6rem);

  padding: clamp(2.5rem, 6vw, 7rem);

  /* subtle background depth */
  background:
    radial-gradient(
      circle at 70% 40%,
      rgba(255, 255, 255, 0.06),
      transparent 55%
    );
}

/* -----------------------------
   LEFT: TEXT BLOCK
----------------------------- */

.hero-left {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

/* Slightly tighten heading spacing */
.hero-left :deep(.text--h1) {
  letter-spacing: -0.02em;
}

/* Subtitle refinement */
.hero-left :deep(.text--p) {
  max-width: 38ch;
  opacity: 0.85;
}

/* -----------------------------
   RIGHT: IMAGE BLOCK
----------------------------- */

.hero-right {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* Image container glow */
.hero-right::before {
  content: '';
  position: absolute;
  width: 80%;
  height: 80%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.12),
    transparent 70%
  );
  filter: blur(60px);
  z-index: 0;
}

/* Image itself */
.hero-image {
  position: relative;
  z-index: 1;

  width: 100%;
  max-width: 420px;
  aspect-ratio: 3 / 4;
  object-fit: cover;

  border-radius: 1.5rem;

  box-shadow:
    0 40px 80px rgba(0, 0, 0, 0.35),
    0 15px 30px rgba(0, 0, 0, 0.25);

  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease;
}

/* Subtle hover lift (desktop only) */
@media (hover: hover) {
  .hero-image:hover {
    transform: translateY(-6px);
    box-shadow:
      0 55px 100px rgba(0, 0, 0, 0.4),
      0 25px 45px rgba(0, 0, 0, 0.3);
  }
}

/* -----------------------------
   RESPONSIVE
----------------------------- */

@media (max-width: 900px) {
  .hero-wrapper {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }

  .hero-left {
    align-items: center;
  }

  .hero-left :deep(.text--p) {
    max-width: none;
  }

  .hero-image {
    max-width: 260px;
  }
}


</style>
