<template>
  <div>
    <px-header></px-header>
    
    <router-view />

    <px-footer></px-footer>
  </div>
</template>

<script>
import PxHeader from "@/components/PxHeader.vue";
import PxFooter from "@/components/PxFooter.vue";

export default {
  name: "app",
  components: { PxHeader, PxFooter },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
