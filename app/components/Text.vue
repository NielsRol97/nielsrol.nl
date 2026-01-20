<template>
  <component
    :is="tag"
    :class="['text', `text--${tag}`]"
  >
    {{ text.content }}
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { Text } from '@/types/text'

const props = defineProps<{
  text: Text
}>()

const tag = computed(() => props.text.type ?? 'p')
</script>
