<template>
  <admin-layout>
    <h1>CREAR PRODUCTO</h1>
    <px-module>
      <px-product-form
        actionBtn="Crear"
        :product="{}"
        @form-submit="storeProduct"
        :categories="categories"
      />
    </px-module>
  </admin-layout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import PxModule from "@/components/admin/PxModule.vue";
import PxProductForm from "@/components/admin/PxProductForm.vue";
import api from "@/api.js";

export default {
  name: "Create",
  components: { AdminLayout, PxProductForm, PxModule },
  data() {
    return {
      product: {},
      categories: [],
    };
  },
  created() {
    api.getCategories().then((response) => {
      this.categories = response.data;
    });
  },

  methods: {
    storeProduct(product) {
      api.storeProduct(product).then(() => {
        this.$router.push("/admin", alert("El producto se creó correctamente."));
      });
    },
  },
};
</script>
