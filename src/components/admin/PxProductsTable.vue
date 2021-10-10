<template>
  <div>
    <section class="table-top">
      <input @input="$emit('search-products', query)"
        v-model="query"
        type="text" 
        class="table-top__search-box" 
        placeholder="Buscar..." />
      <div class="table-top__create-button">
        <span class="table-top__create-label">Crear Producto</span>
        <router-link to="/admin/create" class="primary-button button">Crear</router-link>
      </div>
    </section>
    <!-- products-table -->
    <table class="products-table">
      <thead>
        <tr>
          <th>CATEGORÍA</th>
          <th>NOMBRE</th>
          <th colspan="2">ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in products" :key="p._id">
          <td class="product-table__id-column">{{ p.category_id }}</td>
          <td>{{ p.name }}</td>
          <td class="container-table__celdaboton">
            <router-link :to="`/admin/edit/${p._id}`" class="button boton-celda">Editar</router-link>
          </td>
          <td class="container-table__celdaboton">
            <router-link :to="`/admin/show/${p._id}`" class="button boton-celda">Ver</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style>
.table-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}
.table-top__search-box {
  display: block;
  height: 30px;
  border: 1px solid #ccc;
  width: 100%;
  padding: 0 4px;
}
.table-top__create-button {
  display: flex;
  align-items: center;
}
.table-top__create-label {
  margin: 8px;
  display: block;
  min-width: 120px;
  text-align: right;
}
.products-table {
  margin: 0 auto;
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  border: 1px solid #ccc;
}
.products-table td {
  border: 1px solid #ccc;
  padding: 4px;
}
.products-table th {
  background-color: #ccc;
  padding: 20px;
}
.table-cabecera__nombre {
  width: 250px;
}
.container-table__celdaboton {
  width: 40px;
  text-align: center;
}
.product-table__id-column {
  width: 60px;
}
</style>
<script>

export default {
  name: "PxTablaAdmin",

  props: {
    products: []
  },

  data() {
    return {
      query: ''
    };
  },

};
</script>
