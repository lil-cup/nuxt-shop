<template>
  <div>
    <div class="footer__top">
      <ul>
        <li><NuxtLink>КОНТАКТЫ</NuxtLink></li>
        <li><NuxtLink>УСЛОВИЯ ПОКУПКИ</NuxtLink></li>
        <li><NuxtLink>ДОСТАВКА И ВОЗВРАТ</NuxtLink></li>
      </ul>
      <div>
        <InputFiled variant="black" />
        <button>Подписаться</button>
      </div>
    </div>
    <div class="footer__button">
      <div>© {{ new Date().getFullYear() }} Shoppe</div>
      <div>
        <NuxtLink><Icon name="icons:li" /></NuxtLink>
        <NuxtLink><Icon name="icons:fb" /></NuxtLink>
        <NuxtLink><Icon name="icons:in" /></NuxtLink>
        <NuxtLink><Icon name="icons:tw" /></NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer__top {
  display: flex;
}

.footer__top ul {
  display: flex;
  list-style: none;
}
.footer__button {
  display: flex;
  justify-content: space-between;
}
</style>
