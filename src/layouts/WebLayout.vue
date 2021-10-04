<template>
  <div>
    <!-- site-header -->
    <px-header />

    <slot></slot>

    <!-- site-footer -->
    <px-footer />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

<script>
import PxHeader from "@/components/PxHeader.vue";
import PxFooter from "@/components/PxFooter.vue";

export default {
  name: "WebLayout",
  components: { PxHeader, PxFooter },
};
</script>
