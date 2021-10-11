<template>
  <div class="admin-layout">
    <!-- header -->
    <px-header-admin class="admin-layout__header" />

    <!-- content-grid -->
    <div class="admin-layout__content-grid">
      <!-- side-panel -->
      <px-side-panel />
      <!-- content-slot -->
      <section class="admin-layout__content-slot">

        <slot> </slot>

      </section>
    </div>

  </div>
</template>

<script>
import PxHeaderAdmin from "@/components/admin/PxHeaderAdmin.vue";
import PxSidePanel from "@/components/admin/PxSidePanel.vue";

export default {
  name: "AdminLayout",
  components: { PxHeaderAdmin, PxSidePanel },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.admin-layout {
  display: grid;
  height: 100vh;
  max-height: 100vh;
  grid-template-rows: 80px 1fr;
  width: 100%;
  top: 0;
}
.admin-layout__content-grid {
  display: grid;
  grid-template-columns: 200px auto;
}
.admin-layout__content-slot {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
  /* height: 100%; */
  padding: 50px;
  box-sizing: border-box;
  overflow-y: scroll;
}
.button {
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  /* width: 60px; */
  height: 30px;
  background-color: #ccc;
  border: 1px solid #444;
  color: #444;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
}
.primary-button {
  background-color: #000;
  color: #ffff;
}
.warning-button {
  background-color: red;
  color: #ffff;
}
</style>
