<template>
  <div>
    <admin-header />

    <admin-aside />

    <slot></slot>
  </div>
</template>

<script>
import AdminHeader from "@/components/admin/AdminHeader.vue";
import AdminAside from "@/components/admin/AdinAside.vue";

export default {
  name: "AdminLayout",
  components: { AdminHeader, AdminAside },
};
</script>
