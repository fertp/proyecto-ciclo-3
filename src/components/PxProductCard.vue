<template>
  <article class="product-card">
    <h3 class="product-card__title">
      {{ product.name }}
    </h3>
    <div>
      <img :src="product.image" :alt="product.name" class="product-card__img" />
      <p class="product-card__price">
        {{ product.price }}
      </p>
      <router-link
        :to="{ name: 'producto', params: { slug: product.slug, id: product.id } }"
        class="product-card__button">
        VER PRODUCTO
      </router-link>
    </div>
  </article>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 30px;
  box-sizing: border-box;
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

  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>
