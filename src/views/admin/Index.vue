<template>
  <admin-layout> 
    
    <h1>El sistema tiene {{ products.length }} productos cargados</h1>

  </admin-layout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import api from "@/api.js";

export default {
  name: "Index",
  components: { AdminLayout },

  data() {
    return {
      products: [],
    };
  },

  created() {
    api.getProducts().then((response) => {
      this.products = response.data;
    });
  },

  methods: {},
};
</script>
