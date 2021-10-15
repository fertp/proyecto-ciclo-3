<template>
  <div class="container-form">
    <h2 class="container-form__title">Iniciar sesión</h2>
    <form @submit.prevent="login">
      <div>
        <label>
          Correo
          <input type="text" v-model="email" />
        </label>
      </div>
      <div>
        <label>
          Contraseña
          <input type="text" v-model="password" />
        </label>
      </div>
      <div><button class="primary-button button">Ingresar</button></div>
    </form>
  </div>
</template>
<style scoped>
.container-form {
  display: block;
  width: 100%;
  max-width: 360px;
  padding: 50px 30px;
  box-shadow: 0 0 4px #aaa;
  background-color: #fff;
  box-sizing: border-box;
}
.container-form input {
  display: block;
  width: 100%;
  height: 40px;
  margin-bottom: 24px;
  margin-top: 10px;
  padding-left: 10px;
  box-sizing: border-box;
}
.container-form__title {
  margin-bottom: 20px;
}
</style>
<script>
// import axios from "axios";
import api from "@/api.js";

export default {
  name: "PxHeaderAdmin",
  //   props: {
  //     user: null,
  //   },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      let user = {
        email: this.email,
        password: this.password,
      };
      api
        .userLogin(user)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          localStorage.setItem("token", data.tokenReturn);
          this.$router.push({ name: "admin" });
        })
        .catch((e) => console.log(e.message));
    },
  },
};
</script>
