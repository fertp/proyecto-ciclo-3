<template>
  <div class="title">
    <h1 class="title__text">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'PxTitle',

  props: {
    title: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
  .title {
    display: flex;
    width: 100%;
    height: 200px;
    align-items: center;
    justify-content: center;
    background-color: #000;
  }
  .title__text {
    color: #fff;
    font-size: 48px;
  }
</style>