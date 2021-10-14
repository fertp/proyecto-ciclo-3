<template>
  <admin-layout>

    <h1>EDITAR PRODUCTO</h1>

    <!-- Edit-form -->
    <px-module v-if="product">
      <px-product-form
        actionBtn="Guardar"
        :product="product"
        @form-submit="updateProduct"
        :categories="categories" />
    </px-module>
    
    <!-- Delete-form -->
    <px-module>
      <px-delete-product-form />
    </px-module>

  </admin-layout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import PxModule from "@/components/admin/PxModule.vue";
import PxProductForm from "@/components/admin/PxProductForm.vue";
import PxDeleteProductForm from "@/components/admin/PxDeleteProductForm.vue";
import api from "@/api.js";

export default {
  name: "Edit",
  components: {
    AdminLayout,
    PxProductForm,
    PxDeleteProductForm,
    PxModule
  },

  data() {
    return {
      product: null,
      categories: [],
    };
  },

  created() {
    let id = this.$route.params.id;
    api.getProduct(id).then((response) => {
      this.product = response.data;
    });
    api.getCategories().then((response) => {
      this.categories = response.data;
    });
  },

  methods: {
    updateProduct(product, file = null) {

      if (file) {
        let formData = new FormData();
        formData.append("image", file, file.name);
        api.storeFile(formData)
        .then(r => { product.image = `http://localhost:4000/${r.data.path}` })
        .then(() => {
          this.updateProductInfo(product)
        })
      }
      else {
        this.updateProductInfo(product)
      }

    },

    updateProductInfo(product) {
      let id = this.$route.params.id;
      api.updateProduct(id, product).then((response) => {
        this.$router.push("/admin/productos", alert("El producto se actualizó correctamente."));
        console.log(response);
      });
    }
  },
};
</script>
