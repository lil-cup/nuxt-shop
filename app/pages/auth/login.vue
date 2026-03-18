<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <div class="app">
    <h1>Мой аккаунт</h1>
    <form class="login-form">
      <div class="login-form__fileds">
        <InputFiled variant="gray" placeholder="Email" />
        <InputFiled variant="gray" placeholder="Пароль" type="password" />
      </div>
      <div class="login-form__actions">
        <ActionButton>Вход</ActionButton>
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
