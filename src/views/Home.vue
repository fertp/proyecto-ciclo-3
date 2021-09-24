<template>
  <div class="home">
   <!--  <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h1>
      Home
    </h1>
    <px-footer>

    </px-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import PxFooter from "@/components/PxFooter.vue";


export default {
  name: "Home",
  components: {
    PxFooter
  },
};
</script>
