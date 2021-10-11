<template>
  <div class="product-form">
    <form action="">
      <div class="product-form__field">
        <label>Nombre:</label>
        <input type="text" v-model="form.name" class="product-form__input" />
      </div>
      <div class="product-form__field">
        <label>Precio</label>
        <input type="text" v-model="form.price" class="product-form__input" />
      </div>
      <div class="product-form__field">
        <label>Descripción:</label>
        <textarea v-model="form.description" class="product-form__input" />
      </div>
      <div class="product-form__field">
        <label>Características:</label>
        <textarea v-model="form.features" class="product-form__input" />
      </div>
      <div class="product-form__field">
        <label>Categoría</label>
        <select v-model="form.category_id" name="" id="">
          <option :value="c._id" v-for="c in categories" :key="c._id">{{ c.name }}</option>
        </select>
      </div>
      <div class="product-form__field">
        <label>Imagen:</label>
        <input type="text" v-model="form.image" />
      </div>
      <div class="product-form__field">
        <label>Estado:</label>
        <div>
          <label class="product-form__radio">
            <input
              type="radio"
              name="status"
              value="activo"
              v-model="form.status"
              class="product-form__radio-button"
            />
            <span>Activo</span>
          </label>
          <label class="product-form__radio">
            <input
              type="radio"
              name="status"
              value="inactivo"
              v-model="form.status"
              class="product-form__radio-button"
            />
            <span>Inactivo</span>
          </label>
        </div>
      </div>
      <div class="product-form__button">
        <!-- <button class="button" to="/admin">Cancelar</button> -->
        <router-link to="/admin" class="button">Cancelar</router-link>
        <a href="" class="primary-button button" @click="validarForm($event)">{{ actionBtn }}</a>
      </div>
    </form>
  </div>
</template>

<style scoped>
.product-form {
  width: 100%;
  max-width: 720px;
  padding: 30px;
  box-sizing: border-box;
  box-shadow: 0 0 4px #ccc;
  margin-top: 30px;
}
.product-form__field {
  margin-bottom: 12px;
  display: grid;
  grid-template-columns: 200px auto;
  align-items: center;
}
.product-form__field > label {
  font-weight: bold;
}
.product-form__input {
  width: 100%;
  display: block;
}
.product-form__radio {
  display: block;
  margin-bottom: 4px;
}
.product-form__radio-button {
  margin-right: 8px;
}
.product-form__button {
  display: flex;
  justify-content: flex-end;
}
.product-form__button .button {
  margin-left: 12px;
}
</style>
<script>
export default {
  name: "PxProductForm",
  props: {
    actionBtn: String,
    product: Object,
    categories: [],
  },

  data() {
    return {
      form: {
        name: this.product.name || null,
        image: this.product.image || null,
        slug: this.product.slug || null,
        price: this.product.price || null,
        description: this.product.description || null,
        features: this.product.features || null,
        category_id: this.product.category_id || null,
        status: this.product.status || null,
      },
    };
  },

  methods: {
    validarForm(e) {
      e.preventDefault();

      if (this.form.name) {
        let slug = this.form.name.replaceAll(" ", "-").toLowerCase();
        slug.normalize("NFD").replaceAll(/[\u0300-\u036f]/g, "");

        this.form.slug = slug;
      }

      this.$emit("form-submit", this.form);
    },
  },
};
</script>
