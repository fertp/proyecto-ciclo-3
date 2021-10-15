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
.button {
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  /* width: 60px; */
  height: 30px;
  background-color: #ccc;
  border: 1px solid #444;
  color: #444;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
}
.primary-button {
  background-color: #000;
  color: #ffff;
}
</style>
<script>
import PxLogin from "@/components/login/PxLogin.vue";
// import AdminLayout from "@/layouts/AdminLayout.vue";
export default {
  components: { PxLogin },
  beforeCreate() {
    if(localStorage.getItem('token')) {
      window.location.assign(`${process.env.BASE_URL}admin`)
    }
  }
};
</script>
