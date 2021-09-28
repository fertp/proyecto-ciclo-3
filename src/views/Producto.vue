<template>
  <web-layout>
    <br />
    <br />
    <br />
    <br />

    <h1>{{ product.name }}</h1>
    <p>Hay que maquetar esta vista</p>
  </web-layout>
</template>

<script>
import WebLayout from "@/layouts/WebLayout.vue";
import productsJson from "@/productos.json";

export default {
  name: "Producto",
  components: {
    WebLayout,
  },

  data() {
    return {
      product: {},
    };
  },

  created() {
    this.product = productsJson.find((p) => {
      return p.slug === this.$route.params.slug;
    });
  },
};
</script>
