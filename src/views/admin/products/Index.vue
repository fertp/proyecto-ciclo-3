<template>
  <admin-layout> 

    <h1>Lista de productos</h1>
    
    <!-- tabla -->
    <px-products-table 
      class="product-table"
      :products="computedProducts" 
      @search-products="searchProducts" />

  </admin-layout>
</template>

<style>
.product-table {
  margin-top: 30px;
}
</style>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import PxProductsTable from "@/components/admin/PxProductsTable.vue";
import api from "@/api.js";

export default {
  name: "Index",
  components: { AdminLayout, PxProductsTable },

  data() {
    return {
      products: [],
      query: '',
      searchedProducts: []
    };
  },

  created() {
    api.getProducts().then((response) => {
      this.products = response.data;
    })
  },

  computed: {

    computedProducts: function() {
      if (!this.query) {
        return this.products;
      } 
      else {
        return this.searchedProducts;
      }
    },
  },

  watch: {

    query: function(newQuery) {
      let querySplited = newQuery.split('')
      if (querySplited.length > 2) {
        this.getProductsByQuery(newQuery)
      }
    }

  },

  methods: {

    searchProducts(query) {
      this.query = query
    },

    getProductsByQuery(query) {
      // console.log(query)
      api.getProductsByQuery(query)
      .then(response => {
        this.searchedProducts = response.data
      })
    }

  }

};
</script>
