<template>
  <header class="site-header">
    <div class="site-header__container">
      <div class="header-logo">
        <img src="@/assets/bicicleta.svg" alt="" class="header-logo__img" />
      </div>
      <div class="header-user">
        <img src="@/assets/user-icon.jpg" alt="" class="header-user__img" />
        <p class="header-user__name">usuario</p>
        <img src="@/assets/desplegable-icon.png" alt="" class="header-desplegable__img" />
      </div>
    </div>
  </header>
</template>

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
  align-items: center;
  display: flex;
}

.header-user__img {
  display: block;
  height: 36px;
  width: 36px;
  margin-right: 20px;
}
.header-user__name {
  margin-right: 20px;
}

.header-desplegable__img {
  display: block;
  width: 12px;
  height: 12px;
  /* margin-left: 20px; */
}
</style>

<script>
export default {
  name: "PxHeaderAdmin",
};
</script>
