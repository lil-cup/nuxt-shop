<script setup lang="ts">
const { color = "primary" } = defineProps<{
  color?: "primary" | "ghost";
}>();
</script>
<template>
  <button :class="color">
    <slot />
  </button>
</template>

<style scoped>
button {
  cursor: pointer;
  font-family: var(--font);
  font-size: 16px;
  font-weight: 700;
  border-radius: 4px;
  border: 1px solid var(--color-black);
  padding: 16px;
}
.primary {
  background: var(--color-black);
  color: var(--color-white-light);
}

.ghost {
  background: var(--color-white-light);
  color: var(--color-black);
}

.primary:hover {
  background: var(--color-black-hover);
}

.ghost:hover {
  background: var(--color-black-hover);
  color: var(--color-white-light);
}
</style>
