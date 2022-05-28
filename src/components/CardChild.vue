<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CardChild',
  props: {
    msg: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    border: 1px solid black;
    box-shadow: 0 4px 20px rgb(49 65 91 / 16%);
    display: flex;
    gap: 12px;
    margin-bottom: 18px;
    padding: 20px;
  }
</style>
