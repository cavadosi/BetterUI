<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import button from '../theme/button'

// Props
const props = defineProps({
  color: {
    type: String as PropType<string>,
    default: 'indigo',
  },
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
    default: 'md', // Default size
  },
})

// Retrieve config
const config = button()

// Compute the button classes based on the `size` prop
const buttonClass = computed(() => {
  const baseStyles = config.slots.base.join(' ') // Combine base styles
  const sizeStyles = config.size[props.size]?.base || '' // Fallback to empty string if size is not found
  const colorStyles = config.colors[props.color]
  return `${baseStyles} ${sizeStyles} ${colorStyles}`
})
</script>

<template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>

<style scoped>
/* Add custom styles here if needed */
</style>
