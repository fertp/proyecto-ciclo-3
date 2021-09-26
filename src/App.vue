<template>
  <div>
    <px-header />

    <router-view />

    <px-footer />
  </div>
</template>

<script>
import PxHeader from "@/components/PxHeader.vue";
import PxFooter from "@/components/PxFooter.vue";

export default {
  name: "App",
  components: { PxHeader, PxFooter },
};
</script>
