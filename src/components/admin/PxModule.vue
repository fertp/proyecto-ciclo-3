<template>
  <div class="module">
    
    <slot></slot>

  </div>
</template>
<style>
.module {
  width: 100%;
  max-width: 720px;
  padding: 30px;
  box-sizing: border-box;
  box-shadow: 0 0 4px #ccc;
  margin-top: 30px;
}
</style>
<script>

export default {
  name: 'PxModule',
};
</script>
