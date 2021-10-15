<template>
  <web-layout>
    <px-title :title="title" class="page-title" />
    <main class="producto-page">
      <div class="producto-page__container">
        <!-- row1 -->
        <div class="producto__grid">
          <div class="producto__img-box">
            <img :src="product.image" :alt="product.name" class="producto__img" />
          </div>
          <div class="producto__text">
            <h1 class="producto__title">{{ product.name }}</h1>
            <p>Precio:</p>
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

        <!-- Productos relacionados -->
        <section v-if="relatedProducts" class="productos">
          <h1 class="productos__title">Productos relacionados</h1>
          <div class="productos__grid">
            <px-product-card
              v-for="p in relatedProducts"
              :key="p._id"
              :product="p"
            ></px-product-card>
          </div>
        </section>
      </div>
    </main>
  </web-layout>
</template>

<style scoped>
.page-title {
  margin-top: 80px;
}
.producto-page {
  padding: 0 30px;
  box-sizing: border-box;
}
.producto-page__container {
  margin: 0 auto;
  max-width: 960px;
  padding: 130px 0 50px;
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
import WebLayout from "@/layouts/WebLayout.vue";
import PxTitle from "@/components/PxTitle";
import PxProductCard from "@/components/PxProductCard.vue";
import api from "@/api.js";

export default {
  name: "Producto",
  components: {
    WebLayout,
    PxTitle,
    PxProductCard,
  },

  data() {
    return {
      product: {},
      relatedProducts: [],
    };
  },

  computed: {
    formatedPrice() {
      let formatedPrice = "$" + this.product.price;
      return formatedPrice;
    },
    
    title() {
      return this.product.name
    }
  },

  created() {
    // this.product = productsJson.find((p) => {
    //   return p.slug === this.$route.params.slug;
    // });
    let slug = this.$route.params.slug;
    api
      .getProductBySlug(slug)
      .then((response) => {
        this.product = response.data;
      })
      .then(() => {
        this.getProduct(this.product.category_id);
      });
  },
  methods: {
    getProduct(id) {
      api.getProductsByCategory(id).then((response) => {
        this.relatedProducts = response.data;
      });
    },
  },
};
</script>
