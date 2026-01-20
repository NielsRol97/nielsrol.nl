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
          :src="portrait"
          alt="Portrait of Niels Rol"
          class="hero-image"
        />
    </div>
  </section>
</template>


<script lang="ts" setup>
import Text from '@/components/Text.vue'

import { assetUrl } from '@/utils/asset'
const portrait = assetUrl('/images/portrait.jpeg')
</script>

<style scoped>
.hero-wrapper {
  width: 100%;
  min-height: 100vh;
  min-height: 100svh;
  display: grid;
  grid-template-columns: minmax(320px, 520px) 1fr;
  align-items: center;
  gap: 4rem;
  padding: clamp(2rem, 5vw, 6rem);
}

/* LEFT: text */
.hero-left {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

/* RIGHT: image container */
.hero-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* IMAGE TREATMENT */
.hero-image {
  width: 100%;
  max-width: 420px;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 1.25rem;

  /* subtle depth */
  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.25),
    0 10px 20px rgba(0, 0, 0, 0.15);
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .hero-wrapper {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-left {
    align-items: center;
  }

  .hero-image {
    max-width: 260px;
  }
}

</style>
