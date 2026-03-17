<script setup lang="ts">
const favoriteStore = useFavoritesStore();
</script>

<template>
  <div>{{ favoriteStore.favoriteIds[0] }}</div>
</template>
