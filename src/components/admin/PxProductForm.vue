<template>
<div class="product-form">
    <form action="">
      <div class="product-form__field">
        <label>Nombre:</label>
        <input type="text" v-bind:value="producto.name" class="product-form__input"/>
      </div>
      <div class="product-form__field">
        <label>Precio</label>
        <input type="text" v-bind:value="producto.precio" class="product-form__input"/>
      </div>
      <div class="product-form__field">
        <label>Descripción:</label>
        <textarea v-bind:value="producto.description" class="product-form__input" />
      </div>
      <div class="product-form__field">
        <label>Características:</label>
        <textarea v-bind:value="producto.features" class="product-form__input" />
      </div>
      <div class="product-form__field">
        <!-- <label>Categoría</label>
      <select name="" id=""></select> -->
      </div>
      <div class="product-form__field">
        <label>Imagen:</label>
        <input type="file" v-bind:value="producto.image" />
      </div>
      <div class="product-form__field">
        <label>Estado:</label>
        <div>
        
        <label for="activo" class="product-form__radio">
            <input type="radio" id="activo" v-bind:name="producto.status" value="activo" />
            <span>Activo</span>    
        
        </label>
        <label for="inactivo" class="product-form__radio">
            <input type="radio" id="inactivo" v-bind:name="producto.status" value="inactivo"/>
            <span>Inactivo</span>
        </label>
        </div>
      </div>
      <div class="product-form__button">
        <button class="button">Cancelar</button>
        <button class="primary-button button">{{actionBtn}}</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.product-form{
    width: 100%;
    max-width: 720px;
    padding: 30px ;
    box-sizing: border-box;
    box-shadow: 0 0 4px #ccc;
    margin-top: 30px;
}
.product-form__field{
    margin-bottom: 12px;
    display: grid;
    grid-template-columns: 200px auto;
    align-items: center;
    
}
.product-form__field > label{
    font-weight: bold;
}
.product-form__input{
    width: 100%;
    display: block;
}
.product-form__radio{
    display: block;
    margin-bottom: 4px ;
}
.product-form__button{
    display: flex;
    justify-content: flex-end;
}
.product-form__button .button{
    margin-left: 12px;
}
</style>
<script>
export default {
  name: "PxProductForm",
  data() {
      return {
          producto: {},
        actionBtn:"",
    };
  },
  props: {
      action:String
  },
  created(){
      switch (this.action){
        case "create":
            this.actionBtn="Crear"
        break
        case "edit":
            this.actionBtn="Guardar"
        break
      }
        

  }
};
</script>