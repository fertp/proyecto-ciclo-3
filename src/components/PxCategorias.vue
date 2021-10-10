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
<style>
.categories__list {
  list-style: none;
  padding: 0;
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