<template>
  <table class="grid">
    <slot></slot>
  </table>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
  .grid{
    width:100%;
    font-size:12px;
    color:#383838;
    border: 1px solid rgba(205, 209, 223, 1);
    border-collapse: collapse;
  }
</style>
