<template>
  <web-layout>

    <main class="productos-page">
      <div class="productos-page__container">
        <aside class="aside-categoria">
          <h1 class="aside-categorias__title">Categorias</h1>
          <div class="aside-categorias__container">
            <px-categorias></px-categorias>
          </div>
        </aside>
        <section class="productos">
          <div class="productos__grid">

            <px-product-card 
              v-for="p in products"
              :key="p.id"
              :product="p"></px-product-card>

          </div>
        </section>
      </div>
    </main>

  </web-layout>
</template>

<style scoped>
.productos-page {
  padding: 80px 30px 0;
  box-sizing: border-box;
}
.productos-page__container {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 30px;
  padding: 50px 0;
  max-width: 1280px;
  margin: 0 auto;
}
.aside-categoria {
  display: block;
  font-size: 15px;
  width: 100%;
}
.aside-categorias__container {
  background: #ccc;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
}
.aside-categorias__title {
  font-size: 20px;
  line-height: 0;
}
.productos {
  box-sizing: border-box;
}

.productos__grid {
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
@media screen and (min-width: 640px) {
  .productos-page__container {
    grid-template-columns: 1fr 2fr;
  }
}
@media screen and (min-width: 960px) {
  .productos-page__container {
    grid-template-columns: 1fr 3fr;
  }
  .productos__grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
<script>
import WebLayout from "@/layouts/WebLayout.vue";
import productsJson from "@/productos.json";
import PxCategorias from "@/components/PxCategorias.vue";
import PxProductCard from "@/components/PxProductCard.vue";
export default {
  name: "Productos",
  components: {
    WebLayout,
    PxCategorias,
    PxProductCard,
  },

  data() {
    return {
      products: [],
    };
  },

  created() {
    this.products = productsJson;
  },

};
</script>
