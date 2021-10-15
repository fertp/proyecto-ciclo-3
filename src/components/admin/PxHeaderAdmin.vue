<template>
  <header class="site-header">
    <div class="site-header__container">
      <div class="header-logo">
        <img src="@/assets/bicicleta.svg" alt="" class="header-logo__img" />
      </div>
      <div 
        class="header-user">
        <img src="@/assets/user-icon.jpg" class="header-user__img" />
        <p v-if="user.name" 
          class="header-user__name">{{ user.name }}</p>
        <img src="@/assets/logout.svg" @click="logoutUser" class="header-desplegable__img" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "PxHeaderAdmin",

  data () {
    return {
      // userNav: false
    }
  },
  
  computed: {
    user: function () {
      return this.$store.state.user
    }
  },

  methods: {

    logoutUser() {
      localStorage.removeItem('token')
      window.location.assign(`${process.env.BASE_URL}login`)
    }

  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.site-header {
  background: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  padding: 0 30px;
  box-sizing: border-box;
  width: 100%;
  top: 0;
  background: #efefef;
}
.site-header__container {
  display: flex;
  height: 80px;
  margin: 0 auto;
  max-width: 1280px;
  align-items: center;
  justify-content: space-between;
}
.header-logo__img {
  display: block;
  width: 60px;
}

.header-user {
  position: relative;
  align-items: center;
  display: flex;
}

.header-user__img {
  display: block;
  height: 36px;
  width: 36px;
}
.header-user__name {
  padding: 20px;
}

.header-desplegable__img {
  display: block;
  width: 24px;
  height: 48px;
  /* margin-left: 20px; */
  cursor: pointer;
}
</style>
