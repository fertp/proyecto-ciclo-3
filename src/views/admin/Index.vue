<template>
  <admin-layout> 
    
    <!-- tabla -->
    <px-products-table 
      :products="computedProducts" 
      @search-products="searchProducts" />

  </admin-layout>
</template>

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
