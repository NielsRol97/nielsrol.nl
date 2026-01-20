<template>
  <component
    :is="tag"
    :href="isAnchor ? button.href : undefined"
    :type="!isAnchor ? 'button' : undefined"
    :disabled="!isAnchor ? button.disabled : undefined"
    class="btn"
    :class="`btn--${variant}`"
    @click="handleClick"
  >
    {{ button.label }}
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Button } from '@/types/button'

const props = defineProps<{
  button: Button
}>()

const isAnchor = computed(() => props.button.type === 'anchor')

const tag = computed(() => (isAnchor.value ? 'a' : 'button'))

const variant = computed(() => props.button.variant ?? 'primary')

const handleClick = () => {
  if (!isAnchor.value && props.button.onClick) {
    props.button.onClick()
  }
}
</script>
