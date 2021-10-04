<template>
  <div>
    <!-- site-header -->
    <px-header />

    <slot></slot>

    <!-- site-footer -->
    <px-footer />
  </div>
</template>

<script>
import PxHeader from "@/components/PxHeader.vue";
import PxFooter from "@/components/PxFooter.vue";

export default {
  name: "WebLayout",
  components: { PxHeader, PxFooter },
};
</script>
