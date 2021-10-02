<template>
  <main>
    <div class="container-table">
      <div class="table-top">
        <input type="text" class="table-top__search-box" placeholder="Buscar...">
        <div class="table-top__create-button">
          <span class="table-top__create-label">Crear Producto</span>
          <router-link to="/admin/create" class="button">Crear</router-link>
        </div>
      </div>
      <table class="container-table__tabla">
        <tr>
          <th class="table-cabecera table-cabecera__id">ID</th>
          <th class="table-cabecera table-cabecera__nombre">NOMBRE</th>
          <th class="table-cabecera" colspan="2">ACCIONES</th>
        </tr>
        <px-table-row></px-table-row>
        <px-table-row></px-table-row>
        <px-table-row></px-table-row>
        <px-table-row></px-table-row>
        <px-table-row></px-table-row>
      </table>
    </div>
  </main>
</template>
<style>
.container-table {
  
}
.table-top{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:8px ;
  box-sizing: border-box;
  border: 1px solid #ccc;
}
.table-top__search-box{
  display: block;
  height: 30px;
  border: 1px solid #ccc;  
  width: 100%;
  padding: 0 4px;
}
.table-top__create-button{
display: flex;
align-items: center;
}
.table-top__create-label{
  margin: 8px;
  display: block;
  min-width: 120px;
  text-align: right;
}
.container-table__tabla {
  margin: 0 auto;
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  border: 1px solid #ccc;
}
.container-table__celda {
  border: 1px solid #ccc;
  padding: 4px;
}
.table-cabecera {
  background-color: #ccc;
  padding: 20px;
}
.table-cabecera__nombre {
  width: 250px;
}
.container-table__celdaboton {
  width: 40px;
  text-align: center;
}
.table-cabecera__id {
  width: 60px;
}
.boton-celda{
  /* display: inline-flex; */
  margin: 0 auto;
}

</style>
<script>
import PxTableRow from '@/components/admin/PxTableRow.vue'


export default {
  name:"PxTablaAdmin",
  components:{
    PxTableRow
  }
  }
</script>
