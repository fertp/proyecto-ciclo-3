<template>
  <div class="categories">
    <ul class="categories__list">
      <li class="categories__item"
        v-for="c in categories" :key="c._id">

        <router-link :to="{ name: 'categoria', params: { slug: c.slug } }">{{ c.name }}</router-link>

      </li>
    </ul>
  </div>
</template>
<style scoped>
.categories {
  margin-top: 32px;
  width: 100%;
  padding: 30px;
  background: #efefef;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0 0 2px #ccc;
}
.categories__list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.categories__item {
  padding: 8px 0;
}
.categories__item a {
  text-decoration: none;
  color: #000;
  font-weight: bold;
  transition: all 0.2s;
}
.categories__item a:hover {
  color: #888;
}
</style>

<script>
export default {
  name: "PxCategorias",

  props: {
    categories: []
  }
}
</script>