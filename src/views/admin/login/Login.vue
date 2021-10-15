<template>
  <div class="login-page">
    <px-login />
  </div>
</template>
<style>
.login-page {
  background-color: #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<script>
import PxLogin from "@/components/admin/PxLogin.vue";
// import AdminLayout from "@/layouts/AdminLayout.vue";
export default {
  components: { PxLogin },
};
</script>
