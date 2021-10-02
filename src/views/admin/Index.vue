<template>
  <admin-layout> 
    <!-- tabla -->
      <px-tabla-admin />
  </admin-layout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import PxTablaAdmin from "@/components/admin/PxTablaAdmin.vue";

export default {
  name: "Index",
  components: { AdminLayout,PxTablaAdmin },
};
</script>
