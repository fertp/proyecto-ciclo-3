<template>
  <web-layout>
    <main class="home-page">
      <!-- cover slider -->
      <px-cover-slider />
      <!-- Productos -->
      <section class="productos">
        <div class="productos__container">
          <h2 class="productos__title">PRODUCTOS DESTACADOS</h2>
          <div class="productos__grid">
            <div v-for="p in featuredProducts" :key="p.id">
              <px-product-card :product="p" />
            </div>
          </div>
        </div>
      </section>
      <!-- TODO -->
      <!-- Agregar una seccion de descripción con título, imagen y párrafo -->
    </main>
  </web-layout>
</template>

<style scoped>
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
import WebLayout from "@/layouts/WebLayout.vue";
import PxCoverSlider from "@/components/PxCoverSlider.vue";
import PxProductCard from "@/components/PxProductCard.vue";
import productsJson from "@/productos.json";

export default {
  name: "Home",
  components: {
    WebLayout,
    PxCoverSlider,
    PxProductCard,
  },

  data() {
    return {
      // product: {
      //   name: "Nombre producto",
      //   image: "@/assets/bici.jpg",
      //   price: "$29.900",
      // },
      products: [],
    };
  },

  created() {
    this.products = productsJson;
  },

  computed: {
    featuredProducts() {
      let featured = [];

      for (let i = 0; i < 6; i++) {
        featured.push(this.products[i]);
      }

      return featured;
    },
  },
};
</script>
