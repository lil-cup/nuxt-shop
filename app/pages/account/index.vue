<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
useSeoMeta({
  title: "Профиль",
});
const authStore = useAuthStore();
</script>

<template>
  <div>
    <NuxtLink href="/" @click="authStore.clearToken">Выход</NuxtLink>
  </div>
</template>
