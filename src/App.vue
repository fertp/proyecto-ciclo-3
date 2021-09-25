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
