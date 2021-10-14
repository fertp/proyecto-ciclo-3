<template>
  <div class="product-form">
    <form @submit.prevent="submitForm($event)">
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
      <!-- image -->
      <div class="product-form__field">
        <label>Imagen:</label>
        <div>
          <img 
            class="product-form__image"
            v-if="form.image" 
            :src="form.image" />
          <input 
            type="file" 
            name="image" 
            ref="newFile"
            @change="loadImage"
            hidden/>
          <button 
            type="button" 
            class="button" 
            @click="$refs.newFile.click()" >Seleccionar imagen</button>
        </div>
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
        <router-link to="/admin/productos" class="button">Cancelar</router-link>
        <button type="submit" class="primary-button button" >{{ actionBtn }}</button>
      </div>
    </form>
  </div>
</template>

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
      file: null
    };
  },

  methods: {

    loadImage() {
      this.file = this.$refs.newFile.files[0]
      const reader = new FileReader()
      reader.onload = (e) => {
        this.form.image = e.target.result;
      }
      reader.readAsDataURL(this.$refs.newFile.files[0])
    },

    submitForm() {

      if (this.form.name) {
        let slug = this.form.name.replaceAll(" ", "-").toLowerCase();
        slug.normalize("NFD").replaceAll(/[\u0300-\u036f]/g, "");

        this.form.slug = slug;
      }

      if (this.file) {
        this.$emit("form-submit", this.form, this.file);
      }
      else {
        this.$emit("form-submit", this.form);
      }
    },
  },
};
</script>

<style scoped>
.product-form__field {
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 200px auto;
  align-items: center;
}
.product-form__field > label {
  font-weight: bold;
}
.product-form__image {
  margin-bottom: 12px;
  display: block;
  width: 100%;
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
