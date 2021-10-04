<template>
  <article class="team-card">
    <img src="@/assets/Foto_NG.jpg" :alt="member.name" class="team-card__img" />
    <div class="team-card__text">
      <h3 class="team-card__name">
        {{ member.name }}
      </h3>
      <p class="team-card__description">
        {{ member.description }}
      </p>
      <!-- Esto va dentro de un router-link -->
      <a :href="member.mail" class="team-card__button">CONTACTAR</a>
    </div>
  </article>
</template>

<style scoped>
.team-card {
  display: flex;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 2px #ccc;
  background: #eee;
  align-items: center;
}
.team-card__img {
  display: block;
  width: 30%;
}

.team-card__text {
  margin-left: 30px;
}

.team-card__button {
  display: flex;
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
