<template>
  <div>
    HEADER
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/productos">Productos</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "PxHeader",
};
</script>