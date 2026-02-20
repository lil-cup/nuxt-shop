<script setup lang="ts">
import type { GetCategoriesResponse } from "~/types/category";
import type { Product } from "~/types/product";

const config = useRuntimeConfig();
const API_URL = config.public.api_url;

const select = ref("");

const { data } = await useFetch<GetCategoriesResponse>(`${API_URL}/categories`);

const selectDef = [
  {
    value: "",
    label: "Категории",
  },
];
const categoriesSelect = computed(() => {
  return data.value
    ? data.value.categories.map((c) => ({
        value: c.id.toString(),
        label: c.name,
      }))
    : [];
});

const product: Product = {
  id: 1,
  name: "Lira Earrings",
  price: 20,
  short_description: "Элегантные золотистые серьги-кольца",
  long_description:
    "Отлично подойдут к любому гардеробу. Чистое золото высокой пробы, которое не оставит вас равнодушными к качеству изделия.",
  sku: "12",
  discount: 0,
  images: [
    "/images/jewelry/lira1.jpg",
    "/images/jewelry/lira2.jpg",
    "/images/jewelry/lira3.jpg",
    "/images/jewelry/lira4.jpg",
  ],
  category_id: 1,
  category: {
    id: 1,
    name: "Серьги",
    alias: "earrings",
  },
  created_at: "2026-02-19T19:24:41Z",
  updated_at: "2026-02-19T19:24:41Z",
};
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
      <div>
        <CatalogGard v-bind="product" />
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
</style>
