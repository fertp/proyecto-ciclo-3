<template>
  <admin-layout> 
    
    Este es el admin

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
    })
  },

  methods: {

  }

};
</script>
