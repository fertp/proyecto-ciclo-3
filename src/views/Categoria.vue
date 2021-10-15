<template>
  <web-layout>
    <px-title :title="title" class="page-title" />
    <main class="productos-page">
      <div class="productos-page__container">
        <aside class="aside-categoria">
          <h1 class="aside-categorias__title">Categorias</h1>
          <div class="aside-categorias__container">
            <px-categorias :categories="categories" />
          </div>
        </aside>
        <section class="productos">
          <h1 class="productos__title">{{ category.name }}</h1>
          <div v-if="products" class="productos__grid">
            <px-product-card v-for="p in products" :key="p.id" :product="p"></px-product-card>
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
import PxCategorias from "@/components/PxCategorias.vue";
import PxProductCard from "@/components/PxProductCard.vue";
import PxTitle from "@/components/PxTitle";
import api from "@/api.js";

export default {
  name: "Productos",
  components: {
    WebLayout,
    PxCategorias,
    PxProductCard,
    PxTitle,
  },

  data() {
    return {
      products: [],
      category: {},
      categories: [],
    };
  },

  computed: {
    
    title() {
      return this.category.name
    }
  },

  created() {
    this.getCategories();
  },

  methods: {
    getCategories() {
      api
        .getCategories()
        .then((response) => {
          this.categories = response.data;
        })
        .then(() => {
          this.category = this.categories.find((c) => {
            return c.slug == this.$route.params.slug;
          });
        })
        .then(() => {
          this.getProducts(this.category._id);
        });
    },

    getProducts(id) {
      api.getProductsByCategory(id).then((response) => {
        this.products = response.data;
      });
    },
  },

  watch: {
    $route() {
      this.getCategories();
    },
  },
};
</script>
