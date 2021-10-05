<template>
  <admin-layout>
    <h1>EDITAR PRODUCTO</h1>
    <px-product-form  actionBtn="Guardar" :product="product"> </px-product-form>
    <px-delete-product-form />
  </admin-layout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import PxProductForm from "@/components/admin/PxProductForm.vue";

import PxDeleteProductForm from "@/components/admin/PxDeleteProductForm.vue";
import productsJson from "@/productos.json";

export default {
  name: "Edit",
  components: { 
    AdminLayout, 
    PxProductForm, 
    PxDeleteProductForm 
  },

  data() {
    return {
      product: {},
    };
  },

  created() {
    this.product = productsJson.find((p) => {
      return p.id == this.$route.params.id;
    });
  },
};
</script>
