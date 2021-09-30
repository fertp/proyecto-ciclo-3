<template>
  <div class="admin-layout">
    <!-- header -->
    <px-header-admin />

    <!-- content-grid -->
    <div class="admin-layout__content-grid">
      <!-- side-panel -->
      <px-side-panel />
      <!-- tabla -->
      <px-tabla-admin />
      <!-- content-slot -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
import PxHeaderAdmin from "@/components/admin/PxHeaderAdmin.vue";
import PxSidePanel from "@/components/admin/PxSidePanel.vue";
import PxTablaAdmin from "@/components/admin/PxTablaAdmin.vue";
export default {
  name: "AdminLayout",
  components: { PxHeaderAdmin, PxSidePanel, PxTablaAdmin },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.admin-layout {
  display: grid;
  /* Hay que ponerle el alto completo de pantalla
    fijarlo y que sólo haga scroll la parte del contenido */
}
.admin-layout__content-grid {
  display: grid;
  grid-template-columns: 200px auto;
}
</style>
