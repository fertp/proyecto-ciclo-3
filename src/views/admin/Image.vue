<template>
  <admin-layout> 
    
    <h1>Imagen</h1>
    <form  @submit.prevent="enviarArchivo">
      <input type="file" name="image" @change="cargaArchivo">
      <button type="submit">Enviar</button>
    </form>

  </admin-layout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import axios from "axios";

export default {
  name: "Imagen",
  components: { AdminLayout },

  data() {
    return {
      image: null,
      formData: null
    };
  },

  methods: {
    cargaArchivo(e) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("img", file);
      formData.append("_method", "PUT");
      this.formData = formData;
    },

    enviarArchivo() {
      axios.post("http://localhost:4000/apì/images/store", this.formData)
      .then(r => console.log(r))
    }
  }

};
</script>