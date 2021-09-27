<template>
  <article class="team-card">
    <h3 class="team-card__name">
      {{member.name}}
    </h3>
    <img
      src="@/assets/Foto_NG.jpg"
      :alt="member.name"
      class="team-card__img"
    />
    <p class="team-card__description">
      {{member.description}} 
    </p>
    <!-- Esto va dentro de un router-link -->
    <a href="tp.fernando@gmail.com" class="team-card__button">CONTACTAR</a>
  </article>
</template>

<style scoped>
.team-card {
  display: block;
  padding-bottom: 30px;
  border-radius: 4px;
  box-shadow: 0 0 2px #ccc;
  text-align: center;
}
.team-card__img {
  display: block;
  width: 100%;
}
.team-card__button {
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 32px;
  background-color: #333;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  border-radius: 4px;
}
.product-card__price {
  font-size: 24px;
  font-weight: bold;
}
</style>

<script>
export default {
  name: "PxTeamCard",
   props: {
    member: {}, 
  },
  // methods: {
  //   getImagePath(img) {
  //     return require(`@/assets/${img}`);
  //   },
  // },
};
</script>