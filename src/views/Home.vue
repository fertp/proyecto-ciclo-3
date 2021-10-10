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

            <px-product-card v-for="p in featuredProducts" :key="p._id" :product="p" />

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
import api from "@/api.js";

export default {
  name: "Home",
  components: {
    WebLayout,
    PxCoverSlider,
    PxProductCard,
  },

  data() {
    return {
      products: [],
    };
  },
  
  created() {
    api.getProducts().then((response) => {
      this.products = response.data;
      // console.log(response.data);
    })
  },

  computed: {
    featuredProducts: function () {
      let featuredProducts = this.products.slice(0, 6);
      return featuredProducts;
    },
  },
};
</script>
