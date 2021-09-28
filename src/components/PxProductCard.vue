<template>
  <article class="product-card">
    <h3 class="product-card__title">
      {{ product.name }}
    </h3>
    <img src="@/assets/bici.jpg" :alt="product.name" class="product-card__img" />
    <p class="product-card__price">
      {{ product.price }}
    </p>
    <!-- Esto va dentro de un router-link -->
    <router-link
      :to="{ name: 'producto', params: { slug: product.slug, id: product.id } }"
      class="product-card__button"
    >
      VER PRODUCTO
    </router-link>
  </article>
</template>

<style scoped>
.product-card {
  display: block;
  padding-bottom: 30px;
  border-radius: 4px;
  box-shadow: 0 0 2px #ccc;
  text-align: center;
}
.product-card__img {
  display: block;
  width: 100%;
}
.product-card__button {
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 32px;
  background-color: #333;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  border-radius: 4px;
}
.product-card__price {
  font-size: 24px;
  font-weight: bold;
}
</style>

<script>
export default {
  name: "PxProductCard",

  props: {
    product: {},
  },

  // methods: {
  //   getImagePath(img) {
  //     return require(`@/assets/${img}`);
  //   },
  // },
};
</script>
