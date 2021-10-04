<template>
  <admin-layout> 
    <!-- tabla -->
      <px-products-table />
  </admin-layout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import PxProductsTable from "@/components/admin/PxProductsTable.vue";

export default {
  name: "Index",
  components: { AdminLayout, PxProductsTable },
};
</script>
