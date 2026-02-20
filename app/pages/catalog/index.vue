<script setup lang="ts">
import type { GetCategoriesResponse } from "~/types/category";
import type { GetProductsResponse } from "~/types/product";

const config = useRuntimeConfig();
const API_URL = config.public.api_url;

const select = ref("");
const selectDef = [
  {
    value: "",
    label: "Категории",
  },
];

const { data } = await useFetch<GetCategoriesResponse>(`${API_URL}/categories`);
const { data: productsData } = await useFetch<GetProductsResponse>(
  `${API_URL}/products`,
  {
    query: {
      limit: 20,
      offset: 0,
    },
  },
);

const categoriesSelect = computed(() => {
  return data.value
    ? data.value.categories.map((c) => ({
        value: c.id.toString(),
        label: c.name,
      }))
    : [];
});
</script>

<template>
  <div class="app">
    <h1 class="catalog-title">Каталог товаров</h1>
    <div class="catalog">
      <div class="catalog__filter">
        <SelectFiled
          v-model="select"
          :options="selectDef.concat(categoriesSelect)"
        />
      </div>
      <div class="catalog__grid">
        <CatalogGard
          v-for="product in productsData?.products"
          :key="product.id"
          v-bind="product"
        />
      </div>
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

.catalog__grid {
  display: flex;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px 12px;
  flex-wrap: wrap;
}
</style>
