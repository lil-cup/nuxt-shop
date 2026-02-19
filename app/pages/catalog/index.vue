<script setup lang="ts">
import type { GetCategoriesResponse } from "~/types/category";

const config = useRuntimeConfig();
const API_URL = config.public.api_url;

const select = ref("");

const { data } = await useFetch<GetCategoriesResponse>(`${API_URL}/categories`);

const selectDef = {
  value: "",
  label: "Категории",
};
const categoriesSelect = computed(() => {
  return data.value
    ? data.value.categories
        .map((c) => ({
          value: c.id.toString(),
          label: c.name,
        }))
        .concat(selectDef)
    : [selectDef];
});
</script>

<template>
  <div class="app">
    <h1 class="catalog-title">Каталог товаров</h1>
    <div class="catalog">
      <div class="catalog__filter">
        <SelectFiled v-model="select" :options="categoriesSelect" />
      </div>
      <div></div>
    </div>
  </div>
</template>

<style scoped>
.catalog-title {
  text-align: left;
}

.catalog {
  display: flex;
  gap: 36px;
}

.catalog__filter {
  width: 260px;
}
</style>
