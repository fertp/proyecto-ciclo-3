<template>
  <admin-layout>

    <h1>CREAR PRODUCTO</h1>
    <px-product-form actionBtn="Crear" :product="{}" />

  </admin-layout>
</template>

<script>
import PxProductForm from "@/components/admin/PxProductForm.vue";
import AdminLayout from "@/layouts/AdminLayout.vue"

export default {
  name: "Create",
  components: { AdminLayout, PxProductForm },
  data () {
    return {
      product: {}
    }
  }
};
</script>