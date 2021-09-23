<template>
  <header class="site-header">
    <div class="site-header__container">
      <div class="header-logo">
        <p>LOGO</p>
      </div>
      <nav class="site-nav">
        <span class="site-nav__button"> button</span>
        <ul class="site-nav__list">
          <li class="site-nav__items">
            <router-link to="/" >Inicio</router-link> 
          </li>
          <li class="site-nav__items">
            <router-link to="/productos">Productos</router-link> 
          </li>
          <li class="site-nav__items">
            <router-link to="/nosotros">Nosotros</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>


<style>
  .site-header{
    display: block;
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
    box-shadow: 0 0 2px #ccc;
  }
  .site-header__container{
    display: flex;
    height: 80px;
    max-width: 1366px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    
  }
  .site-nav__list{
    display: none;
  }
  .site-nav__items a{
    text-decoration: none;
    color: #000;
  }
  
  @media screen and (min-width:640px){
    .site-nav__list{
    display: flex;
    }
  .site-nav__items{
    list-style: none;
    margin-left: 50px;
    }

  }
 
</style>

<script>
export default {
  name: "PxHeader",
};
</script>