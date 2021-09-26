<template>
  <div>
    <footer class="site-footer">
      <div class="site-footer__container">
        <h4 class="site-footer__title">Equipo</h4>
        <ul class="site-footer__list">
          <li class="site-footer__item">
            <a
              href="https://www.linkedin.com/in/fernando-torres/"
              class="site-footer__item-link"
              target="_blank"
            >
              <img
                src="../assets/linkedin-icon.svg"
                alt=""
                class="site-footer__item-img"
              />
              <span>Fernando Torres</span>
            </a>
          </li>
          <li class="site-footer__item">
            <a href="" class="site-footer__item-link" target="_blank">
              <img
                src="../assets/linkedin-icon.svg"
                alt=""
                class="site-footer__item-img"
              />
              <span>Geiner Lara</span>
            </a>
          </li>
          <li class="site-footer__item">
            <a
              href="https://www.linkedin.com/in/nhora-garcia-4b12b155/"
              class="site-footer__item-link"
              target="_blank"
            >
              <img
                src="../assets/linkedin-icon.svg"
                alt=""
                class="site-footer__item-img"
              />
              <span>Nhora García</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
    <div class="footprint">
      <p class="footprint__text">
        @2021. Grupo 4. Todos los derechos reservados.
      </p>
    </div>
  </div>
</template>

<style scoped>
.site-footer {
  background-color: #0b0d17;
  color: #fff;
  padding: 0 50px;
  box-sizing: border-box;
}

.site-footer__container {
  padding: 30px 0;
  box-sizing: border-box;
}

.site-footer__title {
  font-size: 24px;
}

.site-footer__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footprint {
  padding: 4px 0;
  background-color: #888;
}

.footprint__text {
  padding: 0 50px;
  box-sizing: border-box;
}

.site-footer__item-img {
  display: block;
  width: 20px;
  margin-right: 8px;
}
.site-footer__item-link {
  display: flex;
  color: #fff;
  align-items: center;
  text-decoration: none;
}

.site-footer__item {
  padding: 6px 0;
}
</style>

<script>
export default {
  name: "PxFooter",
};
</script>
