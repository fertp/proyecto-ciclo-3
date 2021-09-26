<template>
  <div class="container-categoria">
    <h2 class="container-categorias__title">precios</h2>
    <ul class="container-categoria__list">
      <li>
        <input type="checkbox" id="precios-bajos" />
        <label for="precios-bajos">categoria 1</label>
      </li>
      <li>
        <input type="checkbox" id="precios-altos" />
        <label for="precios-altos">categoria 2</label>
      </li>
      <li>
        <input type="checkbox" id="mejores-precios" />
        <label for="mejores-precios">categoria 3</label>
      </li>
    </ul>
    <h2 class="container-categorias__title">tipo</h2>
    <ul class="container-categoria__list">
      <li>
        <input type="checkbox" id="urbana" />
        <label for="urbana">categoria 4</label>
      </li>
      <li>
        <input type="checkbox" id="todo-terreno" />
        <label for="todo-terreno">categoria 2</label>
      </li>
      <li>
        <input type="checkbox" id="montañismo" />
        <label for="montañismo">categoria 3</label>
      </li>
    </ul>
  </div>
</template>
<style>
.container-categoria__list {
  list-style: none;
  padding: 0;
}
.container-categorias__title {
  font-size: 17px;
}
</style>
