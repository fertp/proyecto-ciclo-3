<template>
  <header class="site-heeader">
    <div class="site-header__container">
      <div class="header-logo">
        <img src="../assets/bicicleta.svg" alt="" class="header-logo__img" />
      </div>
      <nav class="site-nav">
        <ul :class="[showMenu ? 'site-nav__list--show' : '', 'site-nav__list']">
          <li class="site-nav__items">
            <router-link to="/"> Inicio </router-link>
          </li>
          <li class="site-nav__items">
            <router-link to="/productos"> Productos </router-link>
          </li>
          <li class="site-nav__items">
            <router-link to="/nosotros"> Nosotros </router-link>
          </li>
        </ul>
      </nav>
      <div class="btn_menu" v-on:click="toggleMenu">
        <img src="../assets/menuresponsi.png" alt="icionoResponsi" class="imagenMenu" />
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
.site-heeader {
  background: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  padding: 0 30px;
  box-sizing: border-box;
  /* position: relative; */
  position: fixed;
  width: 100%;
  top: 0;
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

.site-nav__items a {
  text-decoration: none;
}
.imagenMenu {
  width: 36px;
}
@media screen and (max-width: 639px) {
  .site-nav__list {
    list-style: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    margin: 0;
    padding: 0;
    padding-left: 30px;
    display: none;
    height: 100vh;
  }
  .site-nav__items {
    padding: 16px 0;
  }
  .site-nav__items a {
    color: #fff;
  }
  .site-nav__list--show {
    display: block;
  }
}
@media screen and (min-width: 640px) {
  .btn_menu {
    display: none;
  }
  .site-nav__list {
    display: flex;
    list-style: none;
  }
  .site-nav__items a {
    margin-left: 30px;
    color: #000;
  }
}
</style>

<script>
import image from "../assets/menuresponsi.png";

export default {
  name: "PxHeader",

  data: function () {
    return {
      image: image,
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      console.log(this.showMenu);
    },
  },
};
// addEventListener("DOMContentLoaded", () => {
//   const btn_menu = document.querySlector(".btn_menu");
//   if (btn_menu) {
//     btn_menu.addEventListener("click", () => {
//       const menu_items = document.querySelector(".site-nav__list");
//       menu_items.classList.toggle("show");
//     });
//   }
// });
</script>
