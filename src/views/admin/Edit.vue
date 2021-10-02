<template>
  <admin-layout>
    
    <h1>EDITAR PRODUCTO</h1>
    <px-product-form action="edit">

    </px-product-form>

  </admin-layout>
</template>

<script>
import AdminLayout from '@/layouts/AdminLayout.vue';
import PxProductForm from '@/components/admin/PxProductForm.vue';

export default {
  name: "Edit",
  components: { AdminLayout,PxProductForm }
};
</script>