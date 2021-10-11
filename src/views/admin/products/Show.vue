<template>
  <admin-layout>
    <div class="producto-page__container">
      <!-- row1 -->
      <div class="producto__grid">
        <div class="producto__img-box">
          <img :src="product.image" :alt="product.name" class="producto__img" />
        </div>
        <div class="producto__text">
          <h1 class="producto__title">{{ product.name }}</h1>
          <p class="producto__price">{{ formatedPrice }}</p>
        </div>
      </div>

      <!-- row2 -->
      <div class="producto__grid">
        <div class="producto__col">
          <h2 class="producto__sub-title">Descripción</h2>
          <p class="producto__description">
            {{ product.description }}
          </p>
        </div>
        <div class="producto__col">
          <h2 class="producto__sub-title">Caracteristícas</h2>
          <p class="producto__features">
            {{ product.features }}
          </p>
        </div>
      </div>

      <!-- TODO -->
      <!-- SECTION CON PRODUCTOS RELACIONADOS -->
    </div>
  </admin-layout>
</template>
<style scoped>
.producto-page {
  padding: 0 30px;
  box-sizing: border-box;
}
.producto-page__container {
  margin: 0 auto;
  max-width: 960px;
  box-shadow: 0 0 4px #ccc;
}
.producto__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}
.producto__img-box {
  background-color: #eee;
  padding: 4px;
  box-sizing: border-box;
  border-radius: 4px;
  box-align: 0 0 2px #ccc;
}
.producto__img {
  display: block;
  width: 100%;
}
.producto__price {
  font-size: 40px;
  font-weight: bold;
}
</style>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import api from "@/api.js";

export default {
  name: "Show",
  components: { AdminLayout },

  data() {
    return {
      product: {},
    };
  },

  computed: {
    formatedPrice() {
      let formatedPrice = "$" + this.product.price;
      return formatedPrice;
    },
  },

  created() {
    let id = this.$route.params.id;
    api.getProduct(id).then((response) => {
      this.product = response.data;
      console.log(response.data)
    })
  },
};
</script>
