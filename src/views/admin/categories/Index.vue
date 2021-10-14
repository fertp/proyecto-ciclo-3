<template>
  <admin-layout> 

    <h1>Categorías</h1>
    
    <!-- tabla -->
    <px-module v-if="categories[0]">

      <table class="categories-table">
      <thead>
        <tr>
          <th width="40%">NOMBRE</th>
          <th width="40%">SLUG</th>
          <th width="20%" colspan="2"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(c, index) in categories" :key="index">
          <td>
            <input type="text" v-model="c.name">
          </td>
          <td>
            <input type="text" v-model="c.slug">
          </td>
          <td>
            <button class="button" 
              @click="updateCategory(index)">Guardar</button>
          </td>
          <td>
            <button class="button warning-button"
              @click="deleteCategory(c._id)">Eliminar</button>
          </td>
        </tr>

      </tbody>
    </table>
    </px-module>

    <!-- Crear categoría -->
    <px-module>
      <form @submit="storeCategory">
        <h2>Crear categoría:</h2>
        <div class="crear-categoria">
          <input type="text" v-model="newCategory.name" placeholder="Nombre:">
          <input type="text" v-model="newCategory.slug" placeholder="Slug:">
          <button type="submit" class="button primary-button">Crear</button>
        </div>
      </form>
    </px-module>

  </admin-layout>
</template>

<style scoped>
.categories-table {
  width: 100%;
}
.categories-table input {
  display: block;
  width: 100%;
  height: 100%;
  padding: 8px 8px;
  box-sizing: border-box;
}
.crear-categoria {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.crear-categoria input {
  display: block;
  width: 45%;
  height: 100%;
  padding: 8px 8px;
  box-sizing: border-box;
}
</style>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import PxModule from "@/components/admin/PxModule.vue";
import api from "@/api.js";

export default {
  name: "Index",
  components: { AdminLayout, PxModule },

  data() {
    return {
      categories: [],
      newCategory: {}
    };
  },

  created() {

    this.getCategories()

  },

  methods: {
    
    getCategories() {
      api.getCategories()
      .then((response) => {
        this.categories = response.data;
      })
    },
    
    storeCategory($event) {
      $event.preventDefault()
      api.storeCategory(this.newCategory)
      .then(() => this.getCategories())
      .then(() => {
        this.newCategory = {}
      })
    },

    updateCategory(index) {
      let category = this.categories[index]
      let id = category._id
      api.updateCategory(id, category)
      .then(() => this.getCategories())
    },

    deleteCategory(id) {
      api.deleteCategory(id)
      .then(() => this.getCategories())
    }

  }

};
</script>
