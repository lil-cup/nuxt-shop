<script setup lang="ts">
import type { LoginResponse } from "~/types/auth";
useSeoMeta({
  title: "Вход",
});
const API_URL = useAPI();
const email = ref<string>();
const password = ref<string>();
const authStore = useAuthStore();

async function login() {
  const data = await $fetch<LoginResponse>(`${API_URL}/auht/login`, {
    method: "POST",
    body: {
      email: email.value,
      password: password.value,
    },
  });
  authStore.setToken(data.token);
  navigateTo("/account");
}
</script>

<template>
  <div class="app">
    <h1>Мой аккаунт</h1>
    <form class="login-form">
      <div class="login-form__fileds">
        <InputFiled v-model="email" variant="gray" placeholder="Email" />
        <InputFiled
          v-model="password"
          variant="gray"
          placeholder="Пароль"
          type="password"
        />
      </div>
      <div class="login-form__actions">
        <ActionButton @click.stop.prevent="login">Вход</ActionButton>
        <NuxtLink to="/auth/restore">Забыли пароль?</NuxtLink>
      </div>
    </form>
  </div>
</template>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  gap: 70px;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 64px;
}

.login-form__fileds {
  display: flex;
  flex-direction: column;
  gap: 46px;
}

.login-form__actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.login-form__actions a {
  text-decoration: none;
  margin: 0 auto;
  color: var(--color-black);
}

.login-form__actions a:hover {
  color: var(--color-black-hover);
}
</style>
