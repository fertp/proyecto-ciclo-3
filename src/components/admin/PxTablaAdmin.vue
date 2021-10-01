<template>
  <main>
    <div class="container-table">
      <table class="container-table__tabla">
        <tr>
          <th class="table-cabecera table-cabecera__id">ID</th>
          <th class="table-cabecera table-cabecera__nombre">NOMBRE</th>
          <th class="table-cabecera" colspan="2">ACCIONES</th>
        </tr>
        <tr>
          <td class="container-table__celda">elemento1</td>
          <td class="container-table__celda">elemento2</td>
          <td class="container-table__celda container-table__celdaboton">
            <button>Editar</button>
          </td>
          <td class="container-table__celda container-table__celdaboton">
            <button>Eliminar</button>
          </td>
        </tr>
        <tr>
          <td class="container-table__celda">elemento1</td>
          <td class="container-table__celda">elemento2</td>
          <td class="container-table__celda container-table__celdaboton">
            <button>Editar</button>
          </td>
          <td class="container-table__celda container-table__celdaboton">
            <button>Eliminar</button>
          </td>
        </tr>
        <tr>
          <td class="container-table__celda">elemento1</td>
          <td class="container-table__celda">elemento2</td>
          <td class="container-table__celda container-table__celdaboton">
            <button>Editar</button>
          </td>
          <td class="container-table__celda container-table__celdaboton">
            <button>Eliminar</button>
          </td>
        </tr>
        <tr>
          <td class="container-table__celda">elemento1</td>
          <td class="container-table__celda">elemento2</td>
          <td class="container-table__celda container-table__celdaboton">
            <button>Editar</button>
          </td>
          <td class="container-table__celda container-table__celdaboton">
            <button>Eliminar</button>
          </td>
        </tr>
        <tr>
          <td class="container-table__celda">elemento1</td>
          <td class="container-table__celda">elemento2</td>
          <td class="container-table__celda container-table__celdaboton">
            <button>Editar</button>
          </td>
          <td class="container-table__celda container-table__celdaboton">
            <button>Eliminar</button>
          </td>
        </tr>
        <tr>
          <td class="container-table__celda">elemento1</td>
          <td class="container-table__celda">elemento2</td>
          <td class="container-table__celda container-table__celdaboton">
            <button>Editar</button>
          </td>
          <td class="container-table__celda container-table__celdaboton">
            <button>Eliminar</button>
          </td>
        </tr>
      </table>
    </div>
  </main>
</template>
<style>
.container-table {
  margin-top: 50px;
  margin-right: 30px;
}

.container-table__tabla {
  margin: 0 auto;
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  border: 2px solid black;
}
.container-table__celda {
  border: 2px solid black;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.table-cabecera {
  background-color: #ccc;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.table-cabecera__nombre {
  width: 250px;
}
.container-table__celdaboton {
  width: 40px;
}
.table-cabecera__id {
  width: 60px;
}

.container-table__celdaboton button {
  width: 100px;
  height: 40px;
  background-color: #000;
  color: #ffff;
  border-radius: 10px;
}
</style>
