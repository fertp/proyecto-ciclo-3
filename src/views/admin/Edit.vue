<template>
  <admin-layout>

    <h1>EDITAR PRODUCTO</h1>
    <px-product-form 
      :productData="product"
      actionBtn="Guardar">

    </px-product-form>

  </admin-layout>
</template>

<script>
import AdminLayout from '@/layouts/AdminLayout.vue';
import PxProductForm from '@/components/admin/PxProductForm.vue';
import productsJson from "@/productos.json";

export default {
  name: "Edit",
  components: { AdminLayout,PxProductForm },

  data () {
    return {
      product: {}
    }
  },

  created() {
    this.product = productsJson.find((p) => {
      return p.id == this.$route.params.id;
    });
  },
};
</script>