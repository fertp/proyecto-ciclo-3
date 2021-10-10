<template>
  <admin-layout>
    <h1>EDITAR PRODUCTO</h1>
    <div v-if="dataSetted">
      <px-product-form 
        actionBtn="Guardar" 
        :product="product" 
        @form-submit="updateProduct" />
    </div>
    <px-delete-product-form />
  </admin-layout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import PxProductForm from "@/components/admin/PxProductForm.vue";

import PxDeleteProductForm from "@/components/admin/PxDeleteProductForm.vue";
// import productsJson from "@/productos.json";
import api from "@/api.js";

export default {
  name: "Edit",
  components: { 
    AdminLayout, 
    PxProductForm, 
    PxDeleteProductForm 
  },

  data() {
    return {
      product: {},
      dataSetted: false,
    };
  },

  created() {
    let id = this.$route.params.id;
    api.getProduct(id).then((response) => {
      this.product = response.data;
      // console.log(response.data)
      this.dataSetted = true
    })
  },
  
  methods: {
    updateProduct(product) {
      let id = this.$route.params.id;
      api.updateProduct(id, product)
      .then(() => {
        this.$router.push('/admin', alert('El producto se actualizó correctamente.'))
      })
    }
  }
};
</script>
