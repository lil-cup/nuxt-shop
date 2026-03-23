<script setup lang="ts">
import type { Product } from "~/types/product";

useSeoMeta({
  title: "Избранное",
});
const API_URL = useAPI();
const favoriteStore = useFavoritesStore();
const products = ref<Product[]>();

watchEffect(async () => {
  const data = await Promise.all(
    favoriteStore.favoriteIds.map((id) => {
      return $fetch<{ product: Product }>(`${API_URL}/products/${id}`);
    }),
  );

  products.value = data.map((el) => el.product);
});
</script>

<template>
  <div class="catalog__grid">
    <CatalogGard
      v-for="product in products"
      :key="product.id"
      v-bind="product"
    />
  </div>
</template>

<style scoped>
.catalog__grid {
  display: flex;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 64px 12px;
  flex-wrap: wrap;
}
</style>
