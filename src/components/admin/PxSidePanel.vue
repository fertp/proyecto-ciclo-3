<template>
  <section class="side-panel">
    <nav class="side-panel__nav">
      <ul class="side-panel__list">
        <li class="side-panel__item">
          <router-link to="/admin" class="side-panel__link">Admin</router-link>
        </li>
        <li class="side-panel__item">
          <router-link to="/admin/productos" class="side-panel__link">Productos</router-link>
        </li>
        <li class="side-panel__item">
          <router-link to="/admin/categorias" class="side-panel__link">Categorías</router-link>
        </li>
        <!-- <li class="side-panel__item">
          <router-link to="/admin/usuarios" class="side-panel__link">Usuarios</router-link>
        </li> -->
      </ul>
      <ul class="side-panel__list">
        <li class="side-panel__item">
          <a href="/" class="side-panel__link">Sitio web</a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<style scoped>
.side-panel {
  width: 100%;
  height: 100%;
  background-color: #aaa;
  padding: 30px 0;
  box-sizing: border-box;
}
.side-panel__nav {
  display: flex;
  height: 100%;;
  flex-direction: column;
  justify-content: space-between;
}
.side-panel__list {
  list-style: none;
}
.side-panel__item {
  padding: 8px 12px;
  box-sizing: border-box;
  margin-bottom: 4px;
  border-top: 1px solid #888;
  border-bottom: 1px solid #888;
}
.side-panel__link {
  text-decoration: none;
  color: black;
  font-weight: bold;
}
</style>

<script>
export default {
  name: "PxSidePanel",
};
</script>
