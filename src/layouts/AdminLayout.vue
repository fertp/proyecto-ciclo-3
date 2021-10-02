<template>
  <div class="admin-layout">
    <!-- header -->
    <px-header-admin />

    <!-- content-grid -->
    <div class="admin-layout__content-grid">
      <!-- side-panel -->
      <px-side-panel />
      
      <!-- content-slot -->
      <div class="admin-layout__content-slot">
        <slot>

        </slot>
      </div>
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
  position: fixed;
  display: grid;
  height: 100vh;
  grid-template-rows: 80px auto;
  width: 100%;
  top: 0;
  
  /* Hay que ponerle el alto completo de pantalla
    fijarlo y que sólo haga scroll la parte del contenido */
}
.admin-layout__content-slot{
padding: 50px;
box-sizing: border-box;
overflow: scroll;
}
.admin-layout__content-grid {
  display: grid;
  grid-template-columns: 200px auto;
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
  border:1px solid #444;
  color: #444;
  border-radius: 4px;
  text-decoration: none;
}
.primary-button{
  background-color: #000;
  color: #ffff;
}
</style>
