<template>
  <admin-layout>
    <h1>Imagen</h1>
    <form @submit.prevent="enviarArchivo">
      <input type="file" ref="file" name="image" @change="cargaArchivo" />
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
      file: null,
      // formData: null
    };
  },

  methods: {
    cargaArchivo() {
      this.file = this.$refs.file.files[0];
      // console.log(this.file)
    },

    enviarArchivo() {
      let formData = new FormData();
      formData.append("image", this.file, this.file.name);

      axios
        .post("http://localhost:4000/api/images/store", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((r) => console.log(r.data.fileCreated))
        .catch((error) => console.error("Falló" + error));
    },
  },
};
</script>
