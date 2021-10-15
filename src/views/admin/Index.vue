<template>
<<<<<<< HEAD
  <admin-layout> 
    
    <h1>El sistema tiene {{ products.length }} productos cargados</h1>

=======
  <admin-layout>
    <h1 style="color: red; background: yellow">ACÁ HAY QUE PONER ALGO LINDO.</h1>
>>>>>>> 0bba7308bb815f21bb8a3235f4415911a2a6e310
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
