<template>
    <tr>
          <td class="container-table__celda">elemento1</td>
          <td class="container-table__celda">elemento2</td>
          <td class="container-table__celda container-table__celdaboton">
            <router-link to="/admin/edit/1" class="button boton-celda" >Editar</router-link>
          </td>
          <td class="container-table__celda container-table__celdaboton">
            <router-link to="/admin/show/1" class="button boton-celda">Ver</router-link>
          </td>
    </tr>
</template>

<script>

export default {
     name:"PxTableRow" 
    }
</script>
