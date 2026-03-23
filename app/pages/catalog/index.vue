<script setup lang="ts">
import { useDebounceFn } from "@vueuse/core";
import type { GetCategoriesResponse } from "~/types/category";
import type { GetProductsResponse } from "~/types/product";

const API_URL = useAPI();
const route = useRoute();
const router = useRouter();
const category_id = ref(route.query.category_id?.toString() ?? "");
const search = ref(route.query.search?.toString() ?? "");

const selectDef = [
  {
    value: "",
    label: "Категории",
  },
];

watch([category_id, search], () => {
  changeRoute(category_id, search);
});

const changeRoute = useDebounceFn((category_id, search) => {
  router.replace({
    query: { category_id: category_id.value, search: search.value },
  });
}, 100);

const query = computed(() => {
  return {
    limit: route.query.limit ?? 20,
    offset: route.query.offset ?? 0,
    category_id: route.query.category_id || undefined,
    search: route.query.search || undefined,
  };
});

const { data } = await useFetch<GetCategoriesResponse>(`${API_URL}/categories`);
const { data: productsData } = await useFetch<GetProductsResponse>(
  `${API_URL}/products`,
  {
    key: "get-products",
    query,
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
        <div class="catalog__search">
          <InputFiled v-model="search" variant="gray" placeholder="Поиск..." />
          <Icon name="icons:search" size="18px" />
        </div>
        <SelectFiled
          v-model="category_id"
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
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 260px;
}

.catalog__search {
  position: relative;
}

.catalog__search .iconify {
  position: absolute;
  top: 12px;
  right: 8px;
}

.catalog__grid {
  display: flex;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 64px 12px;
  flex-wrap: wrap;
}
</style>
