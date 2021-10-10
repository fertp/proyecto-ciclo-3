<template>
  <div class="producto-form__bottom">
    <label for="">¿Desea eliminar este producto?</label>
    <button class="button warning-button" @click="deleteProduct">Eliminar</button>
  </div>
</template>
<style>
.producto-form__bottom {
  width: 100%;
  max-width: 720px;
  padding: 30px;
  display: flex;
  box-sizing: border-box;
  box-shadow: 0 0 4px #ccc;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
}
</style>

<script>
import api from "@/api.js";

export default {
  methods: {
    // confirmDelete() {
    // },

    deleteProduct() {
      let confirm = window.confirm('¿Está seguro de que desea eliminar este producto?');
      if (confirm) {
        let id = this.$route.params.id;
        api.deleteProduct(id)
        .then(response => {
          this.$router.push('/admin', alert('El producto: ' + response.data.name + ' ha sido eliminado.'))
        })
      }
    }
  }
};
</script>
