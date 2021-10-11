<template>
  <admin-layout>
    <h1>CREAR PRODUCTO</h1>
    <px-product-form
      actionBtn="Crear"
      :product="{}"
      @form-submit="storeProduct"
      :categories="categories"
    />
  </admin-layout>
</template>

<script>
import PxProductForm from "@/components/admin/PxProductForm.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
import api from "@/api.js";

export default {
  name: "Create",
  components: { AdminLayout, PxProductForm },
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
