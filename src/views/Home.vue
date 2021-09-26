<template>
  <main class="home-page">
    <!-- cover slider -->
    <px-cover-slider />
    <!-- Productos -->
    <section class="productos">
      <div class="productos__container">
        <h2 class="productos__title">PRODUCTOS DESTACADOS</h2>
        <div class="productos__grid">
          <px-product-card :product="product" />
          <div v-for="p in products" :key="p.id">
            {{ p }}
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* .home-page {
  padding-top: 80px;
} */
.productos {
  padding: 0 30px;
  box-sizing: border-box;
}
.productos__container {
  padding: 50px 0;
  margin: auto;
  max-width: 1280px;
}
.productos__title {
  text-align: center;
}
.productos__grid {
  margin-top: 50px;
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); */
  grid-template-columns: 1fr;
  gap: 30px;
}

@media screen and (min-width: 480px) {
  .productos__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 768px) {
  .productos__grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>

<script>
import productsJson from "@/productos.json";
import PxCoverSlider from "@/components/PxCoverSlider.vue";
import PxProductCard from "@/components/PxProductCard.vue";

export default {
  name: "Home",
  components: {
    PxCoverSlider,
    PxProductCard,
  },

  data() {
    return {
      product: {
        name: "Nombre producto",
        image: "@/assets/bici.jpg",
        price: "$29.900",
      },
      products: [],
    };
  },

  created() {
    this.products = productsJson;
  },
};
</script>
