<template>
  <header class="site-header">
    <div class="site-header__container">
      <div class="header-logo">
        <p>LOGO</p>
      </div>
      <div class="menu-icon">
        <input class="menu-icon-check" type="checkbox" id="btn-menu" />
        <label for="btn-menu" class="menu-efecto"
          ><img :src="image" alt="menu" class="menu-resp"
        /></label>
      </div>
      <nav class="site-nav mostrar">
        <ul class="site-nav__list">
          <li class="site-nav__items efecto-items">
            <router-link to="/">Inicio</router-link>
          </li>
          <li class="site-nav__items efecto-items">
            <router-link to="/productos">Productos</router-link>
          </li>
          <li class="site-nav__items efecto-items">
            <router-link to="/nosotros">Nosotros</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
.site-header {
  background: #fff;
  width: 100%;
  padding: 0 2rem;
  box-sizing: border-box;
  box-shadow: 0 0 2px #ccc;
  position: fixed;
  top: 0;
}
.menu-icon .menu-resp {
  width: 50px;
  align-items: center;
  display: none;
  margin-right: 2rem;
}
#btn-menu {
  display: none;
}
.menu-efecto img:hover {
  /* background: #ccc1cc; */
  cursor: pointer;
  width: 55px;
}
.site-header a {
  text-decoration: none;
}
.site-header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  flex-wrap: wrap;
}
/* .menu-icon {
  display: none;
} */
.site-nav__list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.site-nav__items {
  display: inline-block;
}
.site-nav__items a {
  display: block;
  padding: 0.5rem 1rem;
  transition: all 0.4s linear;
  border-radius: 15px;
  color: #000;
}
.efecto-items a:hover {
  background: #ccc1cc;
}

@media screen and (max-width: 680px) {
  .site-header {
    padding: 0;
  }
  .site-header a {
    text-decoration: none;
  }
  .site-header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* height: 80px; */
  }
  /* ----------------------------- */
  .menu-icon .menu-resp {
    width: 50px;
    align-items: center;
    display: block;
  }
  .site-nav {
    position: absolute;
    width: 100%;
    margin-top: 11.5rem;
    background: rgba(34, 34, 34, 0.8);
    margin: -100%;
  }
  .header-logo {
    margin-left: 2rem;
  }
  .site-nav__items {
    display: block;
  }
  .site-nav__items a {
    display: block;
    padding: 0.5rem 1rem;
    transition: all 0.4s linear;
    border-radius: 15px;
    color: #fff;
  }
  .efecto-items a:hover {
    background: #ccc1cc;
  }
  #btn-menu:checked ~ .site-nav {
    position: absolute;
    margin: 10;
  }
}
</style>

<script>
import image from "../assets/menuresponsi.png";

export default {
  name: "PxHeader",

  data: function () {
    return { image: image };
  },
};
</script>
